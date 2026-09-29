import { lazy, useEffect, useState } from 'react'
import { profile, roles, stats } from '../data.js'
import Socials from './Socials.jsx'
import Scene3D from './three/Scene3D.jsx'

// Loaded separately so the text appears before three.js finishes downloading
const HeroScene = lazy(() => import('./three/HeroScene.jsx'))

function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? erase : type
    if (!deleting && text === word) delay = hold

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, type, erase, hold])

  return text
}

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section id="top" className="hero">
      <div className="hero__canvas" aria-hidden="true">
        <Scene3D>
          <HeroScene />
        </Scene3D>
      </div>
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">&gt; System online. Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2 className="hero__role">
            {role}<span className="caret" />
          </h2>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">View my work</a>
            {profile.resumeUrl
              ? <a href={profile.resumeUrl} className="btn" target="_blank" rel="noreferrer">Resume</a>
              : <a href="#contact" className="btn">Get in touch</a>}
          </div>
          <Socials />
        </div>
      </div>
      <div className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down"><span /></a>
    </section>
  )
}
