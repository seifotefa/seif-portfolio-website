import React, { useEffect } from "react";
import { ExperienceCard } from "../ExperienceCard";
import { useGSAP } from '../../hooks/useGSAP';

export const Experience = () => {
  const { elementRef: sectionRef, staggerChildren } = useGSAP();

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
      },
      {
        date: "september 2024 - present",
        title: "Computer Science Undergraduate",
        company: "McMaster University",
        companyLink:"https://future.mcmaster.ca/programs/computer-science/",
        description: "Second year honours computer science student. enolled in co-op program.",
        logo: "/assets/mcmaster.jpg",
        skills: ["Data Structures", "C", "HTML/CSS", "Javascript", "Python", "Linear Algebra", "Calculus", "Discrete Math", "and much more..."],
        highlights: [
          "Pursuing Honors Computer Science Co-op with 3.6/4.0 GPA.",
          "Completed courses in programming fundamentals, full-stack development, and development tools including C, Git, and Bash",
          "Awarded Dean's Honour List recognition and McMaster University Award of Excellence ($3000) for academic achievement"
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
                  
                  {/* Download Resume Button */}
                  <div className="flex justify-center mb-12">
                    <a 
                      href="/assets/SeifOtefaResume.pdf" 
                      download="SeifOtefaResume.pdf"
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                      Download Resume PDF
                    </a>
                  </div>
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
    </>
  );
};
