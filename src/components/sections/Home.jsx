import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WebringLinks } from '../WebringLinks'

const work = [
  { name: 'backboard', href: 'https://backboard.io', role: 'member of technical staff · intern, now part-time' },
  { name: 'mcmaster', href: 'https://future.mcmaster.ca/programs/computer-science/', role: 'computer science · teaching assistant · engineering competition consulting lead' },
  { name: 'obotz robotics', role: 'robotics instructor' },
  { name: 'ludera', role: 'software engineer intern' },
  { name: 'mova realities', href: 'https://www.movarts.com/', role: 'product manager intern' },
]

const projects = [
  { name: 'notipply', href: 'https://www.notipply.com/', description: 'job alerts sent by text.' },
  { name: 'notchii', href: 'https://notchii.xyz', description: 'share and discover what people are listening to.' },
  { name: 'frontline', href: 'https://github.com/seifotefa/deltahacks-12', description: 'AI first-aid triage from camera vitals and vision.' },
  { name: 'mcmaster webring', href: 'https://www.mcmasterwebring.xyz/', description: 'a network of builders at mcmaster.' },
  { name: 'mec consulting', to: '/blog/mec2025', description: 'our winning engineering competition project.' },
  { name: 'jinsa', href: 'https://usejinsa.co', description: 'trackable, verifiable products.' },
  { name: 'resumock', href: 'https://github.com/seifotefa/deltahackslite', description: 'practice interviews from your résumé.' },
  { name: 'spark and prepper', href: 'https://github.com/seifotefa/sparkandprepper', description: 'study tools generated from your notes.' },
]

const writing = [
  { title: 'my summer at backboard', to: '/blog/backboard' },
  { title: 'lessons from joining an early stage startup', to: '/blog/startup-lessons' },
  { title: 'OEC 2026 — carleton', to: '/blog/oec2026' },
  { title: "teaching stanford's cs106A", to: '/blog/cip2025' },
]

function WorkItem({ item }) {
  return (
    <div className="home-work-item" tabIndex={0} aria-label={`${item.name}: ${item.role}`}>
      {item.href
        ? <a href={item.href} target="_blank" rel="noreferrer">{item.name}</a>
        : <span>{item.name}</span>}
      <span className="home-work-role">{item.role}</span>
    </div>
  )
}

function ProjectItem({ item }) {
  return <div className="home-list-item home-project-item">
    {item.to
      ? <Link to={item.to}>{item.name}</Link>
      : <a href={item.href} target="_blank" rel="noreferrer">{item.name}</a>}
    <span className="home-project-description">{item.description}</span>
  </div>
}

function Section({ title, children, primary = false }) {
  const Heading = primary ? 'h1' : 'h2'
  return <section className="home-section">
    <Heading>{title}</Heading>
    <div className="home-section-content">{children}</div>
  </section>
}

function MoreButton({ open, onClick, controls }) {
  return <button type="button" className="home-more" onClick={onClick} aria-expanded={open} aria-controls={controls}>
    {open ? 'show less ↑' : 'more ↓'}
  </button>
}

export const Home = () => {
  const [showWork, setShowWork] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  return <main className="home-main">
    <div className="home-directory">
      <Section title="seif otefa" primary />

      <Section title="work">
        {work.slice(0, 2).map((item) => <WorkItem key={item.name} item={item} />)}
        <div id="more-work" hidden={!showWork}>{work.slice(2).map((item) => <WorkItem key={item.name} item={item} />)}</div>
        <MoreButton open={showWork} onClick={() => setShowWork(!showWork)} controls="more-work" />
      </Section>

      <Section title="content">
        <div className="home-list-item"><a href="https://www.instagram.com/seifoai/" target="_blank" rel="noreferrer">@seifoai on instagram</a></div>
        <div className="home-list-item"><Link to="/partnerships">partnerships</Link></div>
      </Section>

      <Section title="projects">
        {projects.slice(0, 3).map((item) => <ProjectItem key={item.name} item={item} />)}
        <div id="more-projects" hidden={!showProjects}>{projects.slice(3).map((item) => <ProjectItem key={item.name} item={item} />)}</div>
        <MoreButton open={showProjects} onClick={() => setShowProjects(!showProjects)} controls="more-projects" />
      </Section>

      <Section title="writing">
        {writing.slice(0, 2).map((item) => <div className="home-list-item" key={item.to}><Link to={item.to}>{item.title}</Link></div>)}
        <Link className="home-more home-more-link" to="/blog">more writing</Link>
      </Section>

      <Section title="contact">
        <div className="home-contact-links">
          <a href="mailto:seifotefa@gmail.com">email</a>
          <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer">linkedin</a>
          <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer">github</a>
          <a href="https://x.com/0xseifo" target="_blank" rel="noreferrer">x</a>
        </div>
      </Section>

      <footer className="home-footer">
        <nav aria-label="Site pages" className="home-footer-nav">
          <Link to="/">home</Link><Link to="/links">links</Link><Link to="/blog">blog</Link><Link to="/archive">archive</Link><Link to="/resume">resume</Link>
          <WebringLinks variant="compact" />
        </nav>
      </footer>
    </div>
  </main>
}
