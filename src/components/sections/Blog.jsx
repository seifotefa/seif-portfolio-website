import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WebringLinks } from '../WebringLinks';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const blogPosts = [
    {
      title: "Frontline",
      date: "2026-01-11",
      summary: "AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection.",
      category: "Project",
      link: "/blog/frontline",
      image: "/assets/frontline.png"
    },
    {
      title: "MoVA Realities",
      date: "2025-03-01",
      summary: "Requirements analysis, system architecture and design for AI-powered VR platform MVP.",
      category: "Experience",
      link: "/blog/mova",
      image: "/assets/mova.png"
    },
    {
      title: "Code in Place",
      date: "2025-06-24",
      summary: "Teaching programming fundamentals to 15+ students as a Stanford section leader.",
      category: "Experience",
      link: "/blog/cip2025",
      image: "/assets/cipclassphoto.png"
    },
    {
      title: "Jinsa",
      date: "2025-10-14",
      summary: "Blockchain-based product authentication platform from hackathon to accelerator.",
      category: "Project",
      link: "/blog/jinsa",
      image: "/assets/jinsalogo.png"
    },
    {
      title: "Project Phoenix (McMaster Engineering Competition 2025)",
      date: "2025-11-27",
      summary: "First place consulting solution focused on the future of healthcare in Canada.",
      category: "Competition",
      link: "/blog/mec2025",
      image: "/assets/mec1.JPG"
    },
    {
      title: "ResuMock",
      date: "2025-11-06",
      summary: "AI-powered mock interview coach generating tailored behavioral questions from resumes.",
      category: "Project",
      link: "/blog/resumock",
      image: "/assets/resumock.png"
    },
    {
      title: "Spark and Prepper",
      date: "2025-02-02",
      summary: "AI study platform turning notes into guides, flashcards, exams, and an AI tutor.",
      category: "Project",
      link: "/blog/sparkandprepper",
      image: "/assets/sparkandprepper.png"
    }
  ];

  const categories = ['all', 'Project', 'Experience', 'Competition'];

  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
      return 0;
    });

  return (
    <section id="blog" className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
      {/* Navigation Arrow - Back to Home */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-[100] text-gray-500 hover:text-[#111111] transition-colors inline-flex items-center justify-center bg-transparent border-0 cursor-pointer"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-6 text-black">Blog</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Projects, experiences, and learnings from competitions and internships.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm border transition ${
                  selectedCategory === category
                    ? 'bg-black text-white border-black'
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 bg-gray-50 text-gray-700 text-sm"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
          </select>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className="bg-gray-50 border border-gray-300 p-4 hover:border-black transition group"
            >
              {post.image && (
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>

              <h3 className="text-xl font-medium text-black mb-2 group-hover:underline">
                {post.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No posts found in this category.
          </div>
        )}
      </div>

      {/* Bottom footer bar */}
      <div className="fixed left-0 right-0 bottom-0 z-50 bg-white border-t border-gray-200 px-4 py-3 md:px-8 md:py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-3 md:gap-5">
            <Link to="/about" className="font-medium text-[1rem] md:text-[1.25rem] underline underline-offset-2">Seif Otefa</Link>
            <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaGithub className="w-5 h-5 md:w-6 md:h-6" /></a>
            <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaLinkedin className="w-5 h-5 md:w-6 md:h-6" /></a>
            <a href="https://x.com/0xseifo" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaXTwitter className="w-5 h-5 md:w-6 md:h-6" /></a>
            <Link to="/contact" className="text-gray-600 hover:text-black" aria-label="Contact"><FaEnvelope className="w-5 h-5 md:w-6 md:h-6" /></Link>
            <a href="https://seifotefa.com/resume" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black" aria-label="Resume"><FaRegFileAlt className="w-5 h-5 md:w-6 md:h-6" /></a>
          </div>
          <WebringLinks variant="footer" />
          <p className="text-[0.85rem] md:text-[0.95rem] text-gray-600 leading-snug">
            <Link to="/experience" className="underline underline-offset-2 hover:text-black">experience</Link>{' '}
            <span className="mx-1">|</span>{' '}
            <Link to="/projects" className="underline underline-offset-2 hover:text-black">projects</Link>{' '}
            <span className="mx-1">|</span>{' '}
            <Link to="/blog" className="underline underline-offset-2 hover:text-black">blog</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
