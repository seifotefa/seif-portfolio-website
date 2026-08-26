import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      title: "lessons from joining an early stage startup",
      date: "2026-06-12",
      displayDate: "summer '26",
      summary: "ambiguity, structure, and agency — what my first month at backboard.io taught me.",
      category: "writing",
      link: "/blog/startup-lessons",
    },
    {
      title: "OEC 2026 — carleton",
      date: "2026-02-24",
      displayDate: "winter '26",
      summary: "representing mcmaster at the ontario engineering competition in ottawa after winning MEC consulting.",
      category: "competition",
      link: "/blog/oec2026",
    },
    {
      title: "frontline",
      date: "2026-01-11",
      displayDate: "winter '26",
      summary: "AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection.",
      category: "project",
      link: "/blog/frontline",
    },
    {
      title: "project phoenix (MEC 2025)",
      date: "2025-11-27",
      displayDate: "fall '25",
      summary: "first place consulting solution focused on the future of healthcare in canada.",
      category: "competition",
      link: "/blog/mec2025",
    },
    {
      title: "resumock",
      date: "2025-11-06",
      displayDate: "fall '25",
      summary: "AI-powered mock interview coach generating tailored behavioral questions from resumes.",
      category: "project",
      link: "/blog/resumock",
    },
    {
      title: "jinsa",
      date: "2025-10-14",
      displayDate: "fall '25",
      summary: "blockchain-based product authentication platform from hackathon to accelerator.",
      category: "project",
      link: "/blog/jinsa",
    },
    {
      title: "code in place",
      date: "2025-06-24",
      displayDate: "summer '25",
      summary: "teaching programming fundamentals to 15+ students as a stanford section leader.",
      category: "experience",
      link: "/blog/cip2025",
    },
    {
      title: "moVA realities",
      date: "2025-03-01",
      displayDate: "spring '25",
      summary: "requirements analysis, system architecture and design for AI-powered VR platform MVP.",
      category: "experience",
      link: "/blog/mova",
    },
    {
      title: "spark and prepper",
      date: "2025-02-02",
      displayDate: "winter '25",
      summary: "AI study platform turning notes into guides, flashcards, exams, and an AI tutor.",
      category: "project",
      link: "/blog/sparkandprepper",
    },
  ];

  const categories = ['all', 'project', 'experience', 'competition', 'writing'];

  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen text-[#111] py-7 flex flex-col justify-center">
      {/* Navigation Arrow - Back to Home */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-[100] text-gray-500 hover:text-[#111] transition-colors inline-flex items-center justify-center bg-transparent border-0 cursor-pointer"
        aria-label="Back to home"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="max-w-2xl w-full mx-auto rounded-2xl px-5 md:px-8 pt-6 md:pt-8 pb-8 bg-white/60">
        <h1 className="font-[600] text-base md:text-lg text-[#111]">blog</h1>
        <p className="mt-1 text-sm text-gray-600 leading-normal font-mono-desc">
          projects, experiences, and learnings from competitions and internships.
        </p>

        {/* Category filter */}
        <div className="flex items-center gap-3 mt-4 mb-5 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`hl-quiet text-xs font-mono-desc bg-transparent border-0 p-0 cursor-pointer ${
                selectedCategory === category ? 'text-[#111] font-[500]' : 'text-gray-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-3">
          {filteredPosts.map((post, index) => (
            <div key={index} className="text-sm">
              <div className="flex items-baseline justify-between gap-2">
                <Link to={post.link} className="hl-quiet font-[500] text-[#111] inline-flex items-center gap-0.5 min-w-0">
                  {post.title}
                  <FiArrowRight className="w-3 h-3 opacity-60 shrink-0" />
                </Link>
                <span className="text-gray-400 text-xs shrink-0 font-mono-desc">{post.displayDate}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-mono-desc font-light mt-0.5">
                {post.summary}
              </p>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-xs text-gray-500 font-mono-desc py-6">no posts found in this category.</p>
        )}
      </div>
    </div>
  );
};
