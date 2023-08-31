import React, { useRef } from "react";
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/camera.glb");
    const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#7b7b7b').convertSRGBToLinear(),
        roughness: 0,
        metalness: 0.5,
        clearcoat: 0,
        clearcoatRoughness: 0,
    })
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={material}
                position={[-4.332, -12.024, -3.925]}
                rotation={[-2.746, -0.799, -2.851]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={material}
                position={[-7.49, -9.127, -1.475]}
                rotation={[-3.038, -0.832, -3.079]}
                scale={[1.002, 1.009, 1.816]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={material}
                position={[-1.971, -1.816, -1.943]}
                scale={[0.784, 0.488, 1.157]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={material}
                position={[-1.913, -18.334, -1.416]}
                scale={0.199}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={material}
                position={[-1.869, -4.555, -1.721]}
                scale={[0.308, 0.131, 0.308]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={material}
                position={[-1.869, -3.897, -1.721]}
                scale={[0.224, 0.56, 0.224]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={material}
                position={[-1.785, -1.164, -3.847]}
                rotation={[-2.857, 0, 0]}
                scale={[0.872, 1.528, 0.577]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_18.geometry}
                material={material}
                position={[-4.605, -2.209, -4.135]}
                rotation={[-1.412, 0, 0.074]}
                scale={[1.971, 7.757, 1.971]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={material}
                position={[-1.873, -0.081, -0.055]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.173, 4.617, 1.173]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={material}
                position={[-1.873, -0.081, -1.743]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.173, 4.617, 1.173]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={material}
                position={[-1.873, -0.081, -0.055]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.173, 4.617, 1.173]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_26.geometry}
                material={material}
                position={[-0.61, -0.142, -4.087]}
                rotation={[0.019, 0.013, -1.617]}
                scale={[-0.168, 0.01, 0.168]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_28.geometry}
                material={material}
                position={[-1.875, 2.367, -3.005]}
                rotation={[2.143, 0.073, -3.125]}
                scale={[0.37, 0.548, 0.379]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                material={material}
                position={[-1.875, 2.349, -4.186]}
                rotation={[2.131, 0.073, -3.125]}
                scale={[0.37, 0.548, 0.379]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
                material={material}
                position={[-1.63, -0.53, -3.207]}
                rotation={[-Math.PI / 2, 1.38, -Math.PI / 2]}
                scale={[0.698, 1.932, 0.583]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_34.geometry}
                material={material}
                position={[-1.873, -0.081, 0.047]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.294, 0.467, 1.294]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_36.geometry}
                material={material}
                position={[-1.879, -0.093, -0.996]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.238, 0.554, 1.238]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_38.geometry}
                material={material}
                position={[-1.883, -1.286, -1.856]}
                scale={[0.762, 0.13, 1.19]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_40.geometry}
                material={material}
                position={[-1.879, -0.093, -1.333]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.238, 0.554, 1.238]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_42.geometry}
                material={material}
                position={[-1.879, -0.093, -0.524]}
                rotation={[-Math.PI / 2, -0.582, 0]}
                scale={[1.238, 0.185, 1.238]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_44.geometry}
                material={material}
                position={[-1.879, -0.093, 1.07]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.238, 0.705, 1.238]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_46.geometry}
                material={material}
                position={[-1.879, -0.093, 2.543]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.238, 0.114, 1.238]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_48.geometry}
                material={material}
                position={[-1.873, -0.081, -0.29]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.294, 0.467, 1.294]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={material}
                position={[-1.873, -0.081, 1.758]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.294, 0.467, 1.294]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_52.geometry}
                material={material}
                position={[-1.873, -0.109, 4.189]}
                scale={[2.366, 1.798, 1.489]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_54.geometry}
                material={material}
                position={[-1.873, -0.081, -0.055]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.173, 4.617, 1.173]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_56.geometry}
                material={material}
                position={[-1.346, -0.892, 0.739]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.809, 0.292, 0.809]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_58.geometry}
                material={material}
                position={[1.273, -12.024, -3.14]}
                rotation={[-2.547, 1.07, 2.606]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_60.geometry}
                material={material}
                position={[-2.056, -12.024, 1.724]}
                rotation={[-0.273, -0.038, -0.011]}
            />
        </group>
    );
}

useGLTF.preload("/camera.glb");