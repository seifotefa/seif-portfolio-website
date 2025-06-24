import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#fff] border-b border-[#e5e5e5] sticky top-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1">
              <span className="text-2xl font-semibold text-[#111]">seif</span>
              <span className="text-2xl font-semibold text-[#8b5cf6]">otefa</span>
            </Link>
    
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
    
            {/* Navigation Links */}
            <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 mt-4 border border-[#e5e5e5] rounded-lg bg-[#fff] md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#111] rounded-sm hover:bg-[#f3f3f3] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#111] rounded-sm hover:bg-[#f3f3f3] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">about</Link>
                </li>
                <li>
                  <Link to="/experience" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#111] rounded-sm hover:bg-[#f3f3f3] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">experience</Link>
                </li>
                <li>
                  <Link to="/projects" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#111] rounded-sm hover:bg-[#f3f3f3] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">projects</Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#111] rounded-sm hover:bg-[#f3f3f3] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">blog</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#111] rounded-sm hover:bg-[#f3f3f3] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
};