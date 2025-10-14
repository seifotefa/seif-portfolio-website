import React, { useState, useEffect } from "react";
import { FiExternalLink } from 'react-icons/fi';
import { useGSAP } from '../hooks/useGSAP';

export const ExperienceCard = ({ date, title, company, description, logo, skills, companyLink = "#", highlights = [], articleLink = null }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { elementRef: cardRef, scaleIn, hoverScale } = useGSAP();
    const { elementRef: highlightsRef, fadeInUp } = useGSAP();

    // Animate card on mount - slower and more gentle
    useEffect(() => {
        scaleIn(0, 1.2); // Increased duration from 0.8 to 1.2 seconds
        hoverScale(1.02);
    }, []);

    // Animate highlights when expanded - slower reveal
    useEffect(() => {
        if (isExpanded && highlights.length > 0) {
            fadeInUp(0, 1.0); // Increased duration from 0.6 to 1.0 seconds
        }
    }, [isExpanded, highlights.length]);

    return (
      <div className="relative w-full max-w-2xl px-4 sm:px-6">
        {/* Card */}
        <div 
          ref={cardRef}
          className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-4 sm:p-6 w-full relative z-20 cursor-pointer"
        >
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
                <h3 className="text-lg sm:text-xl font-semibold text-[#111] break-words">{title}</h3>
  
                {/* Date (moved here for desktop) */}
                <p className="hidden sm:block text-sm text-gray-400">{date}</p>
              </div>
  
              {/* Company */}
              <a
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#4A90E2] hover:underline underline-offset-2 transition-colors"
                >
                <span>{company}</span>
                <FiExternalLink className="w-4 h-4 mb-[1px]" />
                </a>
  
              {/* Date (mobile) */}
              <p className="block sm:hidden text-xs text-gray-500 mt-2">{date}</p>
  
              {/* Description */}
              <p className="text-sm text-gray-500 mt-4">{description}</p>
            </div>
          </div>

          {/* Expandable Highlights Section */}
          {highlights.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-[#4A90E2] hover:text-[#357ABD] font-medium transition-colors flex items-center gap-1"
              >
                {isExpanded ? 'Show less' : 'Learn more'}
                <svg 
                  className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isExpanded && (
                <div ref={highlightsRef} className="mt-3 pl-4 border-l-2 border-[#4A90E2]/20">
                  <h4 className="text-sm font-semibold text-[#111] mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[#4A90E2] mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
  
          {/* Skills */}
          <div className="flex flex-wrap justify-start gap-2 mt-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Article Link */}
          {articleLink && (
            <div className="flex justify-end mt-4">
              <a
                href={articleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#4A90E2] underline underline-offset-2 transition"
              >
                Read article
                <FiExternalLink className="w-3 h-3 mb-[1px]" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  
