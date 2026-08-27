#!/usr/bin/env node
/**
 * Export blog posts as static HTML that Medium's import tool can read.
 *
 * Medium no longer issues API tokens, but medium.com/p/import still works:
 * paste a URL and Medium imports the story and marks it canonical to that
 * URL. The site is client-rendered React (the importer would see an empty
 * page), so this script renders content/blog/<slug>.md to plain HTML in
 * public/medium/<slug>.html. Once deployed, import
 * https://seifotefa.com/medium/<slug>.html on Medium.
 *
 * Usage:
 *   node scripts/export-medium.mjs <slug>   # one post (opens in browser)
 *   node scripts/export-medium.mjs all      # every post in content/blog/
 *   npm run medium:export -- <slug|all>
 *
 * The pages also work for manual copy-paste into a Medium draft.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://seifotefa.com';
const CONTENT_DIR = resolve(ROOT, 'content/blog');
const OUT_DIR = resolve(ROOT, 'public/medium');

/** Minimal markdown → HTML for the subset these posts use. */
function mdToHtml(md) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // paths may already be %-encoded (e.g. %20) — only encode literal spaces
  const absolutize = (url) => (url.startsWith('/') ? `${SITE_URL}${url.replace(/ /g, '%20')}` : url);
  const inline = (s) =>
    esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${absolutize(u)}">${t}</a>`);

  const out = [];
  const lines = md.split('\n');
  let para = [];
  let list = null; // 'ul' | 'ol'
  let inCode = false;
  let code = [];

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      out.push(`</${list}>`);
      list = null;
    }
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      flushPara();
      flushList();
      if (inCode) {
        out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
        code = [];
      }
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      code.push(line);
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/);
    if (img) {
      flushPara();
      flushList();
      out.push(`<figure><img src="${absolutize(img[2])}" alt="${esc(img[1])}">${img[1] ? `<figcaption>${esc(img[1])}</figcaption>` : ''}</figure>`);
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      flushPara();
      flushList();
      out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
      continue;
    }
    if (/^---+\s*$/.test(line)) {
      flushPara();
      flushList();
      out.push('<hr>');
      continue;
    }
    const li = line.match(/^\s*[-*]\s+(.*)$/);
    const oli = line.match(/^\s*\d+\.\s+(.*)$/);
    if (li || oli) {
      flushPara();
      const want = li ? 'ul' : 'ol';
      if (list !== want) {
        flushList();
        out.push(`<${want}>`);
        list = want;
      }
      out.push(`<li>${inline((li || oli)[1])}</li>`);
      continue;
    }
    const bq = line.match(/^>\s?(.*)$/);
    if (bq) {
      flushPara();
      flushList();
      out.push(`<blockquote><p>${inline(bq[1])}</p></blockquote>`);
      continue;
    }
    if (line.trim() === '') {
      flushPara();
      flushList();
      continue;
    }
    para.push(line.trim());
  }
  flushPara();
  flushList();
  return out.join('\n');
}

function exportSlug(slug) {
  const file = resolve(CONTENT_DIR, `${slug}.md`);
  if (!existsSync(file)) {
    console.error(`not found: ${file}`);
    return null;
  }
  const raw = readFileSync(file, 'utf8');
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const frontmatter = {};
  if (fmMatch) {
    for (const line of fmMatch[1].split('\n')) {
      const m = line.match(/^([\w-]+):\s*(.*)$/);
      if (m) frontmatter[m[1]] = m[2].trim();
    }
  }
  const body = fmMatch ? raw.slice(fmMatch[0].length) : raw;
  const title = frontmatter.title || slug;
  const desc = (frontmatter.summary || title).replace(/"/g, '&quot;');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="author" content="Seif Otefa">
<meta name="description" content="${desc}">
<meta property="og:type" content="article">
<meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${SITE_URL}/medium/${slug}.html">
<meta property="article:author" content="Seif Otefa">
${frontmatter.date ? `<meta property="article:published_time" content="${frontmatter.date}">` : ''}
<link rel="canonical" href="${SITE_URL}/blog/${slug}">
<style>
  body { max-width: 680px; margin: 40px auto; padding: 0 20px; font: 18px/1.6 Georgia, serif; color: #1a1a1a; }
  img { max-width: 100%; height: auto; }
  figure { margin: 24px 0; }
  figcaption { font: 14px/1.4 system-ui, sans-serif; color: #6b6b6b; text-align: center; margin-top: 6px; }
</style>
</head>
<body>
<article>
<h1>${title}</h1>
${mdToHtml(body)}
</article>
</body>
</html>
`;

  mkdirSync(OUT_DIR, { recursive: true });
  const outFile = resolve(OUT_DIR, `${slug}.html`);
  writeFileSync(outFile, html);
  return outFile;
}

const arg = process.argv[2];
if (!arg) {
  console.error('usage: node scripts/export-medium.mjs <slug|all>');
  process.exit(1);
}

if (arg === 'all') {
  const slugs = readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
  const ok = [];
  for (const slug of slugs) {
    const out = exportSlug(slug);
    if (out) {
      console.log(`wrote public/medium/${slug}.html`);
      ok.push(slug);
    }
  }
  console.log('');
  console.log('after deploy, import these at https://medium.com/p/import :');
  for (const slug of ok) console.log(`  ${SITE_URL}/medium/${slug}.html`);
} else {
  const outFile = exportSlug(arg);
  if (!outFile) process.exit(1);
  console.log(`wrote ${outFile}`);
  console.log('');
  console.log('next steps:');
  console.log(`  1. commit + deploy, then import ${SITE_URL}/medium/${arg}.html at https://medium.com/p/import`);
  console.log('  2. (or paste directly: the page just opened — select all, copy, paste into medium.com/new-story)');
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  execFile(opener, [outFile], () => {});
}
