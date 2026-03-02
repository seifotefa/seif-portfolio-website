import React from "react";
import { ExperienceCard } from "../ExperienceCard";
import { BottomBar } from '../BottomBar';

export const Experience = () => {
  const experiences = [
    {
      date: "summer 2026",
      title: "Founding Intern (Summer '26)",
      company: "Backboard",
      companyLink: "https://backboard.io",
      description: "Shipping open source AI infra tooling as part of the founding intern cohort.",
      logo: "/assets/backboard_io_logo.jpg",
    },
    {
      date: "february 2026 - present",
      title: "Accenture Student Leader",
      company: "Accenture",
      companyLink: "https://www.accenture.com/",
      description: "Building consulting and leadership skills through 1:1 mentorship and executive-led sessions on problem-solving and client strategy.",
      logo: "/assets/accenture.png",
    },
    {
      date: "october 2025 - january 2026",
      title: "Software Engineer Intern",
      company: "Ludera",
      companyLink: null,
      description: "Built an AI flashcard pipeline and semantic search for an RPG game that uses your notes to power the experience.",
      logo: "/assets/luderalearning_logo.jpg",
    },
    {
      date: "july 2025 - september 2025",
      title: "Teaching Assistant",
      company: "Stanford University",
      companyLink: "https://codeinplace.stanford.edu/",
      description: "Taught Python and programming fundamentals to 15+ students in Stanford's Code in Place.",
      logo: "/assets/stanford.png",
      articleLink: "/blog/cip2025",
    },
    {
      date: "march 2025 - may 2025",
      title: "Product Manager Intern",
      company: "MoVA Realities",
      companyLink: "https://www.movarts.com/",
      description: "Led requirements analysis, system architecture, and phased roadmap for an AI-powered platform MVP.",
      logo: "/assets/mova-logo.png",
    },
    {
      date: "september 2024 - present",
      title: "Honours Computer Science (Co-op)",
      company: "McMaster University",
      companyLink: "https://future.mcmaster.ca/programs/computer-science/",
      description: "Second year; Dean's Honour List and McMaster Award of Excellence.",
      logo: "/assets/mcmaster.jpg",
    },
  ];

  return (
    <>
    <section id="experience" className="bg-[#fff] scroll-mt-24 text-[#111] flex flex-col justify-center pb-32">
              <div className="max-w-4xl mx-auto px-6 md:px-12 pt-4 pb-16 mt-24 mb-12">
                  {/* Experience Header */}
                  <h2 className="text-5xl font-synonym font-light text-center mb-6" style={{ fontFamily: 'Synonym, monospace' }}>Experience</h2>

        <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto w-full pb-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>

    <BottomBar />
    </>
  );
};
