import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/site'

// Internal route or external link, depending on the project.
function ProjectLink({ p, children, ...rest }) {
  if (p.to) return <Link to={p.to} {...rest}>{children}</Link>
  return <a href={p.href} target="_blank" rel="noreferrer" {...rest}>{children}</a>
}

function Project({ p }) {
  return (
    <li className="proj">
      <ProjectLink p={p} className={`proj-thumb ${p.contain ? 'contain' : ''} ${p.img ? '' : 'proj-thumb-empty'}`} aria-hidden="true" tabIndex={-1}>
        {p.img ? <img src={p.img} alt="" loading="lazy" style={p.pos ? { objectPosition: p.pos } : undefined} /> : 'no image yet'}
      </ProjectLink>
      <div>
        <ProjectLink p={p} className="proj-name">{p.name}</ProjectLink>
        {p.award && <span className="proj-award">{p.award.toLowerCase()}</span>}
        <p className="proj-desc">{p.description}</p>
        <span className="meta">{[p.category, p.year].filter(Boolean).join(' · ').toLowerCase()}</span>
      </div>
    </li>
  )
}

export const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Seif Otefa | Projects'
    return () => { document.title = 'Seif Otefa' }
  }, [])

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="lede">Products, hackathon builds and competition work.</p>
      <ul className="rows">{projects.map((p) => <Project key={p.name} p={p} />)}</ul>
    </>
  )
}
