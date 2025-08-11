import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi'; // fix icon import

export const Projects = () => {
  const projectlist = [
    {
      name: "EvenMatch!",
      description:
        "A terminal-based 2048 game written in C, featuring smooth tile movement and merging logic, built with modular architecture and efficient input handling.",
      tech: ["C", "Bash"],
      category: "school",
      github: "https://github.com/seifotefa/EvenMatch-2048-in-C",
    },
    {
      name: "Spark and Prepper",
      description:
        "A full-stack studying platform that takes your lectures and notes and turns them into condensed study guides, with a mock exam, cheat sheet, and flashcard generator, and an AI tutor chatbot.",
      tech: ["JavaScript", "React", "Node.js", "Express.js", "Firebase", "Gemini API"],
      category: "personal", 
      github: "https://github.com/seifotefa/sparkandprepper",
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
      tech: ["HTML/CSS", "Javascript"],
      category: "school",
      github: "https://github.com/seifotefa/rock-paper-scissors-js",
    },
    {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        name: "bangyourhead.ca",
        description:
=======
      name: "Bangyourhead.ca",
      description:
>>>>>>> Stashed changes
=======
      name: "Bangyourhead.ca",
      description:
>>>>>>> Stashed changes
        "A professional website designed and developed for a local window washing company to showcase services and handle customer inquiries online.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      category: "work",
      github: "https://bangyourhead.ca",
<<<<<<< Updated upstream
    },
<<<<<<< Updated upstream
     {
        name: "luxuryfinish.ca",
        description:
        "A professional website designed and developed for a local car detailing company to showcase services and handle customer inquiries and booking online.",
        tech: ["HTML", "Tailwind CSS", "JavaScript"],
        category: "work",
        github: "https://luxuryfinish.ca",
    },
    
    
=======
>>>>>>> Stashed changes
=======
    },
>>>>>>> Stashed changes
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

  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <>
      <section id="projects" className="scroll-mt-24 bg-[#fff] text-[#111]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-4 pb-8 mt-24 mb-12 text-center">
        <h2 className="text-5xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Projects</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "school", "work", "personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`px-4 py-2 rounded-full border ${
                filter === cat ? "bg-[#4A90E2] text-white" : "border-[#e5e5e5] text-[#888]"
              } hover:bg-[#357ABD] hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start w-full">
            {projectsToShow.map((project, index) => (
              <div key={index} className="bg-[#f3f3f3] border border-[#e5e5e5] rounded-lg p-3 text-left h-full min-h-[300px]">
                <h3 className="text-xl font-semibold text-[#111] mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#4A90E2] underline underline-offset-2 transition"
                  >
                    View
                    <FiExternalLink className="w-3 h-3 mb-[1px]" />
                  </a>
                )}
              </div>
            ))}
          </div>
          {filteredProjects.length > 6 && !showAll && (
            <button
              className="px-6 py-2 rounded-full bg-[#4A90E2] text-white hover:bg-[#357ABD] transition"
              onClick={() => setShowAll(true)}
            >
              view all
            </button>
          )}
          {showAll && filteredProjects.length > 6 && (
            <button
              className="px-6 py-2 rounded-full bg-gray-200 text-[#1E40AF] hover:bg-gray-300 transition"
              onClick={() => setShowAll(false)}
            >
              show less
            </button>
          )}
        </div>
      </div>
    </section>
    </>
  );
};
