import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { BottomBar } from '../BottomBar';

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
      name: "Notipply",
      description: "A job alert service that sends real-time text notifications directly to your phone when new positions matching your preferences are posted. Get tailored job alerts within seconds so you can be among the first to apply.",
      tech: ["Go", "Stripe", "Twillio", "Clerk"],
      category: "personal",
      github: "https://www.notipply.com/",
    },
    {
      name: "McMaster Webring",
      description: "Building a network of the most cracked founders, builders and engineers at Mac.",
      tech: ["Web", "Full-stack"],
      category: "personal",
      github: "https://www.mcmasterwebring.xyz/",
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
    <section id="projects" className="scroll-mt-24 bg-[#fff] text-[#111] pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-4 pb-16 mt-24 mb-12">
        <h2
          className="text-5xl font-synonym font-light text-center mb-6"
          style={{ fontFamily: "'Synonym', monospace" }}
        >
          Projects
        </h2>

        <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto w-full pb-8">
          {projectlist.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-2xl bg-[#f8f8f8] border border-[#e5e5e5] rounded-lg p-4"
            >
              {/* Row 1: Name + Link .............. competition (no icon) */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <p className="text-sm font-semibold text-[#111]">{project.name}</p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#111] transition-colors"
                      aria-label={`Open ${project.name}`}
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="flex-1 min-w-0" />
                {project.competition && (
                  <span
                    className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded border ${
                      project.competition.winner
                        ? "bg-[#fef3c7] border-[#fbbf24] text-[#92400e]"
                        : "bg-[#e5e7eb] border-[#d1d5db] text-[#374151]"
                    }`}
                  >
                    {project.competition.type}
                  </span>
                )}
              </div>

              {/* Row 2: Description .............. Article (same line to avoid bottom white space) */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs text-gray-600 flex-1 min-w-0 leading-relaxed line-clamp-2">{project.description}</p>
                {project.articleLink && (
                  <a
                    href={project.articleLink}
                    className="text-xs text-gray-500 hover:text-[#111] underline underline-offset-1 flex-shrink-0"
                  >
                    Article
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="mt-4">
            <a
              href="https://github.com/seifotefa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#111] underline underline-offset-2 transition"
            >
              View all projects on GitHub
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <BottomBar />
    </section>
  );
};
