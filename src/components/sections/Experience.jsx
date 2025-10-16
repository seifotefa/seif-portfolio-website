import React, { useEffect } from "react";
import { ExperienceCard } from "../ExperienceCard";
import { useGSAP } from '../../hooks/useGSAP';

const languages = [
    { name: "Python", logo: "/assets/python_logo.png" },
    { name: "HTML", logo: "/assets/html.svg" },
    { name: "CSS", logo: "/assets/css.svg" },
    { name: "C", logo: "/assets/c.svg" },
    { name: "SQL", logo: "/assets/mysql.svg" },
    { name: "JavaScript", logo: "/assets/javascript.svg" },
    { name: "TypeScript", logo: "/assets/typescript.png" },
    { name: "PHP", logo: "/assets/php.png" },
    { name: "Bash", logo: "/assets/bash.png" },
    { name: "Latex", logo: "/assets/latex.png" },
    { name: "Haskell", logo: "/assets/haskell.svg" },
];
const frameworks = [
    { name: "React", logo: "/assets/react.svg" },
    { name: "Node.js", logo: "/assets/nodejs.svg" },
    { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
];
const tools = [
    { name: "Apache", logo: "/assets/apache.svg" },
    { name: "Firebase", logo: "/assets/firebase.svg" },
    { name: "Git", logo: "/assets/git1.png" },
    { name: "Github", logo: "/assets/github.svg" },
    { name: "MySQL", logo: "/assets/mysql.svg" },
    { name: "UNIX", logo: "/assets/unix.jpg" },
];

const education = [
    {
        date: "september 2024 - present",
        title: "Computer Science Undergraduate",
        company: "McMaster University",
        companyLink:"https://future.mcmaster.ca/programs/computer-science/",
        description: "Second year honours computer science student. enrolled in co-op program.",
        logo: "/assets/mcmaster.jpg",
        skills: ["Data Structures", "C", "HTML/CSS", "Javascript", "Python", "Linear Algebra", "Calculus", "Discrete Math", "and much more..."],
        highlights: [
          "Pursuing Honors Computer Science Co-op with 3.6/4.0 GPA.",
          "Completed courses in programming fundamentals, full-stack development, and development tools including C, Git, and Bash",
          "Awarded Dean's Honour List recognition and McMaster University Award of Excellence ($3000) for academic achievement"
        ]
    }
];

export const Experience = () => {
  const { elementRef: sectionRef, staggerChildren } = useGSAP();

  // Function to determine current section based on scroll position
  const getCurrentSection = () => {
    const experienceSection = document.getElementById('experience');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    
    if (!experienceSection || !educationSection || !skillsSection) return 'experience';
    
    const scrollY = window.scrollY;
    const experienceTop = experienceSection.offsetTop;
    const educationTop = educationSection.offsetTop;
    const skillsTop = skillsSection.offsetTop;
    
    if (scrollY < educationTop - 200) {
      return 'experience';
    } else if (scrollY < skillsTop - 200) {
      return 'education';
    } else {
      return 'skills';
    }
  };

  const experiences = [
    {
      date: "july 2025 - present",
      title: "Robotics Instructor",
      company: "O'Botz Robotics",
      companyLink: "https://obotz.ca/",
      description: "Teaching robotics, electronics, and programming to students through hands-on robot assembly, coding, and troubleshooting.",
      logo: "/assets/obotz.png",
      skills: ["Robotics", "Electronics", "Programming", "Teaching", "Curriculum Development"],
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
      logo: "/assets/woulibx.png",
      skills: ["Product Strategy", "UX Research", "Market Analysis", "Risk Assessment"],
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
        logo: "/assets/stanford.png",
        skills: ["Python", "Karel", "Teaching"],
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
      logo: "/assets/mova-logo.png",
      skills: ["Figma", "Team Leadership", "Agile"],
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
        logo: "/assets/weskale.png",
        skills: ["React", "HTML/CSS", "Javascript", "Python", "PHP", "SQL"],
        highlights: [
          "Built responsive full-stack web applications using JavaScript/TypeScript, React, Tailwind CSS, Node.js, and Python for 2 local businesses",
          "Achieved 35% average increase in client acquisition rates through custom web solutions and improved online presence",
          "Led end-to-end project delivery including UI/UX design with Figma, secure hosting deployment, and SEO optimization"
        ]
      }
    // Add more experiences here
  ];

  // Animate experience cards on scroll - slower stagger
  useEffect(() => {
    staggerChildren(0.4, 0); // Increased stagger from 0.2 to 0.4 seconds
  }, []);

  return (
    <>
      <section id="experience" className="bg-[#fff] scroll-mt-24 text-[#111] flex flex-col justify-center">
              <div className="max-w-4xl mx-auto px-6 md:px-12 pt-4 pb-16 mt-24 mb-12">
                  <h2 className="text-5xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Resume/CV</h2>
                  
                  {/* Resume Actions */}
                  <div className="flex justify-center items-center gap-4 mb-12">
                    {/* View Resume PDF Button */}
                    <button 
                      onClick={() => {
                        const modal = document.getElementById('resume-modal');
                        const footer = document.querySelector('footer');
                        modal.classList.remove('hidden');
                        document.body.style.overflow = 'hidden';
                        if (footer) footer.style.display = 'none';
                      }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-[#f3f3f3] text-[#111] border border-[#e5e5e5] rounded-lg hover:shadow-md transition-all duration-200 font-medium"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                        />
                      </svg>
                      View Resume PDF
                    </button>

                    {/* Download Resume Button - Icon Only */}
                    <a 
                      href="/assets/SeifOtefaResume.pdf" 
                      download="SeifOtefaResume.pdf"
                      className="inline-flex items-center justify-center w-12 h-12 bg-[#f3f3f3] text-[#111] border border-[#e5e5e5] rounded-lg hover:shadow-md transition-all duration-200"
                      title="Download Resume PDF"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Resume PDF Modal */}
                  <div id="resume-modal" className="hidden fixed inset-0 z-50 backdrop-blur-sm bg-gray-500 bg-opacity-20 flex items-center justify-center p-2 sm:p-4 md:p-8">
                    <div className="bg-white shadow-2xl w-full h-full sm:h-[90vh] sm:max-w-4xl flex flex-col relative border border-gray-200 sm:rounded-lg overflow-hidden">
                      {/* Modal Header with Close Button */}
                      <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
                        <h3 className="text-sm sm:text-base font-medium text-gray-700">Resume PDF</h3>
                        <button 
                          onClick={() => {
                            const modal = document.getElementById('resume-modal');
                            const footer = document.querySelector('footer');
                            modal.classList.add('hidden');
                            document.body.style.overflow = 'auto';
                            if (footer) footer.style.display = 'block';
                          }}
                          className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 rounded-full transition-all duration-200 group touch-manipulation"
                        >
                          <svg className="w-5 h-5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* PDF Viewer */}
                      <div className="flex-1 w-full h-full">
                        <iframe 
                          src="/assets/SeifOtefaResume.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH" 
                          className="w-full h-full border-0"
                          title="Resume PDF"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Experience Header */}
                  <h3 className="text-4xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Experience</h3>

        <div ref={sectionRef} className="relative flex flex-col items-center space-y-16 sm:space-y-16 max-w-3xl mx-auto w-full pb-8">
          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div key={index} className="w-full relative">
              <ExperienceCard {...exp} />
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 top-full w-1 h-16 bg-gray-700 transform -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section id="education" className="bg-[#fff] text-[#111] pt-4 pb-20 px-6 md:px-12 mb-16">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Education</h2>

            <div className="flex justify-center items-center">
                <div className="max-w-3xl w-full flex justify-center">
                    {/* Education Cards */}
                    {education.map((edu, index) => (
                        <div key={index} className="w-full max-w-2xl">
                            <ExperienceCard {...edu} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="bg-[#fff] text-[#111] pt-4 pb-20 px-6 md:px-12 mb-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-synonym font-light text-center mb-2" style={{ fontFamily: 'Synonym, monospace' }}>Skills</h2>
            <p className="mb-4 text-gray-400 text-base sm:text-lg">
            here are some of the tools and technologies i've worked with.
            </p>
            <div className="text-left max-w-2xl mx-auto">
                <div className="mb-4">
                    <div className="font-semibold mb-1 text-[#1E40AF]">Languages</div>
                    <div className="flex flex-wrap gap-3">
                        {languages.map((skill, i) => (
                            <span key={i} className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <img src={skill.logo} alt={skill.name} title={skill.name} className="w-6 h-6 object-contain opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="font-semibold mb-1 text-[#1E40AF]">Frameworks</div>
                    <div className="flex flex-wrap gap-3">
                        {frameworks.map((skill, i) => (
                            <span key={i} className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <img src={skill.logo} alt={skill.name} title={skill.name} className="w-6 h-6 object-contain opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="font-semibold mb-1 text-[#1E40AF]">Developer Tools & Databases</div>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((skill, i) => (
                            <span key={i} className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <img src={skill.logo} alt={skill.name} title={skill.name} className="w-6 h-6 object-contain opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Fixed Navigation Arrows */}
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        {/* Up Arrow */}
        <button 
            onClick={() => {
                const currentSection = getCurrentSection();
                if (currentSection === 'skills') {
                    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
                } else if (currentSection === 'education') {
                    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
                }
            }}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:bg-white"
        >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>

        {/* Down Arrow */}
        <button 
            onClick={() => {
                const currentSection = getCurrentSection();
                if (currentSection === 'experience') {
                    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
                } else if (currentSection === 'education') {
                    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                }
            }}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:bg-white"
        >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>
    </>
  );
};
