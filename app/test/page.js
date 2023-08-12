'use client'
import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
import Overlay from '@/components/Overlay/Overlay'
import { Model } from '@/components/Model2/Model2'
import './styles.css'

function VideoText({ clicked, ...props }) {
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true }))
    useEffect(() => void (clicked && video.play()), [video, clicked])
    return (
        <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} {...props}>
            ducminhminh
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
        </Text>
    )
}

function Ground() {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
        <Reflector blur={[400, 100]} resolution={512} args={[20, 20]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            {(Material, props) => <Material color="#7d7d7d" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
        </Reflector>
    )
}

export default function App() {
    const [clicked, setClicked] = useState(false)
    const [ready, setReady] = useState(false)
    const store = { clicked, setClicked, ready, setReady }
    return (
        <>
            <section id='root'>
                <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 20 }}>
                    <color attach="background" args={['black']} />
                    <fog attach="fog" args={['black', 15, 20]} />
                    <Suspense fallback={null}>
                        <group position={[0, -1, 0]}>
                            <Model rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 1, 0.6]} scale={[0.1, 0.1, 0.1]} />
                            <VideoText {...store} position={[0, 1.3, -2]} />
                            <Ground />
                        </group>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[0, 10, 0]} intensity={0.3} />
                        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
                        <Intro start={ready} set={setReady} />
                    </Suspense>
                </Canvas>
                <Overlay {...store} />
            </section>
        </>
    )
}

function Intro({ start, set }) {
    const [vec] = useState(() => new THREE.Vector3())
    useEffect(() => setTimeout(() => set(true), 500), [])
    return useFrame((state) => {
        if (start) {
            state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
            state.camera.lookAt(0, 0, 0)
        }
    })
}
