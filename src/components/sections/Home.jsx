import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { socials, entries, moreLinks, previousWork } from '../../data/site'
import { Org } from '../SiteChrome'

const ext = { target: '_blank', rel: 'noreferrer' }
const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const ids = entries.map((e) => slug(e.title))

// Tracks which card is in view, for the side index.
function useActiveCard() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-35% 0px -55% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}

function Card({ e }) {
  return (
    <article id={slug(e.title)} className={`card card-${e.layout || 'half'}`}>
      <Link to={e.to} className="card-link">
        <div className={`card-img ${e.logoCard ? 'card-img-logo' : ''}`}><img src={e.img} alt="" loading="lazy" style={e.pos ? { objectPosition: e.pos } : undefined} />{e.badge && <span className="card-badge"><img src={e.badge} alt="" /></span>}</div>
        <div className="card-text">
          <p className="meta card-meta">{e.date} · {e.kind.toLowerCase()}{e.award && ` · ${e.award.toLowerCase()}`}</p>
          <h2 className="card-title">{e.title}</h2>
          <p className="card-sum">{e.summary}</p>
        </div>
      </Link>
      {e.also && <p className="card-also">also: <Link to={e.also.to}>{e.also.title}</Link></p>}
    </article>
  )
}

export const Home = () => {
  const active = useActiveCard()

  return (
    <>
      <section className="intro" aria-label="Introduction">
        <h1 className="page-title">Seif Otefa <span className="accent tagline">engineer and creator</span></h1>
        <p>
          I&apos;m Seif, a third-year Computer Science student at{' '}
          <Org name="McMaster" logo="/assets/logos/mcmaster.png" href="https://future.mcmaster.ca/programs/computer-science/" />.
          Currently Technical Staff at{' '}
          <Org name="Backboard" logo="/assets/logos/backboard_io_logo.png" href="https://backboard.io" />, and an incoming
          Quality Engineer at <Org name="TD" logo="/assets/logos/td.svg" />.
        </p>
        <p>
          I&apos;ve taught CS106A at <Org name="Stanford" logo="/assets/logos/stanford.png" to="/blog/cip2025" />, won 6 hackathons,
          and built projects including <a href="https://gta-the-6.onrender.com/" {...ext}>GTA: THE 6</a>,{' '}
          <a href="https://github.com/seifotefa/deltahacks-12" {...ext}>Frontline</a> and{' '}
          <a href="https://www.notipply.com/" {...ext}>Notipply</a>.
        </p>
        <p>
          Outside engineering, I write about technology, startups and culture, and create{' '}
          <a href="https://www.instagram.com/seifoai/" {...ext}>AI-focused content</a>.
        </p>
        <details className="previously">
          <summary>previously</summary>
          <div className="previously-body">
            <p>
              Previously, I worked at{' '}
              {previousWork.map((w, i) => (
                <span key={w.name}>
                  <Org name={w.name} logo={w.logo} to={w.to} /> as {w.role}
                  {i < previousWork.length - 2 ? ', ' : i === previousWork.length - 2 ? ', and ' : '.'}
                </span>
              ))}
            </p>
            <p>
              I&apos;ve also built{' '}
              {moreLinks.map((l, i) => (
                <span key={l.name}>
                  {l.to ? <Link to={l.to}>{l.name}</Link> : <a href={l.href} {...ext}>{l.name}</a>}
                  {i < moreLinks.length - 2 ? ', ' : i === moreLinks.length - 2 ? ' and ' : '.'}
                </span>
              ))}
            </p>
          </div>
        </details>

        <ul className="socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} {...(s.href.startsWith('mailto:') ? {} : ext)}>{s.label}</a>
            </li>
          ))}
        </ul>

        <figure className="photo">
          <img src="/assets/toronto-dither.png" alt="Toronto street with the CN Tower in the distance" width="320" height="165" />
        </figure>

        <a href="#feed" className="scroll-cue" aria-label="Scroll to projects and writing">↓</a>
      </section>

      <section id="feed" className="feed" aria-label="Work, projects and writing">
        <nav className="feed-index" aria-label="On this page">
          <ul>
            {entries.map((e) => {
              const id = slug(e.title)
              return <li key={id}><a href={`#${id}`} className={active === id ? 'on' : undefined}>{e.title}</a></li>
            })}
          </ul>
        </nav>

        {entries.map((e) => <Card key={e.title} e={e} />)}

      </section>
    </>
  )
}
