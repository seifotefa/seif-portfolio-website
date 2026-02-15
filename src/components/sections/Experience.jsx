import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const languages = [
    "Python", "HTML", "CSS", "C", "C++", "SQL", "JavaScript", "PHP", "Bash", "Latex", "Haskell", "Java", "Markdown"
];

const frameworks = [
    "React", "Node.js", "Tailwind CSS", "Express.js", "spaCy"
];

const tools = [
    "Apache", "Firebase", "Git", "Github", "MySQL", "UNIX", "Presage"
];

const education = [
    {
        date: "september 2024 - present",
        title: "Computer Science Undergraduate",
        company: "McMaster University",
        companyLink:"https://future.mcmaster.ca/programs/computer-science/",
        description: "Second year honours computer science student. enrolled in co-op program.",
        highlights: [
          "Pursuing Honors Computer Science Co-op with 3.6/4.0 GPA.",
          "Completed courses in programming fundamentals, full-stack development, and development tools including C, Git, and Bash",
          "Awarded Dean's Honour List recognition and McMaster University Award of Excellence ($3000) for academic achievement"
        ]
    }
];

export const Experience = () => {

  const experiences = [
    {
      date: "february 2026 - present",
      title: "Accenture Student Leader",
      company: "Accenture",
      companyLink: "https://www.accenture.com/",
      description: "Developing consulting and leadership skills through 1:1 mentorship with Accenture professionals and executive-led sessions focused on structured problem-solving and client strategy.",
      highlights: [
        "Developed consulting and leadership skills through 1:1 mentorship with Accenture professionals and executive-led sessions focused on structured problem-solving and client strategy."
      ]
    },
    {
      date: "october 2025 - january 2026",
      title: "Software Engineer Intern",
      company: "Ludera",
      description: "Built an AI flashcard generation pipeline and semantic search system to convert diverse note formats into structured, context-aware study materials.",
      highlights: [
        "Built an AI flashcard generation pipeline using spaCy for NLP preprocessing, PyMuPDF for PDF and Markdown extraction, and Python for handling raw text, enabling conversion of diverse note formats into clean, structured data.",
        "Implemented embeddings and semantic search using vector databases (pgvector) to store and retrieve chunked note sections, ensuring accurate context-aware flashcard generation.",
        "Prototyped and tested lightweight open-source LLMs (7B–13B) from Hugging Face for Q&A generation, improving note-to-flashcard throughput to process 100+ chunks per hour while maintaining high-quality outputs."
      ]
    },
    {
      date: "july 2025 - present",
      title: "Robotics Instructor",
      company: "O'Botz Robotics",
      companyLink: "https://obotz.ca/",
      description: "Teaching robotics, electronics, and programming to students through hands-on robot assembly, coding, and troubleshooting.",
      highlights: [
        "Instructed students of varying ages in robotics fundamentals, electronics assembly, and programming concepts through interactive learning",
        "Developed and maintained curriculum content while managing robotics kits and equipment for optimal learning experiences",
        "Collaborated with parents and staff to ensure lessons align with O'Botz educational standards and student learning objectives"
      ]
    },

    {
      date: "july 2025 - september 2025",
      title: "Research Intern",
      company: "WoulibX",
      companyLink: "https://woulibx.com/",
      description: "Conducted strategic research and product design analysis for a Quebec-based ridesharing and on-demand services platform.",
      highlights: [
        "Analyzed competitive landscape and UX patterns across ridesharing and on-demand platforms to identify market gaps and opportunities",
        "Developed product frameworks including value propositions, market positioning levers, and AI-driven feature concepts such as driver forecasting and preference matching",
        "Created risk and opportunity models with mitigation strategies, contributing to final strategic recommendations and presentation deliverables"
      ]
    },

    {
        date: "april 2025 - may 2025",
        title: "Teaching Assistant",
        company: "Stanford University",
        companyLink:"https://codeinplace.stanford.edu/",
        description: "Taught programming fundementals using Python to a section of 15+ students.",
        articleLink: "/blog/cip2025",
        highlights: [
          "Led weekly teaching sessions for 15+ students in Stanford's CS106A course, serving 1,600+ total participants across all sections",
          "Provided hands-on Python programming support using Karel and Tkinter, helping students debug logic errors and implement solutions",
          "Mentored students across control flow, graphics programming, and data structures to build strong foundational understanding"
        ]
      },
    {
      date: "march 2025 - may 2025",
      title: "Product Manager Intern",
      company: "MoVA Realities",
      companyLink:"https://www.movarts.com/",
      description: "Requirements analysis, system architecture and design, and prioritized development roadmap for inital MVP.",
      articleLink: "/blog/mova",
      highlights: [
        "Delivered 30-page requirements analysis report defining 21 core features across 8 strategic sections for AI-powered platform",
        "Created technical documentation, UI/UX mockups, and stakeholder presentations ensuring alignment between business objectives and technical implementation",
        "Developed 27-week phased roadmap detailing feature rollouts and milestones, reducing expected development time by 20%",
        "Designed system architecture diagrams mapping 15+ components including AI services and cloud infrastructure"
      ]
    },
    {
        date: "october 2024 - present",
        title: "Software Engineer",
        company: "WeSkale Solutions",
        companyLink:"https://www.linkedin.com/company/we-skale",
        description: "Building software for local small businesses and helping them scale their digital prescence.",
        highlights: [
          "Built responsive full-stack web applications using JavaScript/TypeScript, React, Tailwind CSS, Node.js, and Python for 2 local businesses",
          "Achieved 35% average increase in client acquisition rates through custom web solutions and improved online presence",
          "Led end-to-end project delivery including UI/UX design with Figma, secure hosting deployment, and SEO optimization"
        ]
      }
  ];

  return (
    <>
      <section id="experience" className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16 relative mb-20 md:mb-0">
              <div className="max-w-5xl mx-auto">
                  {/* Resume/CV Section */}
                  <div className="mb-20">
                      <h2 className="text-4xl font-light text-center mb-6 text-black">Resume/CV</h2>
                      
                      <div className="flex justify-center items-center gap-4 mb-12">
                        <button 
                          onClick={() => {
                            const modal = document.getElementById('resume-modal');
                            modal.classList.remove('hidden');
                            document.body.style.overflow = 'hidden';
                          }}
                          className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Resume PDF
                        </button>

                        <a 
                          href="/assets/SeifOtefaResume.pdf" 
                          download="SeifOtefaResume.pdf"
                          className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 transition-all"
                          title="Download Resume PDF"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </a>
                      </div>

                      <div id="resume-modal" className="hidden fixed inset-0 z-50 backdrop-blur-sm bg-gray-500 bg-opacity-20 flex items-center justify-center p-4">
                        <div className="bg-white shadow-2xl w-full h-[90vh] max-w-4xl flex flex-col relative border border-gray-200 overflow-hidden">
                          <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
                            <h3 className="text-base font-medium text-gray-700">Resume PDF</h3>
                            <button 
                              onClick={() => {
                                const modal = document.getElementById('resume-modal');
                                modal.classList.add('hidden');
                                document.body.style.overflow = 'auto';
                              }}
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 transition-all"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          
                          <div className="flex-1 w-full h-full">
                            <iframe 
                              src="/assets/SeifOtefaResume.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH" 
                              className="w-full h-full border-0"
                              title="Resume PDF"
                            />
                          </div>
                        </div>
                      </div>
                  </div>

                  {/* Experience Section */}
                  <div className="mb-20">
                      <h3 className="text-3xl font-light text-center mb-12 text-black">Experience</h3>
                      <div className="space-y-4">
                          {experiences.map((exp, index) => (
                              <div key={index} className="bg-gray-50 border border-gray-300 p-4 text-left">
                                  <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                                      <h4 className="text-lg font-medium text-black">{exp.title}</h4>
                                      <span className="text-gray-500">@</span>
                                      {exp.companyLink ? (
                                        <a href={exp.companyLink} target="_blank" rel="noreferrer" className="text-black hover:text-gray-600 underline text-base">{exp.company}</a>
                                      ) : (
                                        <span className="text-black text-base">{exp.company}</span>
                                      )}
                                  </div>
                                  
                                  <p className="text-gray-600 text-xs leading-relaxed mb-2">{exp.description}</p>
                                  
                                  <div className="flex justify-between items-center">
                                      <div className="text-xs text-gray-500">{exp.date}</div>
                                      {exp.articleLink && (
                                          <Link to={exp.articleLink} className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-black underline underline-offset-2 transition whitespace-nowrap">
                                              Read more
                                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                              </svg>
                                          </Link>
                                      )}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Education Section */}
                  <div className="mb-20">
                      <h3 className="text-3xl font-light text-center mb-12 text-black">Education</h3>
                      <div className="space-y-4">
                          {education.map((edu, index) => (
                              <div key={index} className="bg-gray-50 border border-gray-300 p-4 text-left">
                                  <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                                      <h4 className="text-lg font-medium text-black">{edu.title}</h4>
                                      <span className="text-gray-500">@</span>
                                      <a href={edu.companyLink} target="_blank" rel="noreferrer" className="text-black hover:text-gray-600 underline text-base">{edu.company}</a>
                                  </div>
                                  
                                  <p className="text-gray-600 text-xs leading-relaxed mb-2">{edu.description}</p>
                                  
                                  <div className="text-xs text-gray-500">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Skills Section */}
                  <div>
                      <h3 className="text-3xl font-light text-center mb-8 text-black">Skills</h3>
                      <p className="mb-8 text-gray-500 text-center text-sm">
                          here are some of the tools and technologies i've worked with.
                      </p>
                      <div className="max-w-3xl mx-auto space-y-6">
                          <div>
                              <div className="font-medium mb-3 text-black">Languages</div>
                              <div className="flex flex-wrap gap-2">
                                  {languages.map((skill, i) => (
                                      <span key={i} className="bg-gray-100 border border-gray-300 text-black text-sm px-4 py-2">
                                          {skill}
                                      </span>
                                  ))}
                              </div>
                          </div>
                          <div>
                              <div className="font-medium mb-3 text-black">Frameworks</div>
                              <div className="flex flex-wrap gap-2">
                                  {frameworks.map((skill, i) => (
                                      <span key={i} className="bg-gray-100 border border-gray-300 text-black text-sm px-4 py-2">
                                          {skill}
                                      </span>
                                  ))}
                              </div>
                          </div>
                          <div>
                              <div className="font-medium mb-3 text-black">Developer Tools & Databases</div>
                              <div className="flex flex-wrap gap-2">
                                  {tools.map((skill, i) => (
                                      <span key={i} className="bg-gray-100 border border-gray-300 text-black text-sm px-4 py-2">
                                          {skill}
                                      </span>
                                  ))}
                              </div>
                          </div>
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
    </>
  );
};
