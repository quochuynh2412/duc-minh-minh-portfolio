'use client'
import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
import Overlay from '@/components/Overlay/Overlay'
import { Model } from '@/components/Model2/Model2'
import { Cloudinary } from '@cloudinary/url-gen'
import { crop } from "@cloudinary/url-gen/actions/resize";
import './styles.css'
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducminhminh'
    }

});
function VideoText({ clicked, ...props }) {
    const vidUrl = cld.video("great_minds_think_alike__fashion_film_720p_g9jory").resize(crop().width(1080).aspectRatio(4.7)).setAssetType('video').delivery('q_auto').format('auto').toURL();
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: vidUrl, crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => {
        void (clicked && video.play());
        return;
    }, [video, clicked])
    return (
        <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} {...props}>
            ducmvx
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map"
                    args={[video]}
                    wrapT={THREE.RepeatWrapping}
                    wrapS={THREE.RepeatWrapping}
                    encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
        </Text>
    )
}

function Ground() {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
        <Reflector blur={[400, 100]} resolution={512} args={[20, 20]} mirror={0.9} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            {(Material, props) => <Material color="#7d7d7d" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
        </Reflector>
    )
}

function Intro({ start, set }) {
    const [vec] = useState(() => new THREE.Vector3())
    useEffect(() => {
        let timer = setTimeout(() => set(true), 500);
        return () => clearTimeout(timer);
    }, [])
    return useFrame((state) => {
        if (start) {
            state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
            state.camera.lookAt(0, 0, 0)
        }
    })
}

export default function Home() {
    const [clicked, setClicked] = useState(false)
    const [ready, setReady] = useState(false)
    const store = { clicked, setClicked, ready, setReady }
    return (
        <>
            <section id='root'>
                <Canvas concurrent="true" gl={{ alpha: false }} pixelratio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 20 }}>
                    <color attach="background" args={['black']} />
                    <fog attach="fog" args={['black', 15, 20]} />
                    <Suspense fallback={null}>
                        <group position={[0, -1, 0]}>
                            <Model rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 1, 0.6]} scale={[0.1, 0.1, 0.1]} />
                            <VideoText {...store} position={[0, 1.3, -2]} />
                            <Ground />
                        </group>
                        <ambientLight intensity={1} />
                        <spotLight position={[0, 10, 0]} intensity={1.2} />
                        <directionalLight position={[-50, 0, -40]} intensity={2} />
                        <Intro start={ready} set={setReady} />
                    </Suspense>
                </Canvas>
                <Overlay {...store} />
            </section>
        </>
    )
}
