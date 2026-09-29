import { profile } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

export default function About() {
  const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <Section id="about" title="About me">
      <div className="about">
        <Reveal className="about__text">
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
          {profile.location && <p className="muted">📍 {profile.location}</p>}
        </Reveal>
        <Reveal delay={150}>
          <TiltCard className="about__photo" max={14}>
            {profile.avatar ? <img src={profile.avatar} alt={profile.name} /> : <span>{initials}</span>}
          </TiltCard>
        </Reveal>
      </div>
    </Section>
  )
}
