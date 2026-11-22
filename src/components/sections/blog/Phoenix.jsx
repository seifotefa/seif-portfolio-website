import React from 'react';

// Project Phoenix: MEC 2026 (first place, consulting) and the OEC 2026 trip it earned.
// Combines the former /blog/mec2025 and /blog/oec2026 posts; both routes redirect here.
export const Phoenix = () => {
  return (
    <>
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Project Phoenix — MEC &amp; OEC 2026</h1>
            <p className="text-sm text-gray-500 mb-4">November 2025 – February 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From a rocky start to first place at MEC, and a ticket to OEC at Carleton.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm text-gray-500">Part 1 — McMaster Engineering Competition 2026</p>
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
                The challenge prompt focused on something massive and deeply relevant: the future of healthcare in Canada. From demographics to digital infrastructure, we were analyzing a system that affects millions of people every day.
              </p>
            </div>
          </div>

          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Challenge</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Competitions like the McMaster Engineering Competition don't just test knowledge—they test adaptability.
              </p>
              <p>
                We were given limited time to research the current state of Canada's healthcare system, diagnose the structural issues, and propose a forward-looking strategy that was realistic, data-driven, and actionable.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Solution</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our final proposal focused on three pillars that Canada needs in order to build a sustainable and modern healthcare system:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Workforce redesign – restructuring roles and responsibilities to address staffing shortages and burnout</li>
                <li>Digital transformation – implementing AI-driven triage systems and integrated medical records</li>
                <li>Scalable funding models – creating sustainable financial structures for long-term viability</li>
              </ul>
              <p>
                We emphasized hybrid care, AI-driven triage systems, integrated medical records, and better resource allocation—not just buzzwords, but long-term, feasible steps toward a resilient system.
              </p>
            </div>
          </div>

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
                Hearing our team announced as 1st place winners felt unreal, especially knowing how the day began.
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

          {/* The Takeaway */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Takeaway</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Winning first place meant more than a certificate—it earned us the chance to compete at the Ontario Engineering Competition in January, representing McMaster in the consulting category. I can't wait.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <p className="text-sm text-gray-500">Part 2 — Ontario Engineering Competition 2026, Carleton</p>
          </div>

          {/* Opening Ceremonies Image */}
          <div className="mb-12">
            <img
              src={encodeURI("/assets/Screenshot 2026-02-24 235121.png")}
              alt="OEC 2026 Opening Ceremonies at Carleton University"
              className="w-full border border-gray-300"
            />
            <p className="text-sm text-gray-500 mt-2">OEC 2026 Opening Ceremonies — Carleton University</p>
          </div>

          {/* How I Got There */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">How I Got There</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After winning first in the consulting category at the McMaster Engineering Competition, our team got the chance to compete at the <strong>Ontario Engineering Competition (OEC)</strong> at Carleton University in Ottawa.
              </p>
              <p>
                Everything was covered including hotel and travel so we could focus on the competition and on meeting other teams from across the province.
              </p>
            </div>
          </div>

          {/* Campus Image */}
          <div className="mb-12">
            <img
              src={encodeURI("/assets/Screenshot 2026-02-24 234959.png")}
              alt="Carleton University campus in winter"
              className="w-full border border-gray-300"
            />
            <p className="text-sm text-gray-500 mt-2">Carleton University, Ottawa — winter 2026</p>
          </div>

          {/* The Theme */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Theme</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This year’s consulting challenge was <strong>aerospace-themed</strong>: tackling the problem of <strong>cleaning up debris in Low Earth Orbit (LEO)</strong>. It was a cool, real-world prompt, space junk is a growing issue, and we got to think through how engineering and policy could help address it. I had 0 exposure to aerospace eng, and learned so much in such a short time.
              </p>
              <p>
                We didn’t go super deep into the technical weeds; the focus was on framing the problem, proposing sensible approaches, and presenting clearly, exactly what you’d expect from a consulting-style competition.
              </p>
            </div>
          </div>

          {/* The Experience */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Experience</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We didn’t end up winning at OEC, but that wasn’t the only point. The opening ceremonies, the venue at Carleton, and the chance to compete and hang out with other engineering students made the whole trip memorable.
              </p>
              <p>
                If you get the chance to go to OEC after MEC, whether you win or just want the experience, go for it. The trip, the theme, and the people made it a blast. Even though it was the coldest weekend in decades, and our train was delayed 8 hours due to the snowstorm, we still had a great time and I can't wait to be back next year.
              </p>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
};

export default Phoenix;
