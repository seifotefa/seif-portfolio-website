#!/usr/bin/env node
/**
 * Push a blog post from content/blog/<slug>.md to Medium.
 *
 * Usage:
 *   node scripts/publish-medium.mjs <slug> [--publish]
 *   npm run medium:push -- <slug> [--publish]
 *
 * Creates a DRAFT on Medium by default; pass --publish to make it public
 * immediately. The post's canonicalUrl points at seifotefa.com so your site
 * stays the SEO-canonical source.
 *
 * Auth: needs a Medium integration token (medium.com → Settings → Security
 * and apps → Integration tokens). Put it in .env as MEDIUM_TOKEN=... or
 * export it in your shell. Note: Medium's API is create-only — you cannot
 * update or delete a post through it afterward.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://seifotefa.com';
const API = 'https://api.medium.com/v1';

// --- tiny .env loader (no deps) ---
const envPath = resolve(ROOT, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

// --- args ---
const args = process.argv.slice(2);
const publish = args.includes('--publish');
const slug = args.find((a) => !a.startsWith('--'));
if (!slug) {
  console.error('usage: node scripts/publish-medium.mjs <slug> [--publish]');
  console.error('       (reads content/blog/<slug>.md)');
  process.exit(1);
}

const token = process.env.MEDIUM_TOKEN;
if (!token) {
  console.error('MEDIUM_TOKEN is not set. Add it to .env or export it.');
  console.error('Get one at medium.com → Settings → Security and apps → Integration tokens.');
  process.exit(1);
}

// --- read + parse the markdown file ---
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
const tags = (frontmatter.tags || '')
  .split(',')
  .map((t) => t.trim())
  .filter(Boolean)
  .slice(0, 5); // Medium accepts at most 5 tags

// Medium's `title` field is metadata only — the visible title must be in content.
const content = `# ${title}\n\n${body}`;

// --- talk to Medium ---
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const meRes = await fetch(`${API}/me`, { headers });
if (!meRes.ok) {
  console.error(`GET /me failed (${meRes.status}): ${await meRes.text()}`);
  process.exit(1);
}
const { data: me } = await meRes.json();
console.log(`authenticated as ${me.username} (${me.name})`);

const postRes = await fetch(`${API}/users/${me.id}/posts`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    title,
    contentFormat: 'markdown',
    content,
    canonicalUrl: `${SITE_URL}/blog/${slug}`,
    tags,
    publishStatus: publish ? 'public' : 'draft',
  }),
});
if (!postRes.ok) {
  console.error(`POST /posts failed (${postRes.status}): ${await postRes.text()}`);
  process.exit(1);
}
const { data: post } = await postRes.json();
console.log(`${post.publishStatus === 'public' ? 'published' : 'draft created'}: ${post.url}`);
if (post.publishStatus !== 'public') {
  console.log('review it on Medium, then hit publish there (or rerun with --publish next time).');
}
