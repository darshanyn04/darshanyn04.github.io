import { skills } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid--skills">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 80}>
            <TiltCard>
              <h3>{g.group}</h3>
              <div className="tags">
                {g.items.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
