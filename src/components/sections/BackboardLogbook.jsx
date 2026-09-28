import React from 'react';
import { Link } from 'react-router-dom';
import { BackToHome } from '../BackToHome';
import { BottomBar } from '../BottomBar';

const work = [
  { id: 'studio', title: 'Backboard Studio', description: 'A three-person effort to make one desktop app work for first-time builders and experienced engineers.' },
  { id: 'ambassadors', title: 'Ambassador program', description: 'Recruiting a founding cohort, launching the program, and building its portal.' },
  { id: 'content', title: 'Content', description: 'Product videos, a workshop demo, and writing about Studio.' },
  { id: 'experiences', title: 'Experiences', description: 'The people and events around the work.' },
];

function Photo({ src, alt, caption, narrow = false }) {
  return (
    <figure className={`my-8 ${narrow ? 'max-w-xl' : ''}`}>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${alt}`}>
        <img src={src} alt={alt} className="w-full h-auto rounded-lg border border-gray-200" loading="lazy" />
      </a>
      <figcaption className="text-xs text-gray-500 mt-2 leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

export const BackboardLogbook = () => (
  <>
    <BackToHome />
    <article className="min-h-screen bg-white text-gray-700 pt-24 pb-32 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <img src="/assets/backboard_io_logo.jpg" alt="Backboard logo" className="w-9 h-9 rounded-md object-cover" />
            <span className="text-sm text-gray-500">backboard.io</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-black mb-4">My Summer at Backboard</h1>
          <p className="text-sm text-gray-500 mb-4">Summer 2026 · Member of Technical Staff Intern</p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Building an AI development environment for everyone from first-time builders to advanced engineers, then helping launch a community around it.
          </p>
        </header>

        <section className="mb-12 space-y-4 leading-relaxed">
          <p>
            I joined <a href="https://backboard.io" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">Backboard</a> in May 2026 and worked on Backboard Studio with a team of three. We wanted one desktop app that someone with no technical background could open and use, but that an experienced engineer would not outgrow. I mostly owned frontend work and the simpler building experience. Erin deserves a shoutout for carrying so much of the backend work; Youseph handled settings, onboarding, and other parts of the app for about six weeks before moving to another team. Later in the summer, my focus shifted toward the Ambassador program, content, and events.
          </p>
          <p>
            The desktop story had a few distinct chapters: a month building on a Zed fork, a difficult move to a VS Code and TypeScript base, and a second pass at integrations that had to work beyond a nice-looking marketplace. None of that was solo work. We made the product decisions and navigated the rebuild together, with different areas of ownership. Here is what I worked on and what we learned along the way.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-light text-black mb-6">What I worked on</h2>
          <div className="space-y-4">
            {work.map((item, index) => (
              <div key={item.id} className="border-b border-gray-200 pb-3">
                <a href={`#${item.id}`} className="text-black underline hover:text-gray-600">
                  {String(index + 1).padStart(2, '0')} / {item.title}
                </a>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-light text-black mb-6">Backboard Studio</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              The core product question was how to span two very different starting points. A non-technical person should be able to describe an idea, watch an agent build it, and see the result without learning what a terminal or Git diff is. An advanced engineer should still have access to files, tools, changes, and eventually multiple agents. Rather than treating those as separate products, our three-person team tried to make them different levels of the same desktop experience.
            </p>
            <h3 className="text-xl font-light text-black pt-4">The first month: a Zed fork</h3>
            <p>
              We began with a fork of Zed and spent about a month building the first version. Early on, we split the desktop work, whiteboarded the flows, wrote a product spec, and decided which parts of the editor to keep, change, or remove. My main responsibility throughout that fork was Simple Mode, the beginner-facing surface. The interaction we were aiming for was closer to Codex or Lovable than a conventional IDE: describe what you want, let an agent work in a project, and preview the result in the app.
            </p>
            <p>
              That simplicity took engineering work. I changed the agent thread harness to keep the beginner workflow focused on a single web app and project folder, while still allowing the user to see changes in a less intimidating way. I built the app generation and in-app browser preview path, parallel chats so someone could begin another project while one rendered, and persistence so old chats could be reopened after a restart. I also worked on the boundaries between Simple and Editor modes: curated model choices, clearer build/ask controls, approachable tool-call cards, and an explicit way to move into the editor when someone needed more control.
            </p>
            <p>
              We had a first version in testing by May 19, but the next weeks were full of the details that make or break a desktop app: tabs had to restore the right chat, previews had to wait until there was something useful to show, the composer had to keep focus, and switching modes could not lose the user's place. I was working on those interactions while the rest of the team pushed other parts of the fork forward. It was a shared product, not a one-person build.
            </p>
            <h3 className="text-xl font-light text-black pt-4">The rebuild: VS Code and TypeScript</h3>
            <p>
              The Zed fork gave us a working direction, but it also slowed us down. Its Rust build could take hours, which meant a small UI change could require an unreasonable wait before we could see and test it. For a team iterating on basic interaction design every day, that feedback loop was a real product constraint. In June, we made the call to move to a VS Code (Code - OSS) foundation and build the experience in TypeScript, bringing compile times down from hours toward minutes. We had to rebuild work we had just spent a month doing, but the faster loop made it possible to keep improving the app.
            </p>
            <p>
              I helped recreate Simple Mode as Sandbox Mode on the new base. Instead of exposing all of VS Code's local-agent UI, I routed the beginner flow through the Backboard extension and agent-host path, built a compact composer with model and tool controls, and replaced the default auxiliary panes with a right panel for Files, Changes, and Preview. The preview and diff surfaces needed to reflect actual workspace changes, while the user-facing chat stayed focused on the task. We also added onboarding imports from VS Code and Cursor so the advanced side of the product felt familiar to existing developers.
            </p>
          </div>
          <Photo src="/assets/backboard-logbook/composer.png" alt="Early Backboard Studio Sandbox Mode composer interface" caption="An early Sandbox Mode composer from the TypeScript rebuild, June 2026." />
          <div className="space-y-4 leading-relaxed">
            <h3 className="text-xl font-light text-black pt-4">Back in Ottawa: Skills and MCPs</h3>
            <p>
              Back in Ottawa, I built out the early Skills and MCP marketplace. For the Skills side, I used skills.sh and scraped 34,000 skills from marketplaces and open-source repositories. That gave us a large pool to work from alongside the Skills browsing experience in Studio.
            </p>
            <p>
              MCP servers were a different challenge: they connect agents to outside tools, so a listing only matters if the connection actually works. My first pass added a lot of servers, but our checks missed some that appeared to work until a user tried to sign in. A Google MCP that failed at authentication, along with feedback from the team, made the gap obvious. I rebuilt the automated test system to cover the full connection path, including login, instead of trusting a server that only installed or started successfully.
            </p>
            <p>
              The marketplace itself covered Skills and MCP servers, categories, search, pinned and installed states, and entry points from chat and session views. I wired installed MCP tools through to Backboard agent sessions so the agent could discover and call them. A later overhaul replaced a flaky registry dependency with a curated list of 217 usable servers, made installs write the configuration needed by both the desktop and chat engines, and hid remote servers whose authentication could not yet complete. I also worked on clearer setup errors and a shared OAuth sign-in path. The lesson was that an integration is a working tool chain, not a card in a catalog.
            </p>
            <h3 className="text-xl font-light text-black pt-4">Making room for advanced users</h3>
            <p>
              In July, I also began an Advanced Mode for engineers managing multiple agent sessions. I started with a three-panel workspace: navigation, an agent board, and the selected chat. The cards were connected to live session data rather than static mocks, with create and close flows and streaming updates. I later added richer status, timestamps, workspace labels, and a Grid/Kanban switcher that grouped tasks into Running, Needs Attention, and Done. This was the other end of our original product goal: a place to supervise parallel work once a project outgrew the beginner flow.
            </p>
            <p>
              Alongside the feature work, we kept fixing the things people would notice immediately: Windows-only controls, duplicate window chrome, sign-in and deployment issues, browser behavior, and whether file changes appeared correctly for review. Those details were part of making a desktop tool that both beginners and engineers could trust.
            </p>
          </div>
          <Photo src="/assets/backboard-logbook/marketplace.png" alt="Skills and MCP marketplace in Backboard Studio" caption="The Skills and MCP marketplace in Editor Mode, June 2026." narrow />
          <p className="leading-relaxed">
            Since I moved from desktop work to the Ambassador program, the Studio team has kept building. In just a few months, they have improved nearly every part of the app, added Video Generation Mode and Codex and Claude BYOSub support, and have cloud agents on the way. I was not part of those later additions; the credit belongs to the team carrying Studio forward.
          </p>
          <h3 className="text-xl font-light text-black pt-8">Studio now</h3>
          <p className="leading-relaxed mt-4">
            These current screens show how the idea of one app for different levels of experience has taken shape. Onboarding offers a few ways in, Simple Mode keeps the project centered on a prompt, Editor Mode exposes the code and terminal, and Advanced Mode gives parallel agents their own board.
          </p>
          <div className="grid gap-x-6 md:grid-cols-2">
            <Photo src="/assets/backboard-logbook/onboarding-current.png" alt="Current Backboard Studio onboarding with Backboard, own key, and own subscription options" caption="Current onboarding. Select a way to connect before entering Studio." />
            <Photo src="/assets/backboard-logbook/simple-current.png" alt="Current Simple Mode with project folders and a prompt composer" caption="Current Simple Mode. Start with an idea and a focused chat." />
            <Photo src="/assets/backboard-logbook/editor-current.png" alt="Current Editor Mode with file explorer, code, terminal, and agent chat" caption="Current Editor Mode. Files, code, terminal, and the agent stay in one workspace." />
            <Photo src="/assets/backboard-logbook/advanced-current.png" alt="Current Advanced Mode showing an agent board with multiple tasks" caption="Current Advanced Mode. A board for supervising multiple agent tasks." />
          </div>
        </section>

        <section id="ambassadors" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-light text-black mb-6">Ambassador Program</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              In the second half of July and into August, more of my time moved from Studio to building the Ambassador program. That meant work outside the codebase as well as inside it: shaping the program, writing and following up on launch posts, talking with prospective ambassadors, and interviewing people for the founding cohort. The first round of posts went out on July 17. I also represented Backboard at Hack the 6ix while we were getting the program off the ground.
            </p>
            <p>
              We needed a place for ambassadors to see what they could do and how to participate, so I built a portal alongside the program rollout. It started as a role-gated dashboard with challenges that required admin approval and had claim limits. I added a shared calendar with attendance points, a resource library, an admin view, and a member directory. Later I built the program's points, referrals, tiers, store, and redemptions. Those features were tied to the actual community work; the portal was supposed to help people find opportunities, contribute, and see progress.
            </p>
            <p>
              As the portal grew, I moved it into its own repository and domain with Backboard single sign-on, then worked through several rounds of review. The fixes were practical: access guards, input validation, race conditions, event submission throttling, upload behavior, and a bug that could erase earned points. In August I also explored more playful map and Hub views, while continuing to address review findings and add API tests and QA plans.
            </p>
            <p>
              The portal is now live, and the founding cohort has about 15 ambassadors. We are running events and preparing for the fall semester, with a focus on growing the program across campuses in Ontario. I continue to lead it part-time after the internship. This part of the summer taught me a different kind of ownership: the software was only one piece; I also had to listen to the people who would be in the program, write about it, and make sure the experience we promised had somewhere to live.
            </p>
          </div>
          <Photo src="/assets/backboard-logbook/ambassador-kickoff.png" alt="Founding Backboard ambassadors on a video kickoff call" caption="Kickoff call with the founding Ambassador cohort." />
        </section>

        <section id="content" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-light text-black mb-6">Content</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              I also had chances to explain what we were building. I scripted and edited a video for the Backboard CLI, developed a pitch and demo for a personal-project workshop, and wrote a Studio privacy post. Some of this work was about distribution; just as much of it was about making the product understandable to someone seeing it for the first time.
            </p>
            <p>
              Writing and demoing fed back into the product. Explaining the difference between Simple, Editor, and Advanced modes pushed me to think more clearly about the experience. In July I pitched a framing I liked: start with an idea in Simple Mode, move into the editor when the project gets real, and use Advanced Mode when the work grows beyond one or two agents.
            </p>
            <p>
              The clearest example is my <a href="https://www.instagram.com/reel/DaQXU6nOc3l/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">R-CLI demo video</a>. I shared versions of it three or four times, and together they reached roughly 300,000–400,000 views. I also documented the summer on <a href="https://www.instagram.com/0xseifo/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">Instagram as @0xseifo</a>. Across my personal posts and Backboard's channels, the content I worked on generated around one million views and impressions, with most of that reach coming from my posts.
            </p>
          </div>
          <Photo src="/assets/backboard-logbook/workshop.png" alt="Title slide for a Backboard workshop demo" caption="Title slide from the workshop demo, June 2026." />
        </section>

        <section id="experiences" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-light text-black mb-6">Experiences</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              The summer was not just time in an editor. We had fireside chats about community, leadership, and building companies; content workshops; hackathons, including Hack the 6ix; and even a mini Valorant tournament. Those moments made the people behind the work as memorable as the work itself.
            </p>
            <h3 className="text-xl font-light text-black pt-4">The challenge that took us to Miami</h3>
            <p>
              At the start of the summer, Rob, Backboard's CEO, gave the CLI team a challenge: if they reached #1 on Terminal-Bench 2.1, he would book a private jet to Miami. It was their benchmark work, not mine. They hit #1, and Rob followed through. We went to Miami.
            </p>
            <p>
              The Miami trip is the story I tell first when someone asks about the summer. A challenge Rob set for another team became a company memory I got to share with them. It captured something about Backboard's pace and ambition better than a list of features could.
            </p>
            <p>
              The through-line in my work was ownership. A day could move from product spec to frontend work, a Windows bug, an OAuth flow, a video script, or an ambassador interview. I learned to keep asking what the user was trying to do, make the next version clearer, and follow through on the details after the exciting first demo.
            </p>
            <p>
              I wrote more about the early part of this experience in <Link to="/blog/startup-lessons" className="text-black underline hover:text-gray-600">Lessons From Joining an Early Stage Startup</Link>.
            </p>
          </div>
        </section>
      </div>
    </article>
    <BottomBar />
  </>
);

export default BackboardLogbook;
