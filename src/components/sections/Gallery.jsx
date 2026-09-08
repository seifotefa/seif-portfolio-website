import { useState, useEffect } from 'react'
import fieldnoteFuji from '../../assets/fieldnote-fuji.jpg'
import fieldnoteNara from '../../assets/fieldnote-nara.jpg'
import fieldnoteIstanbul from '../../assets/fieldnote-istanbul.jpg'

const images = [
  { src: fieldnoteFuji, alt: 'Fujikawaguchiko, Japan — Mount Fuji and countryside', caption: 'fujikawaguchiko, japan' },
  { src: fieldnoteNara, alt: 'Nara, Japan — temple and heritage', caption: 'nara, japan' },
  { src: fieldnoteIstanbul, alt: 'Istanbul, Turkey — mosque, domes, and minarets', caption: 'istanbul, turkey' },
]

const filters = ['writing', 'video', 'photo']

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('photo')

  useEffect(() => {
    document.title = 'Seif Otefa | Gallery'
  }, [])

  return (
    <main className="min-h-screen px-5 pt-24 pb-24 md:px-8 md:pt-28">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-light text-[#111]">gallery</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {images.map((item) => (
              <figure key={item.src} className="m-0">
                <img src={item.src} alt={item.alt} className="w-full aspect-[4/3] object-cover rounded-lg" />
                <figcaption className="mt-2 text-xs text-gray-500 font-mono-desc">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {activeFilter === 'writing' && (
          <p className="text-sm text-gray-400 font-mono-desc"></p>
        )}

        {activeFilter === 'video' && (
          <p className="text-sm text-gray-400 font-mono-desc"></p>
        )}
      </div>

    </main>
  )
}
