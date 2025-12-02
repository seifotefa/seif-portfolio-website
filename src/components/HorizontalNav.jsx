import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const HorizontalNav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* Mobile Navigation */}
      <nav className="mobile:hidden fixed top-6 left-6 z-50">
        <div className="relative">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm text-gray-500 hover:text-[#111111] transition-colors"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
              {pages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === page.path
                      ? 'text-[#111111] bg-gray-100'
                      : 'text-gray-500 hover:text-[#111111] hover:bg-gray-50'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}; 