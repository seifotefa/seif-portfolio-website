import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BackToHome } from '../../BackToHome';
import { WebringLinks } from '../../WebringLinks';

export const ResuMock = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">ResuMock</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>November 6, 2025</span>
              <span>•</span>
              <span>3 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Project</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Building an AI-powered mock interview coach that turns your resume into tailored behavioral interview practice in under 2 hours.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://devpost.com/software/resumock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
                </svg>
                Devpost
              </a>
              <a
                href="https://github.com/seifotefa/deltahackslite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <img 
              src="/assets/resumock.png" 
              alt="ResuMock interface" 
              className="w-full border border-gray-300"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              During <strong>DeltaHacks Lite 2025</strong>, I teamed up with <strong>Ahmed Aly, Youseph E., and Omar Mzyan</strong> to create <strong>ResuMock</strong>, an AI-powered mock interview coach that helps users prepare for behavioral job interviews. We built it in just an hour and a half.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Preparing for behavioral interviews is tough. Most people rely on generic questions online that don't reflect their real experiences. We wanted to make something more personal—a tool that tailors practice questions directly from your own resume.
              </p>
              <p>
                <strong>Our goal:</strong> Make interview prep smarter, faster, and more relevant to <em>you</em>.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>ResuMock</strong> lets users upload their resume and enter the company and role they're applying for. Using <strong>Google's Gemini API</strong>, the app generates custom behavioral interview questions based on their personal experiences.
              </p>
              <p>
                Users can type short answers to each question, and the AI instantly gives feedback on <strong>clarity</strong>, <strong>confidence</strong>, and <strong>structure</strong>, helping them refine their responses in real time.
              </p>
              <p>
                It's like having a personal interview coach, available anytime, helping you spin and understand your own story.
              </p>
            </div>
          </div>

          {/* Demo Video */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-black mb-4">🎬 Demo Video</h3>
            <video controls className="w-full border border-gray-300">
              <source src="/assets/resumock-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Vite</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">AI Integration</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Google Gemini API</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Development Time</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>90 minutes</li>
                  <li>DeltaHacks Lite 2025</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">How It Works</h2>
            <div className="bg-gray-50 border border-gray-300 p-6">
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> Users upload their resume (PDF or text)</li>
                <li><strong>2.</strong> They input the target company and role</li>
                <li><strong>3.</strong> The backend sends this info to the Gemini API</li>
                <li><strong>4.</strong> The AI generates behavioral interview questions tailored to the resume</li>
                <li><strong>5.</strong> Users type responses and get instant AI feedback on performance</li>
              </ol>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Challenges Faced */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Challenges Faced</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Of course, time was our biggest constraint. Implementing audio response support was on our roadmap but didn't make it into the MVP.
              </p>
              <p>
                We also had to balance generating useful questions while keeping AI calls efficient and the UI responsive. Debugging Express routes and aligning frontend-backend responses took some quick teamwork under pressure.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* What I Learned */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">What I Learned</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This project reinforced the importance of <strong>building lean and shipping fast</strong>. I learned how to structure AI-based feedback loops efficiently, improved my teamwork speed during a hackathon, and gained confidence working with the <strong>Gemini API</strong> for real-world AI integrations.
              </p>
              <p>
                And maybe most importantly, that great ideas don't need a whole weekend. Sometimes 90 minutes is enough to prove what's possible.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Outcome */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Outcome</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By the end of the hackathon, <strong>ResuMock</strong> worked exactly as we envisioned: users could upload their resumes and instantly start an interactive AI-powered interview session. Mentors loved the idea's simplicity and real-world potential.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h3 className="text-xl font-medium text-black mb-3">Next Steps</h3>
                <p className="text-sm">
                  We plan to add <strong>voice-based answers</strong> so users can practice speaking naturally, not just typing—to turn ResuMock into a full simulation experience.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Project Info */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Project Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Event:</strong> DeltaHacks Lite 2025</p>
              <p><strong>Development Time:</strong> 1.5 hours</p>
              <p><strong>Team:</strong> Ahmed Aly, Youseph E., Omar Mzyan, and Seif Otefa</p>
              <p><strong>Technology:</strong> React, Node.js, Google Gemini API</p>
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
            <WebringLinks variant="footer" />
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

export default ResuMock;
