import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const HorizontalNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle back navigation - for blog posts, go to /blog first, then home
  const handleBackClick = (e) => {
    e.preventDefault();
    const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
    
    if (isBlogPost) {
      navigate('/blog');
    } else {
      navigate('/');
    }
  };

  // Define the page order for navigation
  const pages = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/experience', name: 'resume/cv' },
    { path: '/projects', name: 'projects' },
    { path: '/blog', name: 'blog' },
    { path: '/contact', name: 'contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden mobile:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === page.path
                  ? 'text-[#111111]'
                  : 'text-gray-500 hover:text-[#111111]'
              }`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Back Arrow */}
      <nav className="mobile:hidden fixed top-6 left-6 z-50">
        <button
          onClick={handleBackClick}
          className="text-gray-500 hover:text-[#111111] transition-colors inline-flex items-center justify-center bg-transparent border-0 cursor-pointer"
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </nav>
    </>
  );
}; 