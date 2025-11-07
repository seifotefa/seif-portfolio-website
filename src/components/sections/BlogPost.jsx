import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const postFiles = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });

function parseFrontmatterAndContent(md) {
  const match = md.match(/^---([\s\S]*?)---([\s\S]*)$/);
  if (!match) return [{}, md];
  const frontmatter = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) frontmatter[key.trim()] = rest.join(':').trim();
  });
  return [frontmatter, match[2].trim()];
}

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const file = postFiles[`/src/posts/${slug}.md`];
    if (!file) {
      setNotFound(true);
      return;
    }
    file().then(md => {
      const [frontmatter, content] = parseFrontmatterAndContent(md);
      setPost({ ...frontmatter, content });
    });
  }, [slug]);

  if (notFound) return (
    <>
      <div className="max-w-2xl mx-auto mt-24 text-center text-2xl">404: Post not found</div>
    </>
  );
  if (!post) return (
    <>
      <div className="max-w-2xl mx-auto mt-24 text-center text-xl">Loading...</div>
    </>
  );

  // Determine reading time and tag based on slug
  let readingTime = '5 min read';
  if (slug === 'cip2025') readingTime = '3 min read';
  else if (slug === 'jinsa') readingTime = '7 min read';
  else if (slug === 'resumock') readingTime = '6 min read';

  let tag = 'Article';
  if (slug === 's&p' || slug === 'resumock') tag = 'Project Spotlight';
  else if (slug === 'jinsa') tag = 'Project & Experience';

  return (
    <>
      <section className="scroll-mt-24 bg-[#fff] text-[#111] min-h-screen">
        <div className="max-w-2xl mx-auto px-6 md:px-12 pt-16 pb-16 mt-24 mb-12">
          <h1 className="text-5xl font-synonym font-light text-center mb-4" style={{ fontFamily: 'Synonym, monospace' }}>{post.title}</h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-gray-500 text-sm">{post.date}</div>
            <span className="text-gray-300">•</span>
            <div className="text-gray-500 text-sm">{readingTime}</div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#4A90E2] text-white rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{tag}</span>
            </div>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}; 