import { useEffect, useState } from 'react'
import { photos as placeholderPhotos, profile } from '../data.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { InstagramIcon } from './Icons.jsx'

// Every image in src/photos/ is bundled automatically; the file name becomes the caption
const files = import.meta.glob('../photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const captionFrom = (path) => {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim()
  return name ? name[0].toUpperCase() + name.slice(1) : ''
}

const folderPhotos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({ src, caption: captionFrom(path) }))

const photos = folderPhotos.length ? folderPhotos : placeholderPhotos

// Instagram only allows its /embed/ page inside an iframe
const instagramEmbed = profile.socials.instagram
  ? profile.socials.instagram.replace(/\/?$/, '/') + 'embed/'
  : ''

export default function Gallery() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Section id="gallery" title="Photography" intro="Moments from treks, rides and the streets, seen through my lens.">
      {instagramEmbed && (
        <Reveal className="instagram">
          <iframe
            src={instagramEmbed}
            title="Instagram photos"
            loading="lazy"
          />
        </Reveal>
      )}

      {/* Local photos from src/photos/ (placeholders are hidden when the Instagram feed is shown) */}
      <div className="gallery">
        {photos.filter((p) => p.src || !instagramEmbed).map((p, i) => (
          <Reveal key={p.src || i} delay={(i % 3) * 80}>
            <button
              className={`gallery__item ${p.src ? '' : `gallery__item--${i % 3}`}`}
              onClick={() => p.src && setOpen(i)}
              disabled={!p.src}
              aria-label={p.caption || 'Photo'}
            >
              {p.src
                ? <img src={p.src} alt={p.caption} loading="lazy" />
                : <span className="gallery__placeholder">📷</span>}
              {p.caption && <span className="gallery__caption">{p.caption}</span>}
            </button>
          </Reveal>
        ))}
      </div>

      {profile.socials.instagram && (
        <Reveal className="gallery__more">
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="btn">
            <InstagramIcon /> More on Instagram
          </a>
        </Reveal>
      )}

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-label={photos[open].caption}>
          <img src={photos[open].src} alt={photos[open].caption} />
          {photos[open].caption && <p>{photos[open].caption}</p>}
        </div>
      )}
    </Section>
  )
}
