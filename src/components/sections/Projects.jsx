import React, { useState } from 'react';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const projectlist = [
    {
      name: "Frontline",
      description: "Triage dashboard using SmartSpectra (camera-based vitals) + Gemini Vision (injury detection) to generate real-time clinical insights and step-by-step first aid guidance, with an ElevenLabs AI emergency responder.",
      tech: ["React", "C++", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "Google Gemini API", "ElevenLabs API", "Presage SDK"],
      category: "personal",
      github: "https://github.com/seifotefa/deltahacks-12",
      competition: { type: "Best Use of Presage SDK @ DeltaHacks12", winner: true },
      articleLink: "/blog/frontline",
    },
    {
      name: "Project Phoenix (MEC 2025)",
      description: "Winning McMaster Engineering Competition consulting solution (1st place) focused on the future of healthcare in Canada.",
      tech: ["Consulting", "Report Writing", "Research"],
      category: "personal",
      github: null,
      articleLink: "/blog/mec2025",
      competition: { type: "MacEng Competition 2025 Winner", winner: true },
    },
    {
      name: "Jinsa",
      description: "A blockchain-based platform allowing companies to turn their products into trackable, verifiable, and transparent products.",
      tech: ["Startup","Blockchain", "Smart Contracts"],
      category: "personal",
      github: "https://usejinsa.co",
      competition: { type: "SpurHacks Accelerator", winner: true },
      articleLink: "/blog/jinsa",
    },
    {
      name: "ResuMock",
      description:
        "A full-stack web app that allows users to simulate a behavioral interview, with questions generated directly from their experience and resume, built in under 2 hours.",
      tech: ["JavaScript", "React", "Node.js", "Express.js", "Tailwind CSS", "Gemini API"],
      category: "personal",
      github: "https://github.com/seifotefa/deltahackslite",
      competition: { type: "DeltaHacks Lite 2025", winner: false },
      articleLink: "/blog/resumock",
    },
    {
      name: "Spark and Prepper",
      description:
        "A full-stack studying platform that takes your lectures and notes and turns them into condensed study guides, with a mock exam, cheat sheet, and flashcard generator, and an AI tutor chatbot.",
      tech: ["JavaScript", "React", "Node.js", "Express.js", "Tailwind CSS", "Firebase", "Gemini API"],
      category: "personal",
      github: "https://github.com/seifotefa/sparkandprepper",
      competition: { type: "GDSC Hacks 2025", winner: false },
      articleLink: "/blog/sparkandprepper",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 bg-[#fff] text-[#111]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-4 pb-8 mt-16 mb-12 text-center">
      <h2
        className="text-4xl font-light mb-8"
        style={{ fontFamily: "'Synonym', monospace" }}
      >
        Projects
      </h2>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex flex-col gap-6 w-full">
            {projectlist.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-300 p-4 text-left w-full overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                  <h3 className="text-lg font-medium text-black break-words">{project.name}</h3>
                  {project.competition && (
                    <span
                      className={`text-xs font-semibold px-2 py-1 border shrink-0 inline-block max-w-full break-words ${
                        project.competition.winner
                          ? "bg-[#fef3c7] border-[#fbbf24] text-[#92400e]"
                          : "bg-[#e5e7eb] border-[#6b7280] text-[#374151]"
                      }`}
                    >
                      {project.competition.type}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-2 text-xs leading-relaxed">{project.description}</p>
                
                <div className="flex items-center gap-3 flex-wrap">
                  {project.articleLink && (
                    <a
                      href={project.articleLink}
                      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-black underline underline-offset-2 transition whitespace-nowrap"
                    >
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-black underline underline-offset-2 transition whitespace-nowrap"
                    >
                      {project.github.includes('github.com') ? (
                        <>
                          GitHub
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </>
                      ) : (
                        <>
                          Demo
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            ))}
            
            {/* View all projects on GitHub link */}
          </div>
        </div>
      </div>
      
      {/* Bottom footer bar */}
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
              <p className="text-[0.85rem] md:text-[0.95rem] text-gray-600 leading-snug">
                  <Link to="/experience" className="underline underline-offset-2 hover:text-black">experience</Link>{' '}
                  <span className="mx-1">|</span>{' '}
                  <Link to="/projects" className="underline underline-offset-2 hover:text-black">projects</Link>{' '}
                  <span className="mx-1">|</span>{' '}
                  <Link to="/blog" className="underline underline-offset-2 hover:text-black">blog</Link>
              </p>
          </div>
      </div>
    </section>
  );
};
