#!/usr/bin/env node
/**
 * Pull your latest Medium posts into content/medium/ as markdown.
 *
 * Usage:
 *   node scripts/pull-medium.mjs [--handle yourMediumHandle]
 *   npm run medium:pull
 *
 * Reads your public RSS feed (medium.com/feed/@handle — only exposes the
 * ~10 most recent posts), converts each post's HTML to markdown, and writes
 * content/medium/<slug>.md with frontmatter. Posts that already exist on
 * disk are skipped, so running it weekly only picks up what's new. Posts
 * that were pushed FROM this site (canonical link back to seifotefa.com)
 * are skipped too, so you don't re-import your own articles.
 *
 * Set the handle below, pass --handle, or set MEDIUM_HANDLE in .env.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'content/medium');
const SITE_URL = 'https://seifotefa.com';
const DEFAULT_HANDLE = 'seifotefa'; // <-- change if your Medium handle differs

// --- tiny .env loader ---
const envPath = resolve(ROOT, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const args = process.argv.slice(2);
const handleIdx = args.indexOf('--handle');
const handle = (handleIdx !== -1 && args[handleIdx + 1]) || process.env.MEDIUM_HANDLE || DEFAULT_HANDLE;

// --- helpers ---
const decodeEntities = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'untitled';

/** Small HTML → markdown converter covering what Medium's feed emits. */
function htmlToMarkdown(html) {
  let s = html;
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  // code blocks first so inner tags survive untouched
  s = s.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, c) => `\n\`\`\`\n${decodeEntities(c)}\n\`\`\`\n`);
  s = s.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, c) => `\n\`\`\`\n${decodeEntities(c.replace(/<[^>]+>/g, ''))}\n\`\`\`\n`);
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, c) => `\`${decodeEntities(c)}\``);
  // figures/images (keep remote URL)
  s = s.replace(/<figure[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"[^>]*>[\s\S]*?(?:<figcaption[^>]*>([\s\S]*?)<\/figcaption>)?[\s\S]*?<\/figure>/gi,
    (_, src, cap) => `\n![${cap ? cap.replace(/<[^>]+>/g, '').trim() : ''}](${src})\n`);
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*>/gi, '\n![]($1)\n');
  // headings (Medium uses h3/h4 in feeds; map to ##/###)
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n## $1\n');
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n### $1\n');
  // inline formatting
  s = s.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, '**$1**');
  s = s.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, '*$1*');
  s = s.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');
  // lists
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  s = s.replace(/<\/?(?:ul|ol)[^>]*>/gi, '\n');
  // blockquotes
  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, c) =>
    '\n' + c.replace(/<[^>]+>/g, '').trim().split('\n').map((l) => `> ${l.trim()}`).join('\n') + '\n');
  // paragraphs, breaks, rules
  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<hr[^>]*>/gi, '\n---\n');
  // strip whatever is left
  s = s.replace(/<[^>]+>/g, '');
  s = decodeEntities(s);
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

// --- fetch the feed ---
const feedUrl = `https://medium.com/feed/@${handle}`;
console.log(`fetching ${feedUrl}`);
const res = await fetch(feedUrl, { headers: { 'User-Agent': 'seifotefa.com blog sync' } });
if (!res.ok) {
  console.error(`feed request failed (${res.status}). Is "@${handle}" the right Medium handle?`);
  process.exit(1);
}
const xml = await res.text();

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
if (items.length === 0) {
  console.log('feed has no posts.');
  process.exit(0);
}

mkdirSync(OUT_DIR, { recursive: true });
const existing = new Set(readdirSync(OUT_DIR).map((f) => f.replace(/\.md$/, '')));
// slugs of posts authored on this site (pushed to Medium with canonical links)
const ownSlugs = new Set(
  existsSync(resolve(ROOT, 'content/blog'))
    ? readdirSync(resolve(ROOT, 'content/blog')).map((f) => f.replace(/\.md$/, ''))
    : []
);

const pick = (item, tag) => {
  const cdata = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdata) return cdata[1].trim();
  const plain = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return plain ? plain[1].trim() : '';
};

let imported = 0;
for (const item of items) {
  const title = decodeEntities(pick(item, 'title'));
  const link = pick(item, 'link').split('?')[0];
  const pubDate = pick(item, 'pubDate');
  const html = pick(item, 'content:encoded') || pick(item, 'description');
  const slug = slugify(title);

  if (existing.has(slug)) {
    console.log(`skip (already imported): ${title}`);
    continue;
  }
  if (ownSlugs.has(slug) || html.includes(SITE_URL)) {
    console.log(`skip (originated on ${SITE_URL}): ${title}`);
    continue;
  }

  const date = pubDate ? new Date(pubDate).toISOString().slice(0, 10) : '';
  const md = htmlToMarkdown(html);
  const out = `---\ntitle: ${title}\ndate: ${date}\nsource: medium\nmediumUrl: ${link}\n---\n\n${md}\n`;
  writeFileSync(resolve(OUT_DIR, `${slug}.md`), out);
  console.log(`imported: ${title} -> content/medium/${slug}.md`);
  imported++;
}

console.log(imported === 0 ? 'nothing new.' : `done — ${imported} new post(s).`);
