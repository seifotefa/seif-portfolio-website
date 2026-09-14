import { useState, useEffect } from 'react'
import { BottomBar } from '../BottomBar'
import fieldnoteFuji from '../../assets/fieldnote-fuji.jpg'
import fieldnoteNara from '../../assets/fieldnote-nara.jpg'
import fieldnoteIstanbul from '../../assets/fieldnote-istanbul.jpg'

const images = [
  { src: fieldnoteFuji, alt: 'Fujikawaguchiko, Japan — Mount Fuji and countryside', caption: 'fujikawaguchiko, japan' },
  { src: fieldnoteNara, alt: 'Nara, Japan — temple and heritage', caption: 'nara, japan' },
  { src: fieldnoteIstanbul, alt: 'Istanbul, Turkey — mosque, domes, and minarets', caption: 'istanbul, turkey' },
]

const outerImages = [
  {
    src: '/assets/memento-mori.png',
    alt: 'Memento mori print in a wooden frame',
    caption: 'memento mori',
  },
]

const filters = ['reading', 'video', 'photo']
const photoSections = ['outer', 'inner', 'travel']

const reading = [
  {
    name: 'notes from the underground',
    href: 'https://www.goodreads.com/book/show/22128791-notes-from-the-underground',
  },
  {
    name: 'the book of five rings',
    href: 'https://www.goodreads.com/book/show/125866818-the-book-of-five-rings',
  },
  {
    name: 'the checklist manifesto',
    href: 'https://www.goodreads.com/book/show/7823407-the-checklist-manifesto',
  },
]

const video = {
  name: 'building a company in stealth | travis kalanick with a16z',
  href: 'https://www.youtube.com/watch?v=z6gH_v0buUc',
}

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('photo')
  const [activePhotoSection, setActivePhotoSection] = useState('travel')

  useEffect(() => {
    document.title = 'Seif Otefa | Archive'
  }, [])

  return (
    <main className="min-h-screen px-5 pt-24 pb-32 md:px-8 md:pt-28">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-light text-[#111]">archive</h1>
        </header>

        <nav className="flex gap-6 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-sm uppercase tracking-wider font-mono-desc transition-colors ${
                activeFilter === f
                  ? 'text-[#111]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {f}
            </button>
          ))}
        </nav>

        {activeFilter === 'photo' && (
          <div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-8" aria-label="Photo collections">
              {photoSections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActivePhotoSection(section)}
                  className={`text-xs uppercase tracking-wider font-mono-desc transition-colors ${
                    activePhotoSection === section
                      ? 'text-[#111]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            {activePhotoSection === 'travel' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {images.map((item) => (
                  <figure key={item.src} className="m-0">
                    <img src={item.src} alt={item.alt} className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <figcaption className="mt-2 text-xs text-gray-500 font-mono-desc">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : activePhotoSection === 'outer' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {outerImages.map((item) => (
                  <figure key={item.src} className="m-0">
                    <img src={item.src} alt={item.alt} className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <figcaption className="mt-2 text-xs text-gray-500 font-mono-desc">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 font-mono-desc">
                {activePhotoSection === 'outer' ? 'outer images coming soon.' : 'inner images coming soon.'}
              </p>
            )}
          </div>
        )}

        {activeFilter === 'reading' && (
          <div className="space-y-3">
            {reading.map((book) => (
              <a
                key={book.name}
                href={book.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-[#111] hover:text-gray-500 transition-colors font-mono-desc"
              >
                {book.name}
              </a>
            ))}
          </div>
        )}

        {activeFilter === 'video' && (
          <a
            href={video.href}
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-[#111] hover:text-gray-500 transition-colors font-mono-desc"
          >
            {video.name}
          </a>
        )}
      </div>

      <BottomBar />
    </main>
  )
}
