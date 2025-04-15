import { useState } from 'react';



export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#111111] border-b border-[#2a2a2a] sticky top-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-1">
              <span className="text-2xl font-semibold text-[#e0e0e0]">seif</span>
              <span className="text-2xl font-semibold text-[#8b5cf6]">otefa</span>
            </a>
    
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
              <ul className="font-medium flex flex-col p-4 mt-4 border border-[#1a1a1a] rounded-lg bg-[#111111] md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#e0e0e0] rounded-sm hover:bg-[#1a1a1a] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">home</a>
                </li>
                <li>
                  <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#e0e0e0] rounded-sm hover:bg-[#1a1a1a] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">about</a>
                </li>
                <li>
                  <a href="#experience" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#e0e0e0] rounded-sm hover:bg-[#1a1a1a] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">experience</a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#e0e0e0] rounded-sm hover:bg-[#1a1a1a] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">projects</a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-[#e0e0e0] rounded-sm hover:bg-[#1a1a1a] hover:text-[#8b5cf6] md:hover:bg-transparent md:p-0">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };