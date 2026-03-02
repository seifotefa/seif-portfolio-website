import React, { useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profilePic from '../../assets/seifstatueliberty.jpg';

const LINK_BUTTON_CLASS =
  'w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium transition-all duration-300 ease-out hover:bg-gray-100 hover:text-black hover:border-gray-400 active:scale-[0.98]';

export const Links = () => {
  useEffect(() => {
    document.title = 'Seif Otefa | Links';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'CS @ McMaster | Building AI infrastructure | Intern @ Backboard. Connect on LinkedIn, GitHub, Twitter, or visit my website.');
    else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'CS @ McMaster | Building AI infrastructure | Intern @ Backboard. Connect on LinkedIn, GitHub, Twitter, or visit my website.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section className="min-h-screen bg-white text-gray-700 flex flex-col items-center px-4 py-12 sm:py-16">
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '560px' }}>
        {/* Circular profile image */}
        <div className="rounded-full overflow-hidden border border-gray-300 shadow-sm w-28 h-28 sm:w-32 sm:h-32 mb-6 flex-shrink-0">
          <img
            src={profilePic}
            alt="Seif Otefa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl sm:text-3xl font-medium text-black mb-2">Seif Otefa</h1>

        {/* Tagline */}
        <p className="text-center text-sm sm:text-base text-gray-600 leading-snug mb-8 max-w-md">
          CS @ McMaster | Tech, Univeristy, Startups, Lifestyle | Building open source AI memory tooling @ Backboard.io
        </p>

        {/* Subtle divider */}
        <div className="w-full max-w-[200px] h-px bg-gray-200 mb-6" aria-hidden="true" />

        {/* Link buttons - card container with subtle shadow */}
        <div className="w-full space-y-3 rounded-xl p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
        <a
            href="https://instagram.com/0xseifo"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_BUTTON_CLASS}
          >
            <FaInstagram className="w-5 h-5" aria-hidden />
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/seif-otefa"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_BUTTON_CLASS}
          >
            <FaLinkedin className="w-5 h-5" aria-hidden />
            LinkedIn
          </a>
          <a
            href="https://github.com/seifotefa"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_BUTTON_CLASS}
          >
            <FaGithub className="w-5 h-5" aria-hidden />
            GitHub
          </a>
          <a
            href="https://x.com/0xseifo"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_BUTTON_CLASS}
          >
            <FaXTwitter className="w-5 h-5" aria-hidden />
            Twitter (X)
          </a>
          <a
            href="https://seifotefa.com"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_BUTTON_CLASS}
          >
            Personal Website (seifotefa.com)
          </a>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs sm:text-sm text-gray-500">Built by Seif</p>
      </div>
    </section>
  );
};

export default Links;
