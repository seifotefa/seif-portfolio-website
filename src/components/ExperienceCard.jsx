import React from "react";
import { FiExternalLink } from 'react-icons/fi';


export const ExperienceCard = ({ date, title, company, description, logo, skills, companyLink = "#" }) => {
    return (
      <div className="relative w-full max-w-2xl px-4 sm:px-6">
        {/* Card */}
        <div className="bg-[#181A1F] border border-gray-700 rounded-lg shadow-md p-4 sm:p-6 w-full relative z-20">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 mb-4">
            {/* Logo (desktop only) */}
            <div className="hidden sm:block flex-shrink-0">
              <img src={logo} alt="Company logo" className="h-10 max-w-[60px] object-contain" />
            </div>
  
            {/* Content */}
            <div className="flex flex-col w-full">
              {/* Top Row: title + logo on mobile */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#e0e0e0] break-words">{title}</h3>
  
                {/* Date (moved here for desktop) */}
                <p className="hidden sm:block text-sm text-gray-400">{date}</p>
              </div>
  
              {/* Company */}
              <a
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-purple-500 hover:underline underline-offset-2 transition-colors"
                >
                <span>{company}</span>
                <FiExternalLink className="w-4 h-4 mb-[1px]" />
                </a>
  
              {/* Date (mobile) */}
              <p className="block sm:hidden text-xs text-gray-500 mt-2">{date}</p>
  
              {/* Description */}
              <p className="text-sm text-gray-300 mt-4">{description}</p>
            </div>
          </div>
  
          {/* Skills */}
          <div className="flex flex-wrap justify-start gap-2 mt-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
