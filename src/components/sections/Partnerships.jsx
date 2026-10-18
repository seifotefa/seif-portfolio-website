import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const socialLinks = [
  { label: 'instagram', href: 'https://www.instagram.com/seifoai/' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/seif-otefa/' },
  { label: 'x', href: 'https://x.com/0xseifo' },
  { label: 'github', href: 'https://github.com/seifotefa' },
]

const insights = [
  { value: '753,023', label: 'views' },
  { value: '465,470', label: 'viewers' },
  { value: '39,109', label: 'interactions' },
]

export const Partnerships = () => {
  useEffect(() => {
    document.title = 'Seif Otefa | Partnerships'
    return () => { document.title = 'Seif Otefa' }
  }, [])

  return (
    <main className="partnerships-main">
      <div className="partnerships-directory">
        <header className="partnerships-header">
          <Link to="/" className="partnerships-back">seif otefa</Link>
          <span>partnerships / @seifoai</span>
        </header>

        <section className="partnerships-hero" aria-labelledby="partnerships-title">
          <h1 id="partnerships-title">ai content,<br />from a builder&apos;s perspective.</h1>
          <p>I&apos;m Seif, an AI engineer and builder. I make content about the tools and ideas I work with, bringing a technical lens to stories people can actually use.</p>
          <div className="partnerships-actions">
            <a href="mailto:partnerships.seif@gmail.com?subject=Partnership%20inquiry">work with me</a>
            <a href="https://www.instagram.com/seifoai/" target="_blank" rel="noreferrer">see @seifoai</a>
          </div>
        </section>

        <section className="partnerships-section" aria-labelledby="reach-title">
          <div className="partnerships-section-heading">
            <h2 id="reach-title">reach</h2>
            <p>instagram insights · last 90 days</p>
          </div>
          <div className="partnerships-stats">
            {insights.map((item) => <div className="partnerships-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>)}
          </div>
          <p className="partnerships-caption">Figures are from the account insight screenshots below. They are snapshots, not live totals.</p>
        </section>

        <section className="partnerships-section" aria-labelledby="collaborations-title">
          <div className="partnerships-section-heading">
            <h2 id="collaborations-title">selected collaborations</h2>
          </div>
          <div className="partnerships-collaboration">
            <span className="partnerships-collaboration-name"><a href="https://backboard.io/" target="_blank" rel="noreferrer">backboard.io</a></span>
            <div>
              <p>Built with the team and shared the work through technical content.</p>
              <a href="https://www.instagram.com/reel/DaQXU6nOc3l/" target="_blank" rel="noreferrer">watch our collaborative R-CLI reel</a>
            </div>
          </div>
          <div className="partnerships-collaboration">
            <span className="partnerships-collaboration-name"><a href="https://wajo.ai/" target="_blank" rel="noreferrer">wajo ai</a></span>
            <p>Past collaboration.</p>
          </div>
        </section>

        <section className="partnerships-section" aria-labelledby="insights-title">
          <div className="partnerships-section-heading">
            <h2 id="insights-title">the numbers, in context</h2>
            <p>account screenshots</p>
          </div>
          <div className="partnerships-proof-grid">
            <figure>
              <a href="/assets/partnerships/instagram-insights-90-days.png" target="_blank" rel="noreferrer" aria-label="Open last 90 days Instagram insights screenshot at full size">
                <img src="/assets/partnerships/instagram-insights-90-days.png" alt="Instagram account insights for the last 90 days, showing 753,023 views and 39,109 interactions" loading="lazy" />
              </a>
              <figcaption>last 90 days · 753k views</figcaption>
            </figure>
            <figure>
              <a href="/assets/partnerships/instagram-insights-additional.png" target="_blank" rel="noreferrer" aria-label="Open additional Instagram insights screenshot at full size">
                <img src="/assets/partnerships/instagram-insights-additional.png" alt="Additional Instagram account insights screenshot showing 451,180 views and 24,319 interactions" loading="lazy" />
              </a>
              <figcaption>additional account snapshot · 451k views</figcaption>
            </figure>
          </div>
        </section>

        <section className="partnerships-section partnerships-contact" aria-labelledby="contact-title">
          <div className="partnerships-section-heading">
            <h2 id="contact-title">let&apos;s make something useful.</h2>
          </div>
          <p>For partnerships, product demos, or technical storytelling, get in touch.</p>
          <a className="partnerships-email" href="mailto:partnerships.seif@gmail.com?subject=Partnership%20inquiry">partnerships.seif@gmail.com</a>
        </section>

        <footer className="partnerships-footer">
          <Link to="/">home</Link>
          <nav aria-label="Social profiles">
            {socialLinks.map(({ label, href }) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>)}
          </nav>
        </footer>
      </div>
    </main>
  )
}
