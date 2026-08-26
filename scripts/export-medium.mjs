#!/usr/bin/env node
/**
 * Export a blog post as static HTML that Medium's import tool can read.
 *
 * Medium no longer issues API tokens, but medium.com/p/import still works:
 * paste a URL and Medium imports the story and marks it canonical to that
 * URL. The site is client-rendered React (the importer would see an empty
 * page), so this script renders content/blog/<slug>.md to plain HTML in
 * public/medium/<slug>.html. Once deployed, import
 * https://seifotefa.com/medium/<slug>.html on Medium.
 *
 * Usage:
 *   node scripts/export-medium.mjs <slug>
 *   npm run medium:export -- <slug>
 *
 * The page also works for manual copy-paste into a Medium draft: it opens
 * in your browser after generating.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://seifotefa.com';

const slug = process.argv[2];
if (!slug) {
  console.error('usage: node scripts/export-medium.mjs <slug>');
  process.exit(1);
}
const file = resolve(ROOT, 'content/blog', `${slug}.md`);
if (!existsSync(file)) {
  console.error(`not found: ${file}`);
  process.exit(1);
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

/** Minimal markdown → HTML for the subset these posts use. */
function mdToHtml(md) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s) =>
    esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');

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

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title} — medium export</title>
<link rel="canonical" href="${SITE_URL}/blog/${slug}">
<style>
  body { max-width: 680px; margin: 40px auto; padding: 0 20px; font: 18px/1.6 Georgia, serif; color: #1a1a1a; }
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

const outDir = resolve(ROOT, 'public/medium');
mkdirSync(outDir, { recursive: true });
const outFile = resolve(outDir, `${slug}.html`);
writeFileSync(outFile, html);
console.log(`wrote ${outFile}`);
console.log('');
console.log('next steps:');
console.log(`  1. commit + deploy, then import ${SITE_URL}/medium/${slug}.html at https://medium.com/p/import`);
console.log('  2. (or paste directly: the page just opened — select all, copy, paste into medium.com/new-story)');

const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
execFile(opener, [outFile], () => {});
