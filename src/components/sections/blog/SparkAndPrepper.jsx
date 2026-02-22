import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BackToHome } from '../../BackToHome';
import { WebringLinks } from '../../WebringLinks';

export const SparkAndPrepper = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Spark and Prepper</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>February 2, 2025</span>
              <span>•</span>
              <span>3 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Project</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Building an AI-powered study app that turns your notes into interactive learning tools.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://devpost.com/software/sparkandprepper"
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
                href="https://github.com/seifotefa/sparkandprepper"
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
              src="/assets/sparkandprepper.png" 
              alt="Spark and Prepper interface" 
              className="w-full border border-gray-300"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              During <strong>GDSC Hacks 2025</strong> at the University of Guelph, I teamed up with <strong>Youseph El Khouly</strong> and <strong>Ahmed Aly</strong> to build <strong>Spark and Prepper</strong>—an AI-powered study app designed to make studying more organized, efficient, and interactive.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As students, we all deal with scattered notes, endless slides, and last-minute cramming. It's easy to feel lost in all the material and not know where to start.
              </p>
              <p>
                We wanted to build something that would make that process simpler—an all-in-one platform to organize, summarize, and personalize your study experience.
              </p>
              <p>
                <strong>Our goal was straightforward:</strong> Make studying smarter, not harder.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Spark and Prepper</strong> lets students upload their notes, syllabi, or slides, and automatically turns them into interactive study tools such as:
              </p>
              
              <div className="bg-gray-50 border border-gray-300 p-6">
                <ul className="space-y-2 text-sm">
                  <li>📝 <strong>Condensed study guides</strong></li>
                  <li>🎴 <strong>Flashcards</strong></li>
                  <li>📊 <strong>Mock exams</strong></li>
                  <li>📄 <strong>Cheat sheets</strong></li>
                  <li>🤖 <strong>AI tutor chatbot</strong></li>
                </ul>
              </div>

              <p>
                All powered by <strong>Google's Gemini API</strong>.
              </p>
              <p>
                The idea was to create something practical and immediate—a tool that could take what you already have and turn it into something you can actually learn from.
              </p>
            </div>
          </div>

          {/* Demo Image */}
          <div className="mb-12">
            <img 
              src="/assets/s&phome.jpg" 
              alt="Mock exam example" 
              className="w-full border border-gray-300"
            />
            <p className="text-sm text-gray-500 mt-2 text-center italic">
              A mock exam based on slides for "Intro to Software Development using Java"
            </p>
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
                  <li>Vite</li>
                  <li>Tailwind CSS</li>
                  <li>React Router</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Firebase (storage & auth)</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6 md:col-span-2">
                <h3 className="text-xl font-medium text-black mb-4">AI Engine</h3>
                <p className="text-sm text-gray-700">Google's Gemini API</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                We divided our work naturally:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>I focused on full-stack development and AI integration, connecting the backend and frontend</li>
                <li>Youseph worked on Firebase and Gemini integration</li>
                <li>Ahmed designed the interface and handled the frontend structure</li>
              </ul>
              <p>
                We built and shipped the entire prototype in <strong>less than 24 hours</strong>.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">How It Works</h2>
            <div className="bg-gray-50 border border-gray-300 p-6">
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> A user uploads their study materials (PDFs, docs, or slides)</li>
                <li><strong>2.</strong> The backend sends those files to Gemini for processing</li>
                <li><strong>3.</strong> The AI generates study guides, flashcards, and other learning resources</li>
                <li><strong>4.</strong> Firebase stores everything, and the frontend displays it interactively</li>
                <li><strong>5.</strong> Users can then study, test themselves, or chat with the AI tutor</li>
              </ol>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Challenges Faced */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Challenges Faced</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Integrating the Gemini API across different file types wasn't easy.
              </p>
              <p>
                Handling file uploads securely with Firebase storage took trial and error.
              </p>
              <p>
                Building a responsive, intuitive interface under hackathon pressure tested our design instincts.
              </p>
              <p>
                <strong>Git merge conflicts</strong>—we lost progress work multiple times due to lack of experience with Git.
              </p>
              <p>
                Each challenge forced us to think about balance—between function and simplicity, speed and polish.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* What I Learned */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">What I Learned</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I learned how to connect frontend and backend logic in a way that feels seamless to the user.
              </p>
              <p>
                I got more comfortable with Firebase and cloud file handling.
              </p>
              <p>
                I saw how generative AI can be applied to real academic workflows.
              </p>
              <p>
                <strong>Git, Git, and more Git.</strong>
              </p>
              <p>
                And I learned that building under pressure means focusing on what matters most—clarity, teamwork, and shipping something that works.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Outcome */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              By the end of the weekend, we had a working prototype that impressed students and mentors alike. It reaffirmed my interest in building AI tools for learning, and reminded me that the best products often start as small, scrappy ideas.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Project Info */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Project Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Event:</strong> GDSC Hacks 2025 (University of Guelph)</p>
              <p><strong>Development Time:</strong> Less than 24 hours</p>
              <p><strong>Team:</strong> Youseph El Khouly, Ahmed Aly, and Seif Otefa</p>
              <p><strong>Technology:</strong> React, Node.js, Firebase, Google Gemini API</p>
              <p><strong>Links:</strong>{' '}
                <a 
                  href="https://github.com/seifotefa/sparkandprepper" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-gray-600"
                >
                  Source Code
                </a>
              </p>
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

export default SparkAndPrepper;
