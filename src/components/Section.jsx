import Reveal from './Reveal.jsx'

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
