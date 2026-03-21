import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { WebringLinks } from '../WebringLinks'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'

const work = [
  { company: 'backboard', companyLink: 'https://backboard.io', role: "founding intern (summer '26)", date: "summer '26", description: 'shipping open source AI infra tooling as part of the founding intern cohort.' },
  { company: 'ludera', companyLink: null, role: 'software engineer intern', date: "winter '26", description: 'built an AI flashcard pipeline and semantic search for an RPG that uses your notes to power the experience.' },
  { company: 'mova realities', companyLink: 'https://www.movarts.com/', role: 'product manager intern', date: "spring '25", description: 'led requirements analysis, system architecture, and phased roadmap for an AI-powered platform MVP.' },
]

const projects = [
  { name: 'frontline', description: 'triage dashboard: camera vitals + gemini vision + AI first-aid.', href: 'https://github.com/seifotefa/deltahacks-12', articleLink: '/blog/frontline', badge: 'best use of presage SDK @ deltahacks12', winner: true },
  { name: 'notipply', description: 'job alerts via text when new positions match your preferences.', href: 'https://www.notipply.com/', articleLink: null, badge: null, winner: false },
  { name: 'mcmaster webring', description: 'network of founders, builders and engineers at mac.', href: 'https://www.mcmasterwebring.xyz/', articleLink: null, badge: null, winner: false },
  { name: 'project phoenix (MEC 2025)', description: '1st place maceng consulting; future of healthcare in canada.', href: null, articleLink: '/blog/mec2025', badge: 'maceng competition 2025 winner', winner: true },
  { name: 'jinsa', description: 'blockchain platform for trackable, verifiable products.', href: 'https://usejinsa.co', articleLink: '/blog/jinsa', badge: 'spurhacks accelerator', winner: true },
  { name: 'resumock', description: 'behavioral interview simulator from your resume + gemini.', href: 'https://github.com/seifotefa/deltahackslite', articleLink: '/blog/resumock', badge: 'deltahacks lite 2025', winner: false },
  { name: 'spark and prepper', description: 'study guides, mock exam, flashcards, AI tutor from notes.', href: 'https://github.com/seifotefa/sparkandprepper', articleLink: '/blog/sparkandprepper', badge: 'gdsc hacks 2025', winner: false },
]

const highlightedArticles = [
  { title: 'winning the mcmaster engineer competition', date: "fall '25", link: '/blog/mec2025', description: 'first place consulting solution focused on the future of healthcare in canada.' },
  { title: "teaching stanford's cs106A", date: "summer '25", link: '/blog/cip2025', description: 'teaching python fundamentals to students as a section leader.' },
  { title: 'winning at deltahacks12 using presage technologies', date: "winter '26", link: '/blog/frontline', description: 'building frontline, an ai-powered emergency triage with camera vitals and real-time injury detection.' },
]

