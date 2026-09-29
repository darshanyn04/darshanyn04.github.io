import { useEffect, useRef, useState } from 'react'

// Fades and lifts its children into view the first time they scroll on screen
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (visible) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
