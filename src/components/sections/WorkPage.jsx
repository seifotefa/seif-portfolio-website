import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { experience } from '../../data/site'
import { Org } from '../SiteChrome'

function Job({ x }) {
  return (
    <li className="job">
      <div className="job-head">
        <span><span className="job-org"><Org name={x.org} logo={x.logo} href={x.href} /></span> <span className="job-role">— {x.role}</span></span>
        {x.when && <span className="meta">{x.status ? `${x.status.toLowerCase()} · ` : ''}{x.when.toLowerCase()}</span>}
      </div>
      {(x.detail || x.link) && (
        <p className="job-detail">
          {x.detail} {x.link && <Link to={x.link.to}>{x.link.label.toLowerCase()}</Link>}
        </p>
      )}
    </li>
  )
}

export const WorkPage = () => {
  useEffect(() => {
    document.title = 'Seif Otefa | Work'
    return () => { document.title = 'Seif Otefa' }
  }, [])

  return (
    <>
      <h1 className="page-title">Work</h1>
      <ul className="rows">{experience.filter((x) => x.featured).map((x) => <Job key={x.org} x={x} />)}</ul>

      <h2 className="section-title">earlier</h2>
      <ul className="rows">{experience.filter((x) => !x.featured).map((x) => <Job key={x.org} x={x} />)}</ul>

      <p style={{ marginTop: 24 }}>Full details in the <Link to="/resume">résumé</Link>.</p>
    </>
  )
}
