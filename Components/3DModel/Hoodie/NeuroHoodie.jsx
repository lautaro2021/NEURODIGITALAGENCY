import React, { useRef, useCallback} from 'react'
import { Center, useGLTF } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import { useThree } from '@react-three/fiber'

export default function Model(props) {

  const { nodes, materials } = useGLTF('/3DModels/underrated_hoodie/scene-transformed.glb')
  const {viewport} = useThree()

  const mesh = useRef(null);

  const frameHook = useCallback((state, delta) => {
    mesh.current.rotation.y += delta;
  })
  useFrame(frameHook);

  return (
    <>
    <directionalLight color = {'#ffffff'} angle={1} position={[3, 3, 0]} />
    <directionalLight color = {'#ffffff'} angle={1} position={[-3, 3, 0]} intensity={0.6}/>
    <directionalLight color = {'#ffffff'} angle={1} position={[0, -3, 3]} intensity={0.3}/>
    <directionalLight color = {'#ffffff'} angle={1} position={[0, -3, -3]} intensity={0.1}/>
    <ambientLight color = {'#1966AF'}/>
    <Center position={[0, 0, 0]}>
    <group {...props} dispose={null} ref = {mesh} scale={(viewport.width)}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.material_4} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.material_4} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.material_4} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.material_4} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.material_8} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.material_9} />
    </group>
    </Center>
    </>
  )
}

useGLTF.preload('/3DModels/underrated_hoodie/scene-transformed.glb')