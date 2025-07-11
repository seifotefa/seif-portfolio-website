import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#fff] border-t border-[#e5e5e5] text-[#444] text-xs sm:text-sm py-3 sm:py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        {/* Left: Name and meta */}
        <div className="text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Seif Otefa. All rights reserved.</p>
          <p className="text-xs text-gray-600">Last updated: July 2025</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-3 sm:gap-4 text-gray-400">
          <a
            href="https://github.com/seifotefa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/seif-otefa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
