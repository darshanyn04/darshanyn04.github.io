import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { MenuIcon } from './Icons.jsx'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'lab', label: 'Maker Lab' },
  { id: 'models', label: '3D' },
  { id: 'gallery', label: 'Photos' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 10)
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">{profile.name}<span>.</span></a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>{s.label}</a>
          ))}
        </nav>
        <div className="nav__actions">
          <button className="icon-btn nav__menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
    </header>
  )
}
