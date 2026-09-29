import { useRef } from 'react'
import { AdditiveBlending, DoubleSide } from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles, Stars } from '@react-three/drei'
import { palette as c } from './palette.js'

const COILS = 10

function ArcReactor() {
  const coils = useRef()
  const core = useRef()
  const halo = useRef()
  const hudA = useRef()
  const hudB = useRef()
  const hudC = useRef()

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    coils.current.rotation.z += dt * 0.25
    hudA.current.rotation.z -= dt * 0.45
    hudB.current.rotation.z += dt * 0.2
    hudC.current.rotation.z -= dt * 0.1
    const pulse = 1 + Math.sin(t * 2.2) * 0.06
    core.current.scale.setScalar(pulse)
    halo.current.scale.setScalar(pulse * 1.05)
    halo.current.material.opacity = 0.16 + Math.sin(t * 2.2) * 0.05
  })

  return (
    <group>
      {/* Outer casing */}
      <mesh>
        <torusGeometry args={[1.4, 0.16, 32, 128]} />
        <meshStandardMaterial color={c.gold} metalness={0.95} roughness={0.22} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.68, 0.07, 24, 128]} />
        <meshStandardMaterial color={c.red} metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, -0.12]}>
        <circleGeometry args={[1.4, 64]} />
        <meshStandardMaterial color="#1a1212" metalness={0.8} roughness={0.5} />
      </mesh>

      {/* Copper coils */}
      <group ref={coils}>
        {Array.from({ length: COILS }, (_, i) => {
          const a = (i / COILS) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.cos(a) * 1.02, Math.sin(a) * 1.02, 0]} rotation={[0, 0, a]}>
              <boxGeometry args={[0.34, 0.2, 0.16]} />
              <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.3} emissive={c.arc} emissiveIntensity={0.25} />
            </mesh>
          )
        })}
      </group>

      {/* Glowing inner ring + core */}
      <mesh>
        <torusGeometry args={[0.72, 0.05, 16, 96]} />
        <meshBasicMaterial color={c.arc} toneMapped={false} />
      </mesh>
      <mesh ref={core}>
        <sphereGeometry args={[0.46, 48, 48]} />
        <meshBasicMaterial color="#d8f7ff" toneMapped={false} />
      </mesh>
      <mesh ref={halo}>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshBasicMaterial color={c.arc} transparent opacity={0.16} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
      <pointLight color={c.arc} intensity={30} distance={10} />

      {/* Rotating HUD arcs */}
      <mesh ref={hudA}>
        <ringGeometry args={[2.05, 2.08, 128, 1, 0, Math.PI * 1.35]} />
        <meshBasicMaterial color={c.arc} transparent opacity={0.7} side={DoubleSide} />
      </mesh>
      <mesh ref={hudB}>
        <ringGeometry args={[2.35, 2.37, 128, 1, 0, Math.PI * 0.7]} />
        <meshBasicMaterial color={c.gold} transparent opacity={0.6} side={DoubleSide} />
      </mesh>
      <group ref={hudC}>
        {Array.from({ length: 60 }, (_, i) => {
          const a = (i / 60) * Math.PI * 2
          const long = i % 5 === 0
          return (
            <mesh key={i} position={[Math.cos(a) * 2.7, Math.sin(a) * 2.7, 0]} rotation={[0, 0, a]}>
              <planeGeometry args={[long ? 0.16 : 0.07, 0.012]} />
              <meshBasicMaterial color={c.arc} transparent opacity={long ? 0.7 : 0.35} side={DoubleSide} />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}

function Reactor() {
  const { viewport } = useThree()
  // Sit on the right on wide screens, centred behind the text on narrow ones
  const x = viewport.width > 9 ? viewport.width / 4.2 : 0
  const scale = Math.min(0.95, viewport.width / 7)
  return (
    <group position={[x, 0, 0]} scale={scale} rotation={[-0.15, -0.35, 0]}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
        <ArcReactor />
      </Float>
    </group>
  )
}

// Gently moves the camera toward the pointer for a parallax feel
function Rig() {
  useFrame((state) => {
    const { camera, pointer } = state
    camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.04
    camera.position.y += (pointer.y * 0.6 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      dpr={[1, 2]}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 4]} intensity={2.4} color="#ffe2b0" />
      <pointLight position={[-5, -3, 2]} intensity={40} color={c.red} />
      <Reactor />
      <Sparkles count={60} scale={[14, 8, 6]} size={2.2} speed={0.3} color={c.gold} />
      <Sparkles count={40} scale={[14, 8, 6]} size={1.6} speed={0.5} color={c.arc} />
      <Stars radius={60} depth={40} count={1400} factor={3} fade speed={0.5} />
      <Rig />
    </Canvas>
  )
}
