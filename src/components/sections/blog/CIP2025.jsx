import React from 'react';
import { Link } from 'react-router-dom';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const CIP2025 = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Code in Place</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>June 24, 2025</span>
              <span>•</span>
              <span>3 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Experience</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              My experience teaching as a Stanford CIP section leader.
            </p>
          </div>

          {/* Class Photo */}
          <div className="mb-12">
            <img 
              src="/assets/cipclassphoto.png" 
              alt="Code in Place class" 
              className="w-full border border-gray-300"
            />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              This spring, I had the privilege of serving as a Section Leader for Stanford's Code in Place program.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Teaching Code in Place */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Teaching Code in Place – Spring 2025</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In early 2025, I applied to be a section leader for{' '}
                <a 
                  href="https://codeinplace.stanford.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-gray-600"
                >
                  Code in Place
                </a>
                , an initiative run by Stanford University to teach the world how to code for free.
              </p>
              <p>
                The application asked about my motivation, my teaching experience (if any), why I cared, and had me solve some technical questions. It felt like the kind of opportunity I'd been looking for: a way to give back, to teach, to challenge myself, and to be part of something much bigger.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Week 0 */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Week 0 – Meeting My Section</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After being accepted, I was assigned to a group of 15 students from around the world.
              </p>
              <p>
                Our shared goal: get through six weeks of CS106A (Stanford's intro to Python course), together.
              </p>
              <p>
                Each week, we met live on Zoom. We walked through code examples, solved problems, and talked about loops, conditionals, and debugging. I tried to keep the sessions light, hands-on, and human. I wanted them to feel confident not just with Python, but with the idea that they <em>could</em> learn to code.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* What I Learned */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">What I Learned</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Teaching isn't just about knowing something—it's about understanding how someone else might not.
              </p>
              <p>
                I learned to explain things clearly, to pause more often, to listen better.
              </p>
              <p>
                I got better at breaking down logic and reading between the lines when a student was stuck.
              </p>
              <p>
                Sometimes, it wasn't about the code at all—it was about encouragement and having them slowly answer their question themselves.
              </p>
              <p>
                I also noticed that teaching a subject makes you understand it way better.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Why It Mattered */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Why It Mattered</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Code in Place reminded me that computer science can be a deeply human thing.
              </p>
              <p>
                It's not just algorithms and syntax—it's storytelling, problem solving, and building things that matter.
              </p>
              <p>
                I'm grateful for the chance to teach, to learn, and to be part of a global classroom. And I'm proud to have helped 15 new programmers take their very first steps.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Experience Info */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Experience Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Program:</strong>{' '}
                <a 
                  href="https://codeinplace.stanford.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-gray-600"
                >
                  Code in Place
                </a>
              </p>
              <p><strong>Duration:</strong> Spring 2025 (6 weeks)</p>
              <p><strong>Role:</strong> Section Leader</p>
              <p><strong>Students Taught:</strong> 15 students from around the world</p>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default CIP2025;
