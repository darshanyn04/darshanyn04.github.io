import { projects } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { GitHubIcon, ExternalIcon } from './Icons.jsx'

export function ProjectCard({ project, icon }) {
  return (
    <TiltCard className="project">
      <div className="project__head">
        <h3>{icon && <span className="project__icon">{icon}</span>}{project.title}</h3>
        <div className="project__links">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label="Source code"><GitHubIcon /></a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo"><ExternalIcon /></a>}
        </div>
      </div>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((t) => <span key={t} className="tag tag--mono">{t}</span>)}
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Software projects">
      <div className="grid grid--projects">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
