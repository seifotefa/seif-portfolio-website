import React from 'react';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const Jinsa = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Jinsa</h1>
            <p className="text-sm text-gray-500 mb-4">October 14, 2025</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From hackathon idea, to pitch, to startup.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <a
                href="https://devpost.com/software/jinsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                devpost
              </a>
              {' · '}
              <a
                href="https://usejinsa.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                demo
              </a>
            </p>
          </div>

          {/* Logo */}
          <div className="mb-12">
            <img
              src="/assets/jinsalogo.png"
              alt="Jinsa logo"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* The Beginning */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Beginning</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Jinsa began as our ambitious idea for SpurHacks 2025—a weekend-long hackathon where teams came together to build something impactful.
              </p>
              <p>
                Our concept was simple but bold: a decentralized platform using blockchain to authenticate real-world products.
              </p>
              <p>
                Whether it was fashion, collectibles, or electronics, we wanted users to verify authenticity instantly—cutting through counterfeits and restoring trust between brands and consumers.
              </p>
            </div>
          </div>

          {/* SpurHacks Image */}
          <div className="mb-12">
            <img
              src="/assets/IMG_9622.jpg"
              alt="SpurHacks event"
              className="w-full border border-gray-300"
            />
          </div>

          {/* The Pivot */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Pivot</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At the start, everything moved fast. We brainstormed, sketched out features, and began building what would become the foundation of Jinsa.
              </p>
              <p>
                But as the hackathon hours ticked by, reality hit—we had aimed too big for a 36-hour window.
              </p>
              <p>
                Our vision was solid, but a full MVP wasn't realistic. So instead of forcing a rushed prototype, we made a decision that changed everything: we pivoted from the hackathon track to the startup track.
              </p>
            </div>
          </div>

          {/* The Shift */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Shift</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Instead of building the MVP out, we focused on understanding the market, users, business model, and scalability of Jinsa.
              </p>
              <p>
                Even though we didn't place among the winners, our pivot caught the organizers' attention—and we were invited to join the Spur startup accelerator program.
              </p>
            </div>
          </div>

          {/* Accelerator Image */}
          <div className="mb-12">
            <img
              src="/assets/IMG_8074.PNG"
              alt="Accelerator program"
              className="w-full border border-gray-300"
            />
          </div>

          {/* The Accelerator */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Accelerator</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Over the following weeks, we shifted from just "building a cool app" to understanding what it takes to build a <em>company</em>.
              </p>
              <p>
                We learned how to validate our product idea, define a target market, and craft a story that investors and users could believe in.
              </p>
            </div>
          </div>

          {/* Email Image */}
          <div className="mb-12">
            <img
              src="/assets/IMG_8167.PNG"
              alt="Accelerator email"
              className="w-full border border-gray-300"
            />
          </div>

          {/* What I Learned */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">What I Learned</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I spent much of that time diving deep into blockchain fundamentals—not just how it works, but how it could be applied meaningfully beyond hype.
              </p>
              <p>
                We explored token standards, supply chain use cases, and different ways to connect physical assets to digital tokens.
              </p>
              <p>
                It was the first time I saw how technology, business, and storytelling could blend together to form something bigger than a project.
              </p>
            </div>
          </div>

          {/* The Takeaway */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">The Takeaway</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Even though we decided not to launch Jinsa as a full startup, the experience left a lasting impact.
              </p>
              <p>
                It taught me how to think like a founder—how to prioritize, pivot, and communicate vision under uncertainty. I also witnessed the Waterloo culture firsthand, showing me the amount of talent and potential in the GTA when it comes to building the future, no matter the industry.
              </p>
              <p>
                More than that, it showed me what it feels like to chase an idea that's slightly out of reach, and to learn from the process of trying to make it real.
              </p>
              <p>
                Jinsa didn't end in a product release, but it became one of the most valuable learning experiences I've had in turning ideas into something tangible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default Jinsa;
