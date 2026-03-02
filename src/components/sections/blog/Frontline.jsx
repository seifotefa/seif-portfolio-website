import React from 'react';
import { Link } from 'react-router-dom';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const Frontline = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Frontline</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>January 11, 2026</span>
              <span>•</span>
              <span>3 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Project</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection with voice-guided first aid instructions.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://devpost.com/software/frontline-noyxp0"
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
                href="https://github.com/seifotefa/deltahacks-12"
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
            <img 
              src="/assets/frontline.png" 
              alt="Frontline dashboard showing patient vitals and triage information" 
              className="w-full max-w-3xl mx-auto mt-8 rounded border border-gray-300 shadow-sm"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Frontline won <strong>Best Use of Presage SDK</strong> at DeltaHacks12, and was recognized by the <strong>CEO of Presage</strong> as a featured project!. It combines computer vision, vital signs monitoring, and AI guidance to help first responders make faster decisions during emergencies.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <p className="text-gray-700 leading-relaxed">
              First responders face critical challenges: limited patient information, decision paralysis under pressure, difficult resource allocation in mass casualties, and communication barriers with unconscious or shocked victims. Traditional triage relies on manual assessment which is time-consuming and error-prone.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            
            {/* Demo Video */}
            <div className="mb-8">
              <video 
                src="/assets/frontlinedemo.mp4" 
                controls 
                className="w-full max-w-3xl mx-auto rounded border border-gray-300 shadow-sm"
                poster="/assets/frontline.png"
              >
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-gray-500 text-center mt-2">Demo of Frontline in action</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-black mb-3">SmartSpectra (Presage SDK)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Camera-based vital signs monitoring measuring heart rate, respiratory rate, blood pressure, and oxygen saturation in real-time—no physical contact needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black mb-3">Gemini Vision AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Analyzes camera feed to detect visible injuries (burns, lacerations, fractures) and assesses severity based on appearance and vital signs correlation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black mb-3">ElevenLabs Voice Assistant</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI-powered conversational agent providing step-by-step first aid instructions, answering questions, and guiding responders through procedures hands-free.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Real-time data visualization</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Node.js & Express.js</li>
                  <li>C++ (Presage SDK integration)</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 p-6 md:col-span-2">
                <h3 className="text-xl font-medium text-black mb-4">AI & APIs</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Presage SmartSpectra SDK</li>
                  <li>Google Gemini Vision API</li>
                  <li>ElevenLabs API</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Impact</h2>
            <p className="text-gray-700 leading-relaxed">
              Built in under 36 hours at DeltaHacks12, Frontline won <strong>Best Use of Presage SDK</strong> and demonstrated how camera-based vitals monitoring combined with AI can transform emergency medical response. The project showed the practical potential of these technologies in high-pressure scenarios where every second counts.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Project Links */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Project Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Event:</strong> DeltaHacks12 (January 2025)</p>
              <p><strong>Award:</strong> Best Use of Presage SDK</p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a 
                  href="https://github.com/seifotefa/deltahacks-12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-gray-600"
                >
                  github.com/seifotefa/deltahacks-12
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default Frontline;
