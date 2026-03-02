import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { WebringLinks } from './WebringLinks';

export const BottomBar = () => {
  return (
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
          <Link to="/blog" className="underline underline-offset-2 hover:text-black">blog</Link>{' '}
          <span className="mx-1">|</span>{' '}
          <Link to="/links" className="underline underline-offset-2 hover:text-black">links</Link>
        </p>
      </div>
    </div>
  );
};
