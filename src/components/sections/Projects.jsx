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
        name: "BookMate!",
        description:
        "A full-stack booking system built with JavaScript, PHP, and MySQL for a local business (as part of a course).",
        tech: ["JavaScript", "PHP", "MySQL"],
        category: "school", 
        github: "https://github.com/seifotefa/bangyourheadbooking":,
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
        name: "Bangyourhead.ca",
        description:
        "A professional website designed and developed for a local window washing company to showcase services and handle customer inquiries online.",
        tech: ["HTML", "Tailwind CSS", "JavaScript"],
        category: "work",
        github: "https://bangyourhead.ca",
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

  const filteredProjects =
    filter === "all"
      ? projectlist
      : projectlist.filter((p) => p.category === filter);

  return (
    <section id="projects" className="min-h-screen scroll-mt-24 bg-[#111111] text-gray-300 px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">projects</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "school", "work", "personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat ? "bg-purple-600 text-white" : "border-gray-600 text-gray-400"
              } hover:bg-purple-700 hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-[#181A1F] border border-gray-700 rounded-lg p-6 shadow-md text-left">
              <h3 className="text-xl font-semibold text-[#e0e0e0] mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 border border-gray-600 text-sm px-3 py-1 rounded-full text-gray-300"
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
                  className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-purple-500 underline underline-offset-2 transition"
                >
                  View
                  <FiExternalLink className="w-3 h-3 mb-[1px]" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
