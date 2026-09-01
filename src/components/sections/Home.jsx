import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { WebringLinks } from '../WebringLinks'
import { FiExternalLink, FiArrowRight, FiX, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import fieldnoteFuji from '../../assets/fieldnote-fuji.jpg'
import fieldnoteNara from '../../assets/fieldnote-nara.jpg'
import fieldnoteIstanbul from '../../assets/fieldnote-istanbul.jpg'

const galleryImages = [
  { src: fieldnoteFuji, alt: 'Fujikawaguchiko, Japan — mount fuji, countryside, calm' },
  { src: fieldnoteNara, alt: 'Nara, Japan — temple, heritage, serenity' },
  { src: fieldnoteIstanbul, alt: 'Istanbul, Turkey — mosque, domes, minarets' },
]

function Gallery({ onClose }) {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
  const next = () => setIndex((i) => (i + 1) % galleryImages.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/80 font-mono-desc">field notes</span>
          <button onClick={onClose} className="text-white/70 hover:text-white cursor-pointer" aria-label="Close gallery">
            <FiX className="w-5 h-5" />
          </button>
        </div>
        <img
          src={galleryImages[index].src}
          alt={galleryImages[index].alt}
          className="w-full max-h-[75vh] object-contain rounded-lg"
        />
        <div className="flex items-center justify-center gap-6 mt-3 text-white/70 font-mono-desc text-xs">
          <button onClick={prev} className="hover:text-white cursor-pointer" aria-label="Previous">
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <span>{index + 1} / {galleryImages.length}</span>
          <button onClick={next} className="hover:text-white cursor-pointer" aria-label="Next">
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

/** Present roles always visible; previous ones behind the toggle. */
const workNow = [
  {
    company: 'backboard', companyLink: 'https://backboard.io',
    roles: [
      { role: 'member of technical staff', date: '2026 –', description: 'continuing to lead the ambassador programme that i built (part-time).' },
      { role: 'member of technical staff (intern)', date: '2026', description: 'built backboard studio, backboard\'s desktop app for orchestrating and managing AI agents. also built the ambassador programme.' },
    ],
  },
  { company: 'mcmaster', companyLink: null, role: 'teaching assistant', date: '2026 –', description: 'TA for compsci 2me3 (software development) — running tutorials and supporting students through software design fundamentals.', articleLink: null },
  { company: 'obotz robotics', companyLink: null, role: 'robotics instructor', date: '2025 –', description: 'teaching kids robotics, electronics, and programming fundamentals.', articleLink: null },
]

const workBefore = [
  { company: 'ludera', companyLink: null, role: 'software engineer intern', date: '2026', description: 'built an AI flashcard pipeline and semantic search for an RPG that uses your notes to power the experience.', articleLink: null },
  { company: 'mova realities', companyLink: 'https://www.movarts.com/', role: 'product manager intern', date: '2025', description: 'led requirements analysis, system architecture, and phased roadmap for an AI-powered platform MVP.', articleLink: null },
]

/** Highlighted projects always visible; the rest behind "show more". */
const projectsHighlighted = [
  { name: 'frontline', description: '🏆 triage dashboard: camera vitals + gemini vision + AI first-aid.', href: 'https://github.com/seifotefa/deltahacks-12', articleLink: '/blog/frontline' },
  { name: 'mcmaster webring', description: 'network of founders, builders and engineers at mac.', href: 'https://www.mcmasterwebring.xyz/' },
  { name: 'mec consulting', description: '🏆 won the mcmaster engineering competition, now leading it.', href: '/blog/mec2025', internal: true },
]

const projectsMore = [
  { name: 'notipply', description: 'job alerts via text when new positions match your preferences.', href: 'https://www.notipply.com/' },
  { name: 'jinsa', description: '🏆 blockchain platform for trackable, verifiable products.', href: 'https://usejinsa.co', articleLink: '/blog/jinsa' },
  { name: 'resumock', description: 'behavioral interview simulator from your resume + gemini.', href: 'https://github.com/seifotefa/deltahackslite', articleLink: '/blog/resumock' },
  { name: 'spark and prepper', description: 'study guides, mock exam, flashcards, AI tutor from notes.', href: 'https://github.com/seifotefa/sparkandprepper', articleLink: '/blog/sparkandprepper' },
]

const highlightedArticles = [
  { title: 'lessons from joining an early stage startup', date: "summer '26", link: '/blog/startup-lessons', description: 'ambiguity, structure, and agency — what my first month at backboard.io taught me.' },
  { title: 'OEC 2026 — carleton', date: "winter '26", link: '/blog/oec2026', description: 'representing mcmaster at the ontario engineering competition in ottawa.' },
  { title: "teaching stanford's cs106A", date: "summer '25", link: '/blog/cip2025', description: 'teaching python fundamentals to students as a section leader.' },
]

function ExperienceRows({ items }) {
  return (
    <div className="space-y-0.5">
      {items.map((w, i) => (
        w.roles ? (
          /* LinkedIn-style: one company, stacked roles flowing into each other */
          <div key={i} className="py-0.5">
            <div className="text-sm px-2 -mx-2">
              {w.companyLink ? (
                <a href={w.companyLink} target="_blank" rel="noreferrer" className="hl-quiet font-[500] text-[#111] inline-flex items-center gap-0.5">
                  {w.company}
                  <FiExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>
              ) : (
                <span className="font-[500] text-[#111]">{w.company}</span>
              )}
            </div>
            <div className="ml-1.5 pl-3 border-l border-gray-200">
              {w.roles.map((r, j) => (
                <div key={j} className="group">
                  <div className="flex items-baseline justify-between gap-2 text-sm py-0.5 cursor-default">
                    <span className="text-gray-500 min-w-0">{r.role}</span>
                    <span className="text-gray-400 text-xs shrink-0 font-mono-desc">{r.date}</span>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-[max-height] duration-200 ease-out group-hover:max-h-32">
                    <p className="text-xs text-gray-600 leading-relaxed pb-1 pt-0 font-mono-desc font-light">
                      {r.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
        <div key={i} className="group">
          <div className="flex items-baseline justify-between gap-2 text-sm py-0.5 px-2 -mx-2 cursor-default">
            <span className="min-w-0">
              {w.companyLink ? (
                <a href={w.companyLink} target="_blank" rel="noreferrer" className="hl-quiet font-[500] text-[#111] inline-flex items-center gap-0.5">
                  {w.company}
                  <FiExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>
              ) : (
                <span className="font-[500] text-[#111]">{w.company}</span>
              )}
              <span className="text-gray-500 ml-1">{w.role}</span>
            </span>
            <span className="text-gray-400 text-xs shrink-0 font-mono-desc">{w.date}</span>
          </div>
          <div className="max-h-0 overflow-hidden transition-[max-height] duration-200 ease-out group-hover:max-h-32">
            <p className="text-xs text-gray-600 leading-relaxed px-2 pb-1 pt-0 font-mono-desc font-light">
              {w.description}
              {w.articleLink && (
                <>
                  {' '}
                  <Link to={w.articleLink} className="hl text-gray-500">article</Link>
                </>
              )}
            </p>
          </div>
        </div>
        )
      ))}
    </div>
  )
}

function ProjectRow({ p }) {
  return (
    <div className="text-sm leading-relaxed">
      {p.internal ? (
        <Link to={p.href} className="hl-quiet font-[500] text-[#111] whitespace-nowrap">
          {p.name}
        </Link>
      ) : (
        <a href={p.href} target="_blank" rel="noreferrer" className="hl-quiet font-[500] text-[#111] whitespace-nowrap">
          {p.name}
          <FiExternalLink className="w-3 h-3 opacity-60 inline ml-0.5 align-[-1px]" />
        </a>
      )}{' '}
      <span className="text-xs text-gray-600 font-mono-desc font-light">
        {p.description}
        {p.articleLink && (
          <>
            {' '}
            <Link to={p.articleLink} className="hl text-gray-400">article</Link>
          </>
        )}
      </span>
    </div>
  )
}

export const Home = () => {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [showPrevWork, setShowPrevWork] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  return (
    <div className="min-h-screen text-[#111] py-7 flex flex-col justify-center">
      {galleryOpen && <Gallery onClose={() => setGalleryOpen(false)} />}
      <div className="max-w-2xl mx-auto rounded-2xl px-5 md:px-8 pt-6 md:pt-8 pb-8 bg-white/60">
        {/* Header */}
        <header className="mb-6">
          <button
            onClick={() => setGalleryOpen(true)}
            className="font-[600] text-base md:text-lg text-[#111] hover:opacity-80 inline-flex items-center gap-1.5 bg-transparent border-0 p-0 cursor-pointer"
          >
            seif otefa
            <FiArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
          </button>
          <div className="mt-2 space-y-2 text-sm text-gray-600 leading-normal font-mono-desc">
            <p>
              third-year cs @ <a href="https://future.mcmaster.ca/programs/computer-science/" target="_blank" rel="noreferrer" className="hl">mcmaster</a>. member of technical staff @ <a href="https://backboard.io" target="_blank" rel="noreferrer" className="hl">backboard.io</a>. building <a href="https://notchii.xyz" target="_blank" rel="noreferrer" className="hl">notchii</a> and <a href="https://www.notipply.com/" target="_blank" rel="noreferrer" className="hl">notipply</a>.
            </p>
            <p>
              interested in ai, developer tools, and software design — and how tech intersects with education, finance, and fun. off the clock: soccer, travel, and the gym. reach me on <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="hl">linkedin</a> or by <a href="mailto:seifotefa@gmail.com" className="hl">email</a>.
            </p>
          </div>
        </header>

        {/* work – single flat list, arlan.me-style */}
        <section className="mb-7">
          <h2 className="text-sm text-gray-400 mb-2 font-mono-desc">work</h2>
          <ExperienceRows items={workNow} />
          {showPrevWork && <ExperienceRows items={workBefore} />}
          <button
            onClick={() => setShowPrevWork((v) => !v)}
            className="hl-quiet inline-flex items-center gap-1 text-xs text-gray-400 mt-1.5 font-mono-desc bg-transparent border-0 p-0 cursor-pointer"
          >
            previously
            <FiChevronDown className={`w-3 h-3 transition-transform ${showPrevWork ? 'rotate-180' : ''}`} />
          </button>
        </section>

        {/* projects */}
        <section className="mb-7">
          <h2 className="text-sm text-gray-400 mb-2 font-mono-desc">projects</h2>
          <div className="space-y-1.5">
            {projectsHighlighted.map((p, i) => (
              <ProjectRow key={i} p={p} />
            ))}
            {showAllProjects && projectsMore.map((p, i) => (
              <ProjectRow key={`m${i}`} p={p} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-1.5">
            <button
              onClick={() => setShowAllProjects((v) => !v)}
              className="hl-quiet inline-flex items-center gap-1 text-xs text-gray-400 font-mono-desc bg-transparent border-0 p-0 cursor-pointer"
            >
              {showAllProjects ? 'show less' : 'show more'}
              <FiChevronDown className={`w-3 h-3 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
            </button>
            {showAllProjects && (
              <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="hl-quiet inline-flex items-center gap-1.5 text-xs text-gray-500 font-mono-desc">
                more on <FaGithub className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </section>

        {/* writing */}
        <section className="mb-7">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm text-gray-400 font-mono-desc">writing</h2>
            <Link to="/blog" className="hl text-xs text-gray-500 font-mono-desc">view blog</Link>
          </div>
          <div className="space-y-1.5">
            {highlightedArticles.map((post, i) => (
              <div key={i} className="text-sm">
                <div className="flex items-baseline justify-between gap-2">
                  <Link to={post.link} className="font-[500] text-[#111] hover:opacity-80 inline-flex items-center gap-0.5">
                    {post.title}
                    <FiArrowRight className="w-3 h-3 opacity-60 shrink-0" />
                  </Link>
                  <span className="text-gray-400 text-xs shrink-0 font-mono-desc">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <div className="mb-6">
          <div className="pl-3 border-l-2 border-gray-200">
            <p className="text-xs text-gray-500 leading-relaxed font-mono-desc" style={{ fontWeight: 300 }}>
              knowledge without action is <em>wastefulness</em> and action without knowledge is <em>foolishness</em>.
            </p>
          </div>
        </div>

        {/* Footer: mono font; name link without underlined space */}
        <footer className="pt-6 border-t border-gray-200 font-mono-desc">
          <div className="grid grid-cols-1 mobile:grid-cols-3 gap-4 items-center text-sm text-gray-600">
            <div className="flex items-center gap-1.5 justify-center mobile:justify-start order-2 mobile:order-1">
              <Link to="/links" className="hl">links</Link>
              <span className="text-gray-300">|</span>
              <Link to="/blog" className="hl">blog</Link>
            </div>
            <div className="flex justify-center order-1 mobile:order-2">
              <WebringLinks variant="footer" />
            </div>
            <div className="flex items-center justify-center mobile:justify-end gap-3 text-gray-500 order-3">
              <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="hover:text-[#111]"><FaGithub className="w-4 h-4" /></a>
              <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="hover:text-[#111]"><FaLinkedin className="w-4 h-4" /></a>
              <a href="https://x.com/0xseifo" target="_blank" rel="noreferrer" className="hover:text-[#111]"><FaXTwitter className="w-4 h-4" /></a>
              <a href="mailto:seifotefa@gmail.com" className="hover:text-[#111]" aria-label="Email"><FaEnvelope className="w-4 h-4" /></a>
              <a href="https://seifotefa.com/resume" target="_blank" rel="noreferrer" className="hover:text-[#111]" aria-label="Resume"><FaRegFileAlt className="w-4 h-4" /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
