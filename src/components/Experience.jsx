import { experience } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job, i) => (
          <li key={job.company + job.period} className="timeline__item">
            <Reveal delay={i * 100}>
              <div className="timeline__head">
                <h3>{job.role} <span className="accent">@ {job.company}</span></h3>
                <span className="mono muted">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
