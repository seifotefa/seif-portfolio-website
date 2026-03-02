import React from 'react';
import { Link } from 'react-router-dom';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const MEC2025 = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Project Phoenix (McMaster Engineering Competition 2025)</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>November 27, 2025</span>
              <span>•</span>
              <span>3 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Competition</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              From a rocky start to first place, and a ticket to OEC.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <img 
              src="/assets/mec1.JPG" 
              alt="MEC Competition" 
              className="w-full border border-gray-300"
            />
          </div>

          {/* The Beginning */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Beginning</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This year's MEC consulting competition started off with a curveball: two of our team members couldn't make it at the beginning.
              </p>
              <p>
                With only two of us present at the start, we had to rethink our workflow, split responsibilities, and keep the project moving with half the manpower.
              </p>
              <p>
                The challenge prompt focused on something massive and deeply relevant: <strong>the future of healthcare in Canada</strong>. From demographics to digital infrastructure, we were analyzing a system that affects millions of people every day.
              </p>
            </div>
          </div>

          {/* Teamwork Image */}
          <div className="mb-12">
            <img 
              src="/assets/mec2.jpg" 
              alt="Teamwork during competition" 
              className="w-full border border-gray-300"
            />
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Challenge</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Competitions like he McMaster Engineering Competition don't just test knowledge—they test adaptability.
              </p>
              <p>
                We were given limited time to research the current state of Canada's healthcare system, diagnose the structural issues, and propose a forward-looking strategy that was realistic, data-driven, and actionable.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our final proposal focused on three pillars that Canada needs in order to build a sustainable and modern healthcare system:
              </p>
              
              <div className="bg-gray-50 border border-gray-300 p-6">
                <h3 className="text-xl font-medium text-black mb-4">Three Strategic Pillars</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Workforce Redesign</strong> – Restructuring roles and responsibilities to address staffing shortages and burnout</li>
                  <li><strong>Digital Transformation</strong> – Implementing AI-driven triage systems and integrated medical records</li>
                  <li><strong>Scalable Funding Models</strong> – Creating sustainable financial structures for long-term viability</li>
                </ul>
              </div>

              <p>
                We emphasized hybrid care, AI-driven triage systems, integrated medical records, and better resource allocation—not just buzzwords, but long-term, feasible steps toward a resilient system.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Moment */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Moment</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After hours of research, modelling, strategy building, and refining our pitch, we delivered a presentation we were genuinely proud of.
              </p>
              <p>
                It balanced innovation with realism, and it told a clear story of where Canadian healthcare could go in the next decade—and how to get there.
              </p>
              <p>
                Hearing our team announced as <strong>1st place winners</strong> felt unreal, especially knowing how the day began.
              </p>
            </div>
          </div>

          {/* Win Image */}
          <div className="mb-12">
            <img 
              src="/assets/mec3.JPG" 
              alt="First place winners" 
              className="w-full border border-gray-300"
            />
          </div>

          <hr className="my-12 border-gray-300" />

          {/* What I Learned */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">What I Learned</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Consulting isn't just about giving meaningless advice—it's about understanding systems at scale, identifying constraints, and communicating solutions clearly.
              </p>
              <p>
                Working through this challenge taught me how to combine analytics, strategy, and narrative into one cohesive recommendation.
              </p>
              <p>
                It also reinforced the importance of composure: even when the situation isn't ideal, the work still has to get done.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* The Takeaway */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Takeaway</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Winning first place meant more than a certificate—it earned us the chance to compete at the <strong>Ontario Engineering Competition</strong> in January, representing McMaster for the consulting category.
              </p>
              <p className="bg-blue-50 border border-blue-200 p-6">
                <strong>Next Challenge:</strong> Competing at OEC to represent McMaster at the provincial level, which I can't wait to do.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Competition Info */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Competition Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Event:</strong> McMaster Engineering Competition (MEC) 2025</p>
              <p><strong>Date:</strong> November 27, 2025</p>
              <p><strong>Category:</strong> Consulting</p>
              <p><strong>Topic:</strong> Future of Healthcare in Canada</p>
              <p><strong>Result:</strong> 🥇 1st Place</p>
              <p><strong>Next Step:</strong> Ontario Engineering Competition (OEC) - January 2026</p>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default MEC2025;
