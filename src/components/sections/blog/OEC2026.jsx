import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BackToHome } from '../../BackToHome';
import { WebringLinks } from '../../WebringLinks';

export const OEC2026 = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">OEC 2026 — Carleton</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>February 2026</span>
              <span>•</span>
              <span>2 min read</span>
              <span className="px-3 py-1 bg-gray-100 border border-gray-400 text-black text-xs font-semibold">Competition</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Representing McMaster at the Ontario Engineering Competition in Ottawa after winning MEC consulting. Didn’t take the top spot, but the trip and the experience were worth it.
            </p>
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
                After winning first in the consulting category at the <Link to="/blog/mec2025" className="underline underline-offset-2 hover:text-black">McMaster Engineering Competition</Link>, our team got the chance to compete at the <strong>Ontario Engineering Competition (OEC)</strong> at Carleton University in Ottawa.
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

          <hr className="my-12 border-gray-300" />

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

export default OEC2026;
