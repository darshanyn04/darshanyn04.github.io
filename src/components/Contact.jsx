import { profile } from '../data.js'
import Section from './Section.jsx'
import Socials from './Socials.jsx'

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="contact">
        <p>
          I'm always open to new opportunities, collaborations or just a friendly chat.
          My inbox is open — I'll do my best to get back to you.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary">Say hello</a>
        <Socials />
      </div>
    </Section>
  )
}
