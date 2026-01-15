import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BackToHome } from '../../BackToHome';

export const MoVA = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">MoVA Realities</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>March 1, 2025</span>
              <span>•</span>
              <span>4 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Experience</span>
            </div>
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
                From March to May 2025, I served as a Product Manager Intern at <strong>MoVA Realities</strong>, an arts and technology startup building an AI-powered platform for virtual reality content creation.
              </p>
              <p>
                I led a <strong>cross-functional team of 4</strong>—including developers, designers, and business stakeholders—to define the MVP framework for the platform. My role focused on product requirements analysis, system architecture design, and roadmap development that would guide the company's technical execution.
              </p>
              <p>
                This position gave me hands-on experience in the complete product management lifecycle—from understanding user needs to translating them into technical specifications and creating actionable development plans. The experience taught me how critical thorough planning, documentation, and team leadership are in transforming vision into reality, especially for complex technical projects involving multiple stakeholders and cutting-edge technologies.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              MoVA Realities had a compelling vision for an AI-powered VR platform, but faced several challenges common to early-stage startups.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-black mb-3">Undefined Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  The company had a broad vision without detailed feature specifications. There was no clear prioritization of "must-have" versus "nice-to-have" features, and development teams lacked the documentation needed to begin implementation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black mb-3">Technical Complexity</h3>
                <p className="text-gray-700 leading-relaxed">
                  The platform required integration of multiple AI services—computer vision, natural language processing, and generative models—each with its own challenges. Cloud infrastructure requirements weren't fully mapped, and the overall system architecture remained undefined.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black mb-3">Resource Constraints</h3>
                <p className="text-gray-700 leading-relaxed">
                  Like most startups, MoVA faced limited development time and budget. They needed to deliver an MVP that demonstrated value quickly without getting caught in feature creep that could delay launch indefinitely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black mb-3">Stakeholder Alignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Multiple stakeholders had different priorities and perspectives. Technical and non-technical team members needed to collaborate effectively, and investors required clear timelines and deliverables to maintain confidence in the project.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              I took a systematic approach to product management, delivering comprehensive documentation and strategic planning that bridged the gap between vision and execution.
            </p>

            <div className="space-y-10">
              {/* Requirements Analysis */}
              <div>
                <h3 className="text-2xl font-medium text-black mb-4">Requirements Analysis Report</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I created a detailed <strong>30-page requirements analysis document</strong> that became the foundation for all development work.
                </p>
                
                <div className="bg-gray-50 border border-gray-300 p-6 mb-6">
                  <h4 className="text-lg font-medium text-black mb-3">21 Core Features Across 8 Strategic Sections:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>User Management</strong> – Authentication, user profiles, permissions, and account management</li>
                    <li><strong>Content Creation Tools</strong> – AI-assisted VR scene building with intuitive interfaces</li>
                    <li><strong>Asset Library</strong> – Searchable repository of 3D models, textures, audio, and animations</li>
                    <li><strong>AI Services</strong> – Content generation, enhancement, optimization, and intelligent suggestions</li>
                    <li><strong>Collaboration</strong> – Multi-user editing, real-time sync, version control, and commenting</li>
                    <li><strong>Publishing</strong> – Export formats, distribution channels, and integration with VR platforms</li>
                    <li><strong>Analytics</strong> – Usage metrics, performance monitoring, and user behavior insights</li>
                    <li><strong>Administration</strong> – Backend management, content moderation, and system configuration</li>
                  </ul>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p><strong>For each feature, I specified:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Functional requirements (what the feature does and how users interact with it)</li>
                    <li>Non-functional requirements (performance expectations, security measures, scalability)</li>
                    <li>User stories (scenario-based descriptions of user needs)</li>
                    <li>Acceptance criteria (clear definitions of "done")</li>
                    <li>Dependencies (technical prerequisites and relationships with other features)</li>
                  </ul>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 p-6">
                  <h4 className="text-lg font-medium text-black mb-3">MoSCoW Prioritization</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Must have</strong> – Core MVP features essential for launch</li>
                    <li><strong>Should have</strong> – Important features that significantly enhance value</li>
                    <li><strong>Could have</strong> – Nice additions that improve user experience</li>
                    <li><strong>Won't have (now)</strong> – Future enhancements deferred to later releases</li>
                  </ul>
                </div>
              </div>

              {/* Technical Documentation */}
              <div>
                <h3 className="text-2xl font-medium text-black mb-4">Technical Documentation & Stakeholder Management</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beyond requirements, I created comprehensive technical documentation to guide implementation and ensure alignment across all stakeholders.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">System Architecture Design</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      I designed <strong>system architecture diagrams</strong> mapping <strong>15+ interconnected components</strong>, providing a clear blueprint for development:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li><strong>Frontend</strong> – React-based VR interface with WebXR support</li>
                      <li><strong>Backend APIs</strong> – Node.js/Express microservices architecture</li>
                      <li><strong>AI service integrations</strong> – OpenAI, Stable Diffusion, and custom ML models</li>
                      <li><strong>Cloud infrastructure</strong> – AWS services for compute, storage, and content delivery</li>
                      <li><strong>Database architecture</strong> – MongoDB for flexibility, PostgreSQL for relational data</li>
                      <li><strong>Real-time collaboration</strong> – WebSocket infrastructure for multi-user editing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-black mb-3">UI/UX Mockups & Presentations</h4>
                    <p className="text-gray-700 leading-relaxed">
                      I created <strong>detailed UI/UX mockups</strong> and <strong>stakeholder presentations</strong> to ensure clear alignment on deliverables and milestones. These visual artifacts helped bridge the communication gap between technical and non-technical team members, reducing misunderstandings and accelerating decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Development Roadmap */}
              <div>
                <h3 className="text-2xl font-medium text-black mb-4">Development Roadmap</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I developed a comprehensive <strong>27-week phased roadmap</strong> that broke the project into manageable milestones.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-300 p-4">
                    <h4 className="font-medium text-black mb-2">Phase 1: Foundation (Weeks 1-8)</h4>
                    <p className="text-sm text-gray-700">Core infrastructure setup, basic user authentication, simple content creation tools, MVP feature set ready for internal testing</p>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-300 p-4">
                    <h4 className="font-medium text-black mb-2">Phase 2: AI Integration (Weeks 9-16)</h4>
                    <p className="text-sm text-gray-700">AI service connections and API integrations, content generation features powered by ML models, testing and refinement</p>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-300 p-4">
                    <h4 className="font-medium text-black mb-2">Phase 3: Advanced Features (Weeks 17-22)</h4>
                    <p className="text-sm text-gray-700">Real-time collaboration tools, advanced editing capabilities, publishing workflows</p>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-300 p-4">
                    <h4 className="font-medium text-black mb-2">Phase 4: Polish & Launch (Weeks 23-27)</h4>
                    <p className="text-sm text-gray-700">Performance optimization, comprehensive testing, documentation, and soft launch preparation</p>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>This roadmap reduced expected development time by 20%</strong> compared to initial estimates by identifying parallel workstreams, eliminating redundant work, and prioritizing features with shared infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Conclusion</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                My time at MoVA Realities reinforced the critical importance of thorough planning and documentation in product development.
              </p>

              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Key Learnings</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Requirements gathering</strong> – How to extract and document needs from stakeholders through structured interviews and iterative feedback</li>
                  <li><strong>Prioritization</strong> – Balancing business value, user impact, and technical feasibility through data-driven decision-making</li>
                  <li><strong>Technical translation</strong> – Converting business needs into technical specifications, bridging stakeholders and developers</li>
                  <li><strong>Roadmap planning</strong> – Creating realistic, achievable timelines with proper buffer time and flexibility</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Impact</h3>
                <p className="text-sm">
                  The <strong>20% reduction in expected development time</strong> demonstrated that thorough upfront planning can significantly improve execution efficiency. Clear documentation prevented misunderstandings and rework, while the phased approach allowed for iterative development and early feedback.
                </p>
              </div>

              <p>
                This experience confirmed my interest in product management and the strategic side of technology development. It showed me how critical the PM role is in translating vision into reality and ensuring teams work efficiently toward shared goals.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Company Info */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Experience Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Company:</strong>{' '}
                <a 
                  href="https://www.movarts.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-gray-600"
                >
                  MoVA Realities
                </a>
              </p>
              <p><strong>Duration:</strong> March 2025 - May 2025</p>
              <p><strong>Role:</strong> Product Manager Intern</p>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default MoVA;
