import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

export const Projects = () => {
  const projectlist = [
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
      articleLink: "/blog/s&p",
    },
    {
      name: "EvenMatch!",
      description:
        "A terminal-based 2048 game written in C, featuring smooth tile movement and merging logic, built with modular architecture and efficient input handling.",
      tech: ["C", "Bash"],
      category: "school",
      github: "https://github.com/seifotefa/EvenMatch-2048-in-C",
    },
    {
      name: "BookMate!",
      description:
        "A full-stack booking system built with JavaScript, PHP, and MySQL for a local business (as part of a course).",
      tech: ["JavaScript", "PHP", "MySQL"],
      category: "school",
      github: "https://github.com/seifotefa/bangyourheadbooking",
    },
    {
      name: "MatrixSolver",
      description:
        "A C library for matrix operations including addition, subtraction, multiplication, transpose, and solving linear systems using Gaussian elimination with dynamic memory management.",
      tech: ["C", "Bash"],
      category: "school",
      github: null,
    },
    {
      name: "RockPaperScissorsJS",
      description:
        "A JavaScript based rock-paper-scissors game.",
      tech: ["HTML/CSS", "JavaScript"],
      category: "school",
      github: "https://github.com/seifotefa/rock-paper-scissors-js",
    },
    {
      name: "Bangyourhead.ca",
      description:
        "A professional website designed and developed for a local window washing company to showcase services and handle customer inquiries online.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      category: "professional",
      github: "https://bangyourhead.ca",
    },
    {
      name: "luxuryfinish.ca",
      description:
        "A professional website designed and developed for a local car detailing company to showcase services and handle customer inquiries and booking online.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      category: "professional",
      github: "https://luxuryfinish.ca",
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio showcasing skills, projects, and contact information (Hint: You're looking at it).",
      tech: ["React", "Tailwind CSS"],
      category: "personal",
      github: "https://github.com/seifotefa/seif-portfolio-website",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    filter === "all"
      ? projectlist
      : projectlist.filter((p) => p.category === filter);

  const initialShowCount = 4;
  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, initialShowCount);

  return (
    <section id="projects" className="scroll-mt-24 bg-[#fff] text-[#111]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-4 pb-8 mt-16 mb-12 text-center">
      <h2
        className="text-4xl font-light mb-8"
        style={{ fontFamily: "'Synonym', monospace" }}
      >
        Projects
      </h2>


        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "school", "professional", "personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`px-4 py-2 rounded-full border ${
                filter === cat ? "bg-[#111111] text-white" : "border-[#e5e5e5] text-[#888]"
              } hover:bg-[#333333] hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex flex-col gap-6 w-full">
            {projectsToShow.map((project, index) => (
              <div 
                key={index} 
                className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-6 text-left w-full"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-[#111]">{project.name}</h3>
                      {project.competition && (
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border shrink-0 ${
                            project.competition.winner
                              ? "bg-[#fef3c7] border-[#fbbf24] text-[#92400e]"
                              : "bg-[#e5e7eb] border-[#6b7280] text-[#374151]"
                          }`}
                        >
                          {project.competition.type}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 border border-gray-300 text-[#111111] text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-6 items-start shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#111111] underline underline-offset-2 transition whitespace-nowrap"
                      >
                        View
                        <FiExternalLink className="w-3 h-3 mb-[1px]" />
                      </a>
                    )}
                    {project.articleLink && (
                      <a
                        href={project.articleLink}
                        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#111111] underline underline-offset-2 transition whitespace-nowrap"
                      >
                        Read article
                        <FiExternalLink className="w-3 h-3 mb-[1px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {filteredProjects.length > initialShowCount && !showAll && (
              <button
                className="px-6 py-2 rounded-full bg-[#111111] text-white hover:bg-[#333333] transition self-center"
                onClick={() => setShowAll(true)}
              >
                view all
              </button>
            )}
            {showAll && filteredProjects.length > initialShowCount && (
              <button
                className="px-6 py-2 rounded-full bg-gray-200 text-[#111111] hover:bg-gray-300 transition self-center"
                onClick={() => setShowAll(false)}
              >
                show less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
