import React from "react";
import { ExperienceCard } from "../ExperienceCard"; // You'll build this next

export const Experience = () => {
  const experiences = [
    {
        date: "april 2025 - may 2025",
        title: "Section Leader",
        company: "Stanford University",
        companyLink:"https://codeinplace.stanford.edu/",
        description: "Taught programming fundementals using Python to a section of 15+ students.",
        logo: "/assets/stanford.png",
        skills: ["Python", "Karel", "Teaching"],
      },
    {
      date: "march 2025 - may 2025",
      title: "Product Management Intern",
      company: "MoVA Realities",
      companyLink:"https://www.movarts.com/",
      description: "Requirements analysis, system architecture and design, and prioritized development roadmap for inital MVP.",
      logo: "/assets/mova-logo.png",
      skills: ["Figma", "Team Leadership", "Agile"],
    },
    {
        date: "october 2024 - present",
        title: "Founder",
        company: "WeSkale",
        companyLink:"https://www.linkedin.com/company/we-skale",
        description: "Building software for local small businesses and helping them scale their digital prescence.",
        logo: "/assets/weskale.png",
        skills: ["React", "HTML/CSS", "Javascript", "Python", "PHP", "SQL"],
      },
      {
        date: "september 2024 -  present",
        title: "Computer Science Undergraduate",
        company: "McMaster University",
        companyLink:"https://future.mcmaster.ca/programs/computer-science/",
        description: "First year honours computer science student. enolled in co-op program.",
        logo: "/assets/mcmaster.jpg",
        skills: ["Data Structures", "C", "HTML/CSS", "Javascript", "Python", "Linear Algebra", "Calculus", "Discrete Math", "and much more..."],
      }
    // Add more experiences here
  ];

  return (
    <section id="experience" className="bg-[#fff] scroll-mt-24 text-[#111] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-4 pb-16 mt-16 mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">experience</h2>
        <div className="relative flex flex-col items-center space-y-16 sm:space-y-16 max-w-3xl mx-auto w-full pb-8">
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
  );
};
