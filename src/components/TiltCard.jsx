import { useRef } from 'react'

// Card that tilts in 3D toward the cursor, with a moving glare highlight
export default function TiltCard({ children, className = '', max = 10 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * max}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * max}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }

  const onLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} className={`card tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </article>
  )
}
