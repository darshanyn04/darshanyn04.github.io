import { Component, Suspense } from 'react'

// Keeps the rest of the page working if WebGL is unavailable
class WebGLBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

export default function Scene3D({ children, fallback = null }) {
  return (
    <WebGLBoundary fallback={fallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </WebGLBoundary>
  )
}
