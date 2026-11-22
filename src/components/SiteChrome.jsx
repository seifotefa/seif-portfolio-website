import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/site'
import { WebringLinks } from './WebringLinks'

export const SiteNav = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <header className="nav">
      <Link to="/" className="nav-name">seif otefa</Link>
      <nav className="nav-links" aria-label="Primary">
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>{l.label}</NavLink>
        ))}
      </nav>
    </header>
  )
}

export const SiteFooter = () => (
  <footer className="footer">
    <span className="footer-meta">© {new Date().getFullYear()} Seif Otefa</span>
    <WebringLinks variant="compact" />
  </footer>
)

// Inline organisation name with a small logo, used inside running text.
export const Org = ({ name, logo, href, to }) => {
  const pic = logo ? <img className="org-logo" src={logo} alt="" /> : null
  const inner = <>{pic}{name}</>
  if (to) return <Link className="org" to={to}>{inner}</Link>
  if (href) return <a className="org" href={href} target="_blank" rel="noreferrer">{inner}</a>
  return <span className="org">{inner}</span>
}
