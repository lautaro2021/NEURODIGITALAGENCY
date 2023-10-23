import React, { useRef, useLayoutEffect, useMemo} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap';

export default function CubeCascade(props) {
  const group = useRef();
  const pointLight = useRef();
  const directionLight1 = useRef();
  const directionLight2 = useRef();
  const directionLight3 = useRef();

  const { viewport } = useThree();
  const { nodes, materials, animations } = useGLTF('/3DModels/cube_cascade/scene-transformed.glb');
  const { actions } = useAnimations(animations, group);

  const scale = useMemo(() => viewport.width / 11, [viewport.width]);

  useLayoutEffect(() => {
    actions.Animation.play();
    const servicesScroll = document.querySelector('#services-scroll');
    const proyectsScroll = document.querySelector('#proyects-scroll-section');

    const ctx = gsap.context(() => {

      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: servicesScroll,
          start: '+=200',
          end: 'top top',
          toggleActions: 'play none reverse none',
        }
      })
      .fromTo('#canvas', {display: 'none'}, {display: 'block'})

      const t2 = gsap.timeline({
        onCompleteAll: t3,
        scrollTrigger: {
          trigger: proyectsScroll,
          start: 'top top',
          end: 'top top',
          toggleActions: 'play none reverse none'
        }
      }).fromTo('#canvas', {display: 'block'}, {display: 'none'})

      gsap.timeline({
        onCompleteAll: t2,
        scrollTrigger: {
          trigger: '#canvas',
          start: 'top top',
          scrub: 2,
        }
      })
      .fromTo(group.current.position, {y: 8}, {y: 0})
      .fromTo(group.current.position, {x: 3}, {x:0, ease: 'none'}, "key1")
      .fromTo(group.current.rotation, {z: 0}, {z: Math.PI}, "key1")
      .fromTo(group.current.rotation, {x: 0}, {x: Math.PI / 2}, "key1")
    })



    const ctx2 = gsap.context(() => {
      const section = document.querySelector('#lets-work-section');

      gsap.set('#work-animation2', {display: 'none', y: '100%'});
      gsap.set('#work-animation3', {display: 'none', y: '100%'});
      gsap.set('#work-animation4', {display: 'none'});
      gsap.set('#work-animation5', {display: 'none', opacity: 0});
      gsap.set('#work-animation', {y:'100%', opacity: 0});

      gsap.timeline({
          scrollTrigger: {
              trigger: '#lets-work-section',
              start: 'top top',
              pin: true,
              scrub: 2,
              end: '+=' + (section?.offsetHeight * 5)
          }
      })
      .to('#work-animation', {y: '0%', opacity: 1, ease: 'power', stagger: 1, duration: 2}, "anim1")
      .to(group.current.scale, {z: 1, x: 1, y: 1, duration: 2}, "anim1")
      .to(group.current.rotation, {x: -Math.PI, duration: 1.5}, "anim1")
      .to('#work-animation', {y: '-100%', opacity: 0, ease: 'power', stagger: 1, duration: 2})
      .set('#work-animation', {display: 'none'})

      .set('#work-animation2', {display: 'inline-block'})
      .to('#work-animation2', {y: '0%', opacity: 1, ease: 'power', stagger: 1, duration: 2}, "anim2")
      .to('#work-animation2', {y: '-100%', opacity: 0, ease: 'power', stagger: 1, duration: 2})
      .set('#work-animation2', {display: 'none'})

      .set('#work-animation3', {display: 'inline-block'})
      .to('#work-animation3', {y: '0%', opacity: 1, ease: 'power', duration: 2}, "key4")

      .to('#lets-work-section', {background: 'rgba(0, 0, 0)', background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(6,26,45,1) 100%)', ease: 'power', duration: 1}, "key4")

    })

    return () => {
      ctx.revert();
      ctx2.revert();
    }

  }, [])

  return (
    <>
    <pointLight color = {'#1966AF'} intensity={5} ref={pointLight}/>
    <directionalLight color={'#38BCDC'} angle={1} position={[2, 3, 0]} ref = {directionLight1}/>
    <directionalLight color={'#38BCDC'} angle={1} position={[-2, 3, 0]} ref = {directionLight2}/>
    <directionalLight color={'#38BCDC'} angle={1} position={[0, 0, 3]} ref = {directionLight3}/>
    <group ref={group} {...props} dispose={null} scale={scale} position={[3, 0 , 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube001_1" scale={0.79}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_1} map = {props}/>
              </group>
              <group name="Cube002_2" scale={0.63}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube003_3" scale={0.49}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube004_4" scale={0.37}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube005_5" scale={0.28}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube006_6" scale={0.2}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube007_7" scale={0.14}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube008_8" scale={0.09}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Cube009_9" scale={0.05}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.material_3} map = {props}/>
              </group>
              <group name="Cube010_10" scale={0.03}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.material} map = {props}/>
              </group>
              <group name="Circle_11" scale={1.85} />
            </group>
          </group>
        </group>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/3DModels/cube_cascade/scene-transformed.glb')
