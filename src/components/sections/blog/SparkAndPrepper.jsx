import React from 'react';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const SparkAndPrepper = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Spark and Prepper</h1>
            <p className="text-sm text-gray-500 mb-4">February 2, 2025</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Building an AI-powered study app that turns your notes into interactive learning tools.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <a
                href="https://devpost.com/software/sparkandprepper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                devpost
              </a>
              {' · '}
              <a
                href="https://github.com/seifotefa/sparkandprepper"
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
              src="/assets/sparkandprepper.png"
              alt="Spark and Prepper interface"
              className="w-full border border-gray-300"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              During GDSC Hacks 2025 at the University of Guelph, I teamed up with Youseph El Khouly and Ahmed Aly to build Spark and Prepper—an AI-powered study app designed to make studying more organized, efficient, and interactive.
            </p>
          </div>

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
                Our goal was straightforward: make studying smarter, not harder.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Spark and Prepper lets students upload their notes, syllabi, or slides, and automatically turns them into interactive study tools:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Condensed study guides</li>
                <li>Flashcards</li>
                <li>Mock exams</li>
                <li>Cheat sheets</li>
                <li>An AI tutor chatbot</li>
              </ul>
              <p>
                All powered by Google's Gemini API.
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

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Tech Stack</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                React, Vite, Tailwind CSS, and React Router on the frontend; Node.js and Express on the backend with Firebase for storage and auth; and Google's Gemini API as the AI engine.
              </p>
              <p>
                We divided our work naturally: I focused on full-stack development and AI integration, connecting the backend and frontend; Youseph worked on Firebase and Gemini integration; and Ahmed designed the interface and handled the frontend structure.
              </p>
              <p>
                We built and shipped the entire prototype in less than 24 hours.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700 leading-relaxed">
              <li>A user uploads their study materials (PDFs, docs, or slides)</li>
              <li>The backend sends those files to Gemini for processing</li>
              <li>The AI generates study guides, flashcards, and other learning resources</li>
              <li>Firebase stores everything, and the frontend displays it interactively</li>
              <li>Users can then study, test themselves, or chat with the AI tutor</li>
            </ol>
          </div>

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
                Git merge conflicts—we lost progress multiple times due to lack of experience with Git.
              </p>
              <p>
                Each challenge forced us to think about balance—between function and simplicity, speed and polish.
              </p>
            </div>
          </div>

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
                Git, Git, and more Git.
              </p>
              <p>
                And I learned that building under pressure means focusing on what matters most—clarity, teamwork, and shipping something that works.
              </p>
            </div>
          </div>

          {/* The Outcome */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              By the end of the weekend, we had a working prototype that impressed students and mentors alike. It reaffirmed my interest in building AI tools for learning, and reminded me that the best products often start as small, scrappy ideas.
            </p>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default SparkAndPrepper;
