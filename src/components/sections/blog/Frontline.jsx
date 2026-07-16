import React from 'react';
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
            <p className="text-sm text-gray-500 mb-4">January 11, 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection with voice-guided first aid instructions.
            </p>
            <p className="text-sm text-gray-600">
              <a
                href="https://devpost.com/software/frontline-noyxp0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                devpost
              </a>
              {' · '}
              <a
                href="https://github.com/seifotefa/deltahacks-12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                github
              </a>
            </p>
            <img
              src="/assets/frontline.png"
              alt="Frontline dashboard showing patient vitals and triage information"
              className="w-full max-w-3xl mx-auto mt-8 rounded border border-gray-300 shadow-sm"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Frontline won Best Use of Presage SDK at DeltaHacks12, and was recognized by the CEO of Presage as a featured project. It combines computer vision, vital signs monitoring, and AI guidance to help first responders make faster decisions during emergencies.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Problem</h2>
            <p className="text-gray-700 leading-relaxed">
              First responders face critical challenges: limited patient information, decision paralysis under pressure, difficult resource allocation in mass casualties, and communication barriers with unconscious or shocked victims. Traditional triage relies on manual assessment which is time-consuming and error-prone.
            </p>
          </div>

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

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Tech Stack</h2>
            <p className="text-gray-700 leading-relaxed">
              React and Tailwind CSS on the frontend with real-time data visualization; Node.js and Express on the backend with C++ for the Presage SDK integration; and the Presage SmartSpectra SDK, Google Gemini Vision API, and ElevenLabs API for the AI layer.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Impact</h2>
            <p className="text-gray-700 leading-relaxed">
              Built in under 36 hours at DeltaHacks12, Frontline won Best Use of Presage SDK and demonstrated how camera-based vitals monitoring combined with AI can transform emergency medical response. The project showed the practical potential of these technologies in high-pressure scenarios where every second counts.
            </p>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default Frontline;
