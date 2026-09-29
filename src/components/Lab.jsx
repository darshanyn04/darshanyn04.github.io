import { hardwareProjects } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { ProjectCard } from './Projects.jsx'

export default function Lab() {
  return (
    <Section
      id="lab"
      title="Maker Lab"
      intro="Home automation builds where software meets hardware — powered by ESP32 microcontrollers and Raspberry Pi."
    >
      <div className="grid grid--projects">
        {hardwareProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <ProjectCard project={p} icon={p.icon} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
