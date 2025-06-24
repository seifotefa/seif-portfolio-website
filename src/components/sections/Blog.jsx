import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Dynamically import all markdown files in src/posts
const postFiles = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });

function parseFrontmatter(md) {
  const match = md.match(/^---([\s\S]*?)---/);
  if (!match) return {};
  const frontmatter = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) frontmatter[key.trim()] = rest.join(':').trim();
  });
  return frontmatter;
}

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('Available postFiles:', Object.keys(postFiles));
    Promise.all(
      Object.entries(postFiles).map(async ([path, loader]) => {
        const md = await loader();
        const frontmatter = parseFrontmatter(md);
        const slug = path.split('/').pop().replace('.md', '');
        return {
          slug,
          ...frontmatter,
        };
      })
    ).then((posts) => {
      console.log('Loaded slugs:', posts.map(p => p.slug));
      setPosts(posts);
    });
  }, []);

  return (
    <section id="blog" className="scroll-mt-24 bg-[#fff] text-[#111]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-8 mt-16 mb-12 text-center">
        <h2 className="text-3xl font-bold mb-8">stuff i wrote about my experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {posts.length === 0 && (
            <div className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold text-[#111] mb-2">No posts yet!</h3>
            </div>
          )}
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-6 text-left cursor-pointer hover:shadow-md transition block"
            >
              <h3 className="text-xl font-semibold text-[#111] mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{post.summary}</p>
              <span className="text-xs text-gray-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 