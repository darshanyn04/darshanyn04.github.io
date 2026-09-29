import { profile } from '../data.js'
import { GitHubIcon, LinkedInIcon, InstagramIcon, ArtStationIcon, TwitterIcon, MailIcon } from './Icons.jsx'

export default function Socials() {
  const { socials, email } = profile
  const links = [
    socials.github && { href: socials.github, label: 'GitHub', Icon: GitHubIcon },
    socials.linkedin && { href: socials.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    socials.artstation && { href: socials.artstation, label: 'ArtStation', Icon: ArtStationIcon },
    socials.instagram &&{ href: socials.instagram, label: 'Instagram', Icon: InstagramIcon },
    socials.twitter &&{ href: socials.twitter, label: 'X / Twitter', Icon: TwitterIcon },
    email && { href: `mailto:${email}`, label: 'Email', Icon: MailIcon },
  ].filter(Boolean)

  return (
    <div className="socials">
      {links.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
          <Icon />
        </a>
      ))}
    </div>
  )
}
