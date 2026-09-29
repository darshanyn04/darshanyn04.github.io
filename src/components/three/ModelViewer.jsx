import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds, Center, ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { palette } from './palette.js'

function GLBModel({ src }) {
  const { scene } = useGLTF(src)
  return <primitive object={scene} />
}

function Knot({ colors }) {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.34, 220, 32]} />
      <meshStandardMaterial color={colors.red} metalness={0.7} roughness={0.2} />
    </mesh>
  )
}

function Crystal({ colors }) {
  return (
    <group>
      <mesh scale={[1, 1.6, 1]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={colors.red} flatShading metalness={0.3} roughness={0.25} />
      </mesh>
      <mesh scale={[1.02, 1.63, 1.02]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={colors.gold} wireframe />
      </mesh>
    </group>
  )
}

function Gyroscope({ colors }) {
  const refs = [useRef(), useRef(), useRef()]
  useFrame((_, dt) => {
    refs[0].current.rotation.x += dt * 0.8
    refs[1].current.rotation.y += dt * 0.6
    refs[2].current.rotation.z += dt * 0.4
  })
  return (
    <group>
      {[1.4, 1.1, 0.8].map((r, i) => (
        <mesh key={r} ref={refs[i]}>
          <torusGeometry args={[r, 0.07, 24, 120]} />
          <meshStandardMaterial color={i === 1 ? colors.gold : colors.red} metalness={0.85} roughness={0.22} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color={colors.arc} toneMapped={false} />
      </mesh>
    </group>
  )
}

const shapes = { knot: Knot, crystal: Crystal, rings: Gyroscope }

export default function ModelViewer({ model }) {
  const colors = palette
  const Shape = shapes[model.shape] || Knot

  return (
    <Canvas camera={{ position: [0, 0.6, 5.5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={2.2} />
      <pointLight position={[-4, -2, -3]} intensity={40} color={colors.arc} />
      <pointLight position={[0, 0, 0]} intensity={6} color={colors.arc} />
      <Suspense fallback={null}>
        {model.src ? (
          <Bounds fit clip observe margin={1.2}>
            <Center><GLBModel src={model.src} /></Center>
          </Bounds>
        ) : (
          <Shape colors={colors} />
        )}
      </Suspense>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.4} blur={2.5} far={4} />
      <OrbitControls autoRotate autoRotateSpeed={1.5} enablePan={false} minDistance={3} maxDistance={9} />
    </Canvas>
  )
}
