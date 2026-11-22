import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showArchive, setShowArchive] = useState(false);
  useEffect(() => {
    document.title = 'Seif Otefa | Writing';
    return () => { document.title = 'Seif Otefa'; };
  }, []);

  const blogPosts = [
    {
      title: "my summer at backboard",
      date: "2026-08-06",
      displayDate: "summer '26",
      summary: "building backboard studio, launching the ambassador program, and the work around it.",
      category: "experience",
      link: "/blog/backboard",
    },
    {
      title: "lessons from joining an early stage startup",
      date: "2026-06-12",
      displayDate: "summer '26",
      summary: "ambiguity, structure, and agency — what my first month at backboard.io taught me.",
      category: "writing",
      link: "/blog/startup-lessons",
    },
    {
      title: "project phoenix — MEC & OEC 2026",
      date: "2026-02-24",
      displayDate: "winter '26",
      summary: "first place at MEC consulting, then representing mcmaster at the ontario engineering competition in ottawa.",
      category: "competition",
      link: "/blog/phoenix",
    },
    {
      title: "frontline",
      date: "2026-01-11",
      displayDate: "winter '26",
      summary: "AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection.",
      category: "project",
      link: "/blog/frontline",
      archived: true,
    },
    {
      title: "resumock",
      date: "2025-11-06",
      displayDate: "fall '25",
      summary: "AI-powered mock interview coach generating tailored behavioral questions from resumes.",
      category: "project",
      link: "/blog/resumock",
      archived: true,
    },
    {
      title: "jinsa",
      date: "2025-10-14",
      displayDate: "fall '25",
      summary: "blockchain-based product authentication platform from hackathon to accelerator.",
      category: "project",
      link: "/blog/jinsa",
      archived: true, // rewrite before un-archiving
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
      archived: true,
    },
    {
      title: "spark and prepper",
      date: "2025-02-02",
      displayDate: "winter '25",
      summary: "AI study platform turning notes into guides, flashcards, exams, and an AI tutor.",
      category: "project",
      link: "/blog/sparkandprepper",
      archived: true,
    },
  ];

  const categories = ['all', 'project', 'experience', 'competition', 'writing'];

  const byCategory = (post) => selectedCategory === 'all' || post.category === selectedCategory;
  const byDate = (a, b) => new Date(b.date) - new Date(a.date);
  const filteredPosts = blogPosts.filter(p => !p.archived).filter(byCategory).sort(byDate);
  const archivedPosts = blogPosts.filter(p => p.archived).filter(byCategory).sort(byDate);

  const PostRow = ({ post, muted }) => (
    <Link to={post.link} className={`post-row ${muted ? 'muted' : ''}`}>
      <span className="post-row-head">
        <span className="post-row-title">{post.title}</span>
        <span className="meta">{post.displayDate}</span>
      </span>
      <span className="post-row-sum">{post.summary}</span>
    </Link>
  );

  return (
    <>
      <h1 className="page-title">Writing</h1>
      <p className="lede">Projects, experiences, and learnings from competitions and internships.</p>

      <div className="filter" role="group" aria-label="Filter by category">
        {categories.map((category) => (
          <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div>{filteredPosts.map((post) => <PostRow key={post.link} post={post} />)}</div>

      {filteredPosts.length === 0 && archivedPosts.length === 0 && (
        <p className="meta">no posts in this category.</p>
      )}

      {archivedPosts.length > 0 && (
        <>
          <button type="button" className="toggle" aria-expanded={showArchive} onClick={() => setShowArchive((v) => !v)}>
            archive ({archivedPosts.length}) {showArchive ? '↑' : '↓'}
          </button>
          {showArchive && (
            <div style={{ marginTop: 10 }}>{archivedPosts.map((post) => <PostRow key={post.link} post={post} muted />)}</div>
          )}
        </>
      )}
    </>
  );
};
