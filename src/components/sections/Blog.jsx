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
  const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'
  const [filterBy, setFilterBy] = useState('all'); // 'all', 'projects', 'experiences'

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

  // Sort and filter posts
  const sortedAndFilteredPosts = posts
    .filter(post => {
      if (filterBy === 'all') return true;
      if (filterBy === 'projects') return post.slug === 's&p' || post.slug === 'jinsa' || post.slug === 'resumock';
      if (filterBy === 'experiences') return post.slug === 'cip2025' || post.slug === 'mec2025';
      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <>
      <section id="blog" className="scroll-mt-24 bg-[#fff] text-[#111]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-8 mt-24 mb-12">
          <h2 className="text-5xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Notebook</h2>
          
          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {/* Filter by Type */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">Filter:</span>
              <div className="flex gap-2">
                {['all', 'projects', 'experiences'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFilterBy(filter)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filterBy === filter 
                        ? 'bg-[#4A90E2] text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {filter === 'all' ? 'All' : 
                     filter === 'projects' ? 'Projects' : 'Experiences'}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sort by Date */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">Sort:</span>
              <div className="flex gap-2">
                {['newest', 'oldest'].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => setSortBy(sort)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      sortBy === sort 
                        ? 'bg-[#4A90E2] text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {sort === 'newest' ? 'Newest First' : 'Oldest First'}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {sortedAndFilteredPosts.length === 0 && (
            <div className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-[#111] mb-2">No posts found!</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
          
          <div className="space-y-8">
            {sortedAndFilteredPosts.map((post) => {
              // Determine reading time based on slug
              let readingTime = '5 min read';
              if (post.slug === 'cip2025') readingTime = '3 min read';
              else if (post.slug === 'mec2025') readingTime = '4 min read';
              else if (post.slug === 'jinsa') readingTime = '7 min read';
              else if (post.slug === 'resumock') readingTime = '6 min read';
              
              
              let formattedTitle = post.title;
              if (post.title.toLowerCase().includes('project deep dive')) {
                formattedTitle = post.title.replace(/project deep dive\s*–?\s*/i, 'project spotlight – ');
              }
              
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-8 text-left cursor-pointer hover:shadow-lg transition-all duration-300 block"
                >
                  {/* Article Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-[#111] mb-3 leading-tight">{formattedTitle}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{readingTime}</span>
                    </div>
                  </div>
                  
                  {/* Article Summary */}
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed text-base">{post.summary}</p>
                  </div>
                  
                  {/* Article Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                    <span className="text-sm text-[#4A90E2] font-medium hover:text-[#357ABD] transition-colors">
                      Read more →
                    </span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#4A90E2] text-white rounded-full text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        {post.slug === 's&p' || post.slug === 'resumock' ? 'Project Spotlight' : 
                         post.slug === 'jinsa' ? 'Project & Experience' : 
                         post.slug === 'cip2025' || post.slug === 'mec2025' ? 'Experience' : 'Article'}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}; 