import React from 'react';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const ResuMock = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">ResuMock</h1>
            <p className="text-sm text-gray-500 mb-4">November 6, 2025</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Building an AI-powered mock interview coach that turns your resume into tailored behavioral interview practice in under 2 hours.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <a
                href="https://devpost.com/software/resumock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                devpost
              </a>
              {' · '}
              <a
                href="https://github.com/seifotefa/deltahackslite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                github
              </a>
            </p>
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
              During DeltaHacks Lite 2025, I teamed up with Ahmed Aly, Youseph E., and Omar Mzyan to create ResuMock, an AI-powered mock interview coach that helps users prepare for behavioral job interviews. We built it in just an hour and a half.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Preparing for behavioral interviews is tough. Most people rely on generic questions online that don't reflect their real experiences. We wanted to make something more personal—a tool that tailors practice questions directly from your own resume.
              </p>
              <p>
                Our goal: make interview prep smarter, faster, and more relevant to <em>you</em>.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ResuMock lets users upload their resume and enter the company and role they're applying for. Using Google's Gemini API, the app generates custom behavioral interview questions based on their personal experiences.
              </p>
              <p>
                Users can type short answers to each question, and the AI instantly gives feedback on clarity, confidence, and structure, helping them refine their responses in real time.
              </p>
              <p>
                It's like having a personal interview coach, available anytime, helping you spin and understand your own story.
              </p>
            </div>
          </div>

          {/* Demo Video */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Demo</h2>
            <video controls className="w-full border border-gray-300">
              <source src="/assets/resumock-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Tech Stack</h2>
            <p className="text-gray-700 leading-relaxed">
              React, Tailwind CSS, and Vite on the frontend; Node.js and Express on the backend; and Google's Gemini API for the AI integration. Total development time: 90 minutes.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700 leading-relaxed">
              <li>Users upload their resume (PDF or text)</li>
              <li>They input the target company and role</li>
              <li>The backend sends this info to the Gemini API</li>
              <li>The AI generates behavioral interview questions tailored to the resume</li>
              <li>Users type responses and get instant AI feedback on performance</li>
            </ol>
          </div>

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

          {/* What I Learned */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">What I Learned</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This project reinforced the importance of building lean and shipping fast. I learned how to structure AI-based feedback loops efficiently, improved my teamwork speed during a hackathon, and gained confidence working with the Gemini API for real-world AI integrations.
              </p>
              <p>
                And maybe most importantly, that great ideas don't need a whole weekend. Sometimes 90 minutes is enough to prove what's possible.
              </p>
            </div>
          </div>

          {/* The Outcome */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Outcome</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By the end of the hackathon, ResuMock worked exactly as we envisioned: users could upload their resumes and instantly start an interactive AI-powered interview session. Mentors loved the idea's simplicity and real-world potential.
              </p>
              <p>
                Next up: adding voice-based answers so users can practice speaking naturally, not just typing—turning ResuMock into a full simulation experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default ResuMock;
