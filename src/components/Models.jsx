import { lazy, useState } from 'react'
import { artstation } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Scene3D from './three/Scene3D.jsx'
import { ArtStationIcon, ExternalIcon } from './Icons.jsx'

const ModelViewer = lazy(() => import('./three/ModelViewer.jsx'))

const INITIAL = 9

export default function Models() {
  const [showAll, setShowAll] = useState(false)
  const { artworks, software, url } = artstation
  const visible = showAll ? artworks : artworks.slice(0, INITIAL)

  return (
    <Section id="models" title="3D Modelling">
      <Reveal className="models__intro">
        <div>
          <p className="section__intro">
            Game assets, vehicles, characters and architecture: {artworks.length} projects modelled,
            textured and rendered, showcased on ArtStation.
          </p>
          <div className="tags models__software">
            {software.map((s) => <span key={s} className="tag tag--mono">{s}</span>)}
          </div>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn--primary">
            <ArtStationIcon /> View on ArtStation
          </a>
        </div>
        <div className="models__viewer" aria-hidden="true">
          <Scene3D>
            <ModelViewer model={{ shape: 'rings' }} />
          </Scene3D>
        </div>
      </Reveal>

      <div className="artworks">
        {visible.map((a, i) => (
          <Reveal key={a.url} delay={(i % 3) * 80}>
            <TiltCard className="artwork" max={8}>
              <a href={a.url} target="_blank" rel="noreferrer" aria-label={`${a.title} on ArtStation`}>
                <div className="artwork__img">
                  <img src={a.cover} alt={a.title} loading="lazy" />
                  <span className="artwork__open"><ExternalIcon /></span>
                </div>
                <div className="artwork__body">
                  <h3>{a.title}</h3>
                  {a.description && <p>{a.description}</p>}
                  <span className="mono muted">{a.year}</span>
                </div>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {artworks.length > INITIAL && (
        <div className="artworks__more">
          <button className="btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show less' : `Show all ${artworks.length} projects`}
          </button>
        </div>
      )}
    </Section>
  )
}
