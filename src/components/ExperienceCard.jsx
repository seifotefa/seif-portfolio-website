import React from "react";
import { FiExternalLink } from 'react-icons/fi';

export const ExperienceCard = ({ date, title, company, description, logo, companyLink = "#", articleLink = null }) => {
  const linkUrl = companyLink || "#";
  const contentLeft = "pl-[3.25rem] sm:pl-[3.5rem]";

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-[#f8f8f8] border border-[#e5e5e5] rounded-lg p-4 w-full">
        {/* Row 1: Logo | Company + Link .............. date */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-white border border-[#e5e5e5] flex items-center justify-center">
            {logo ? (
              <img src={logo} alt="" className="w-full h-full object-contain p-0.5" />
            ) : (
              <span className="text-gray-300 text-lg font-semibold">{company.charAt(0)}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            {/* Company + Title grouped together, title close under company */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="text-base font-semibold text-[#111]">{company}</p>
              {linkUrl !== "#" && (
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#111] transition-colors"
                  aria-label={`Open ${company}`}
                >
                  <FiExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-0.5">{title}</p>
          </div>
          <p className="flex-shrink-0 text-sm text-gray-400 whitespace-nowrap pt-0.5">{date}</p>
        </div>

        {/* Description .............. Article (more space above to separate from company/title block) */}
        <div className={`flex items-center gap-2 mt-2 ${contentLeft}`}>
          <p className="text-sm text-gray-600 flex-1 min-w-0 leading-relaxed line-clamp-2">{description}</p>
          {articleLink && (
            <a
              href={articleLink}
              className="text-sm text-gray-500 hover:text-[#111] underline underline-offset-1 flex-shrink-0"
            >
              Article
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
