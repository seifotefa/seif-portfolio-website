import React from 'react';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const MoVA = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">MoVA Realities</h1>
            <p className="text-sm text-gray-500 mb-4">March 1, 2025</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Requirements analysis, system architecture and design, and prioritized development roadmap for initial MVP.
            </p>
            <img
              src="/assets/mova.png"
              alt="MoVA Realities platform concept and architecture"
              className="w-full max-w-3xl mx-auto mt-8 rounded border border-gray-300 shadow-sm"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Introduction</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                From March to May 2025, I served as a Product Manager Intern at <a href="https://www.movarts.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">MoVA Realities</a>, an arts and technology startup building an AI-powered platform for virtual reality content creation.
              </p>
              <p>
                I led a cross-functional team of 4—including developers, designers, and business stakeholders—to define the MVP framework for the platform. My role focused on product requirements analysis, system architecture design, and roadmap development that would guide the company's technical execution.
              </p>
              <p>
                This position gave me hands-on experience in the complete product management lifecycle—from understanding user needs to translating them into technical specifications and creating actionable development plans.
              </p>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                MoVA Realities had a compelling vision for an AI-powered VR platform, but faced several challenges common to early-stage startups.
              </p>
              <p>
                The company had a broad vision without detailed feature specifications—no clear prioritization of "must-have" versus "nice-to-have" features, and no documentation for development teams to build from. The platform also required integrating multiple AI services (computer vision, natural language processing, and generative models), with cloud infrastructure requirements that weren't fully mapped and an overall system architecture that remained undefined.
              </p>
              <p>
                Like most startups, MoVA faced limited development time and budget. They needed an MVP that demonstrated value quickly without getting caught in feature creep, while keeping technical and non-technical stakeholders aligned on timelines and deliverables.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I took a systematic approach to product management, delivering documentation and planning that bridged the gap between vision and execution.
              </p>

              <h3 className="text-2xl font-medium text-black pt-4">Requirements Analysis Report</h3>
              <p>
                I created a 30-page requirements analysis document that became the foundation for all development work. It covered 21 core features across 8 strategic sections: user management, content creation tools, an asset library, AI services, collaboration, publishing, analytics, and administration.
              </p>
              <p>
                For each feature, I specified functional and non-functional requirements, user stories, acceptance criteria, and dependencies, then prioritized everything using the MoSCoW method (must have, should have, could have, won't have for now) to separate the core MVP from future releases.
              </p>

              <h3 className="text-2xl font-medium text-black pt-4">Technical Documentation & Stakeholder Management</h3>
              <p>
                I designed system architecture diagrams mapping 15+ interconnected components: a React-based VR frontend with WebXR support, Node.js/Express microservices, AI service integrations (OpenAI, Stable Diffusion, and custom ML models), AWS cloud infrastructure, MongoDB and PostgreSQL databases, and WebSocket infrastructure for real-time collaboration.
              </p>
              <p>
                I also created UI/UX mockups and stakeholder presentations to keep technical and non-technical team members aligned on deliverables and milestones, reducing misunderstandings and accelerating decision-making.
              </p>

              <h3 className="text-2xl font-medium text-black pt-4">Development Roadmap</h3>
              <p>
                I developed a 27-week phased roadmap that broke the project into manageable milestones: foundation and core infrastructure (weeks 1–8), AI integration (weeks 9–16), advanced features like real-time collaboration and publishing workflows (weeks 17–22), and polish and launch preparation (weeks 23–27).
              </p>
              <p>
                This roadmap reduced expected development time by 20% compared to initial estimates by identifying parallel workstreams, eliminating redundant work, and prioritizing features with shared infrastructure.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Conclusion</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                My time at MoVA Realities reinforced the critical importance of thorough planning and documentation in product development. I learned how to extract and document needs from stakeholders, balance business value against technical feasibility, translate business needs into technical specifications, and build realistic timelines with proper buffer.
              </p>
              <p>
                The 20% reduction in expected development time showed that thorough upfront planning can significantly improve execution efficiency. Clear documentation prevented misunderstandings and rework, while the phased approach allowed for iterative development and early feedback.
              </p>
              <p>
                This experience confirmed my interest in product management and the strategic side of technology development. It showed me how critical the PM role is in translating vision into reality and ensuring teams work efficiently toward shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default MoVA;
