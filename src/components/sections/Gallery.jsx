import { useState, useEffect } from 'react'
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

const filters = ['reading', 'video']
const photoSections = ['outer', 'inner', 'travel']

const reading = [
  {
    name: 'meditations — marcus aurelius',
    href: 'https://www.goodreads.com/book/show/662925.Meditations',
  },
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

const videos = [
  {
    name: 'building a company in stealth | travis kalanick with a16z',
    href: 'https://www.youtube.com/watch?v=z6gH_v0buUc',
  },
  {
    name: 'the psychology of sin | eternalised',
    href: 'https://www.youtube.com/watch?v=QX51rwMicWY',
  },
]

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('reading')
  const [activePhotoSection, setActivePhotoSection] = useState('travel')

  useEffect(() => {
    document.title = 'Seif Otefa | Archive'
    return () => { document.title = 'Seif Otefa' }
  }, [])

  const Tabs = ({ items, active, onChange, label }) => (
    <div className="filter" role="group" aria-label={label}>
      {items.map((f) => (
        <button key={f} type="button" aria-pressed={active === f} onClick={() => onChange(f)}>{f}</button>
      ))}
    </div>
  )

  const ExternalList = ({ items }) => (
    <ul className="rows">
      {items.map((item) => (
        <li key={item.href} className="row">
          <a href={item.href} target="_blank" rel="noreferrer" className="row-main">{item.name}</a>
        </li>
      ))}
    </ul>
  )

  const Photos = ({ items }) => (
    <div className="photos">
      {items.map((item) => (
        <figure key={item.src}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <figcaption className="meta">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  )

  return (
    <>
      <h1 className="page-title">Archive</h1>
      <Tabs items={filters} active={activeFilter} onChange={setActiveFilter} label="Archive sections" />

      {activeFilter === 'photo' && (
        <div>
          <Tabs items={photoSections} active={activePhotoSection} onChange={setActivePhotoSection} label="Photo collections" />
          {activePhotoSection === 'travel' && <Photos items={images} />}
          {activePhotoSection === 'outer' && <Photos items={outerImages} />}
          {activePhotoSection === 'inner' && <p className="meta">inner images coming soon.</p>}
        </div>
      )}

      {activeFilter === 'reading' && <ExternalList items={reading} />}
      {activeFilter === 'video' && <ExternalList items={videos} />}
    </>
  )
}