export const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="max-w-2xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-16">
        {/* Header: name + integrated (Mac, Accenture, Stanford) */}
        <header className="mb-8">
          <Link
            to="/about"
            className="font-satoshi text-xl md:text-2xl text-[#111] hover:opacity-80 inline-flex items-center gap-1.5"
          >
            seif otefa
            <FiArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
          </Link>
          <p className="mt-1.5 text-sm md:text-base text-gray-600 leading-snug font-mono-desc">
            computer science @ <a href="https://future.mcmaster.ca/programs/computer-science/" target="_blank" rel="noreferrer" className="underline hover:text-[#111]">mcmaster</a>. accenture student leader. ta'd @ <a href="https://codeinplace.stanford.edu/" target="_blank" rel="noreferrer" className="underline hover:text-[#111]">stanford code in place</a>. i operate with high agency at the intersection of tech and innovation.
          </p>
        </header>

        {/* Quote – small subsection */}
        <div className="mb-10 md:mb-12 pl-4 border-l-2 border-gray-200">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-mono-desc" style={{ fontWeight: 300 }}>
            knowledge without action is <em>wastefulness</em> and action without knowledge is <em>foolishness</em>.
          </p>
        </div>

        {/* Work – compact rows, hover to reveal description */}
        <section className="mb-10">
          <h2 className="text-2xl font-light text-[#111] mb-4 font-satoshi">work</h2>
          <div className="space-y-0.5">
            {work.map((w, i) => (
              <div key={i} className="group">
                <div className="flex items-baseline justify-between gap-2 text-sm py-2 px-2 -mx-2 cursor-default">
                  <span className="min-w-0">
                    {w.companyLink ? (
                      <a href={w.companyLink} target="_blank" rel="noreferrer" className="font-satoshi font-medium text-[#111] hover:underline inline-flex items-center gap-0.5">
                        {w.company}
                        <FiExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                      </a>
                    ) : (
                      <span className="font-satoshi font-medium text-[#111]">{w.company}</span>
                    )}
                    <span className="text-gray-500 ml-1 font-satoshi">{w.role}</span>
                  </span>
                  <span className="text-gray-400 text-xs shrink-0 font-mono-desc">{w.date}</span>
                </div>
                <div className="max-h-0 overflow-hidden transition-[max-height] duration-200 ease-out group-hover:max-h-24">
                  <p className="text-xs text-gray-600 leading-relaxed px-2 pb-1 pt-0 font-mono-desc font-light">
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects – no boxes, description + Article inline */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-[#111] mb-4 font-satoshi">projects</h2>
          <div className="space-y-2.5">
            {projects.map((p, i) => (
              <div key={i} className="text-sm">
                <div className="flex flex-col mobile:flex-row mobile:items-start mobile:justify-between gap-1 mobile:gap-2">
                  <div className="min-w-0">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noreferrer" className="font-satoshi font-medium text-[#111] hover:opacity-80 inline-flex items-center gap-0.5">
                        {p.name}
                        <FiExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                      </a>
                    ) : (
                      <span className="font-satoshi font-medium text-[#111]">{p.name}</span>
                    )}
                  </div>
                  {p.badge && (
                    <span className={`text-xs px-1.5 py-0.5 rounded border font-mono-desc self-start mobile:self-auto max-w-full break-words whitespace-normal ${p.winner ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                      {p.winner && '🏆 '}{p.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                  <span className="text-xs text-gray-600 leading-relaxed font-mono-desc font-light">{p.description}</span>
                  {p.articleLink && (
                    <Link to={p.articleLink} className="text-xs text-gray-500 hover:text-[#111] underline shrink-0">article</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#111] mt-3 font-mono-desc">
            view all on github <FiExternalLink className="w-3 h-3" />
          </a>
        </section>

        {/* highlighted articles */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-light text-[#111] font-satoshi">highlighted articles</h2>
            <Link to="/blog" className="text-xs text-gray-500 hover:text-[#111] underline font-mono-desc">view blog</Link>
          </div>
          <div className="space-y-2.5">
            {highlightedArticles.map((post, i) => (
              <div key={i} className="text-sm">
                <div className="flex items-baseline justify-between gap-2">
                  <Link to={post.link} className="font-satoshi font-medium text-[#111] hover:opacity-80 inline-flex items-center gap-0.5">
                    {post.title}
                    <FiArrowRight className="w-3 h-3 opacity-60 shrink-0" />
                  </Link>
                  <span className="text-gray-400 text-xs shrink-0 font-mono-desc">{post.date}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-mono-desc font-light mt-0.5">{post.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer: mono font; name link without underlined space */}
        <footer className="pt-6 border-t border-gray-200 font-mono-desc">
          <div className="grid grid-cols-1 mobile:grid-cols-3 gap-4 items-center text-sm text-gray-600">
            <div className="flex items-center gap-1.5 justify-center mobile:justify-start order-2 mobile:order-1">
              <Link to="/about" className="underline hover:text-[#111]">about</Link>
              <span className="text-gray-300">|</span>
              <Link to="/links" className="underline hover:text-[#111]">links</Link>
              <span className="text-gray-300">|</span>
              <Link to="/blog" className="underline hover:text-[#111]">blog</Link>
            </div>
            <div className="flex justify-center order-1 mobile:order-2">
              <WebringLinks variant="footer" />
            </div>
            <div className="flex items-center justify-center mobile:justify-end gap-4 text-gray-500 order-3">
              <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="hover:text-[#111]"><FaGithub className="w-4 h-4" /></a>
              <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="hover:text-[#111]"><FaLinkedin className="w-4 h-4" /></a>
              <a href="https://x.com/0xseifo" target="_blank" rel="noreferrer" className="hover:text-[#111]"><FaXTwitter className="w-4 h-4" /></a>
              <Link to="/contact" className="hover:text-[#111]" aria-label="Contact"><FaEnvelope className="w-4 h-4" /></Link>
              <a href="https://seifotefa.com/resume" target="_blank" rel="noreferrer" className="hover:text-[#111]" aria-label="Resume"><FaRegFileAlt className="w-4 h-4" /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
