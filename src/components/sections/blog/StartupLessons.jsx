import React from 'react';
import { BackToHome } from '../../BackToHome';
import { BottomBar } from '../../BottomBar';

export const StartupLessons = () => {
  return (
    <>
      <BackToHome />
      <section className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Lessons From Joining an Early Stage Startup</h1>
            <p className="text-sm text-gray-500 mb-4">June 12, 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ambiguity, structure, and agency — what my first month at backboard.io taught me.
            </p>
          </div>

          {/* Intro */}
          <div className="mb-12 space-y-4 text-gray-700 leading-relaxed">
            <p>
              It's only been a month since I joined Backboard.io for the summer, and it wouldn't be a stretch to say that I've already learned more than I have in the first two years of my CS degree, worked on things I realistically have no business working on, and burned through 650 million tokens (with actual work, not tokenmaxxing, I promise).
            </p>
            <p>
              In 2025 (the year Claude Code dropped), the startup ecosystem grew 21%. Funding has increased, the technical barrier is almost non-existent, and so, so many people are building — more than any other period in history.
            </p>
            <p>
              This means that students and young professionals are faced with an interesting question: do they take the traditional "safe" path and join a bank, an insurance company, or even a FAANG company for a stable (not that stable anymore) career — or take a risk and join a startup on the frontier of innovation?
            </p>
            <p>
              More and more people are drawn to the second choice every day.
            </p>
            <p>
              So I hope to share some lessons I learned in my first month, and hopefully my experience can influence (or deinfluence) whether joining a startup is the right choice for you.
            </p>
          </div>

          {/* Ambiguity */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Ambiguity</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                When you are building at the bleeding edge, ambiguity is a word you need to be very familiar with.
              </p>
              <p>
                At Backboard, we are working on problems that most of the world doesn't even know exist. At deep tech, AI, robotics, or any other innovative startup, you will find that a lot of the time you are working on problems that no one has ever worked on. There is no reddit or stack overflow post, no historical reference. Only you and your competitors racing to find an answer. You won't have all the context you need, and you will have questions that no one can or will really answer.
              </p>
              <p>
                I find this to be a double-edged sword. It means you have to be comfortable exploring unknown and new concepts. The fact that no one has solved a problem means you won't have a lot of help — but the beauty of it is that you get to solve a problem that has never been solved, or answer a question that has never been answered, and that feels 100x better than following a playbook.
              </p>
            </div>
          </div>

          {/* Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Structure</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At a small startup, you will likely not have a manager that you report to every day. You will likely have a small team that you collaborate with. There is less hierarchy, less politics and bureaucracy, and more freedom, ownership, and flexibility than a traditional job or internship.
              </p>
              <p>
                This is something you must be comfortable with. A lot of the time you will be thrown head first into a problem and tasked with solving it. You don't get a ticket or a PR to review — your tasks are meaningful and complex. Like I mentioned before, they are usually ambiguous, there is no right or wrong way to solve the problem, and your teammates are too busy with their own ambiguous, complex problems to mentor you or hold your hand.
              </p>
              <p>
                If you are not comfortable in a little bit of chaos, keep this in mind before starting a startup or joining one.
              </p>
            </div>
          </div>

          {/* Agency */}
          <div className="mb-12">
            <h2 className="text-3xl font-light text-black mb-6">Agency</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Toronto Tech Week, I heard two words more than I heard the word "AI". One of them was distribution; the other was agency.
              </p>
              <p>
                Agency is something that isn't only valuable in a startup — it is a skill that is valuable everywhere.
              </p>
              <p>
                Agency is the ability to get sh*t done: to take a problem and produce a solution, whether you need to code, research, or learn Mandarin. It is the mindset of extreme ownership, the need to perfect your deliverables, and a hatred of the word "impossible".
              </p>
              <p>
                I could write an entire article on this skill and its importance in the age of AI.
              </p>
              <p>
                In the context of a startup, high agency is the ability to solve "impossible" problems, against impossible odds, facing ambiguity and a lack of structure. It is something you need to develop if you want to succeed as a founder, an engineer, or anyone working at an early stage startup.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-12 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Now, does this mean everyone should join a startup? Probably not.
            </p>
            <p>
              Startups aren't "better" than traditional companies — they're just different. But if you enjoy ambiguity, learning at an unreasonable pace, and solving problems you realistically have no business solving, it might be one of the fastest ways to grow.
            </p>
            <p>
              After only a month, one thing has become very clear to me: in the age of AI, the people who will thrive are the ones who can navigate uncertainty, take ownership, and figure things out when there is no playbook.
            </p>
            <p>
              Curious to see what the next few months teach me.
            </p>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default StartupLessons;
