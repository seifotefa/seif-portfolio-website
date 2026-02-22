import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BackToHome } from '../../BackToHome';
import { WebringLinks } from '../../WebringLinks';

export const Jinsa = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Jinsa</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>October 14, 2025</span>
              <span>•</span>
              <span>3 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Project</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              From hackathon idea, to pitch, to startup.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://devpost.com/software/jinsa"
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
                href="https://usejinsa.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </a>
            </div>
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

          <hr className="my-12 border-gray-300" />

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

          <hr className="my-12 border-gray-300" />

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

          <hr className="my-12 border-gray-300" />

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

          <hr className="my-12 border-gray-300" />

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

          <hr className="my-12 border-gray-300" />

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

          <hr className="my-12 border-gray-300" />

          {/* Project Info */}
          <div className="bg-gray-50 border border-gray-300 p-6">
            <h3 className="text-xl font-medium text-black mb-4">Project Information</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Event:</strong> SpurHacks 2025</p>
              <p><strong>Date:</strong> October 2025</p>
              <p><strong>Type:</strong> Blockchain Authentication Platform</p>
              <p><strong>Outcome:</strong> Invited to Spur Startup Accelerator Program</p>
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

export default Jinsa;
