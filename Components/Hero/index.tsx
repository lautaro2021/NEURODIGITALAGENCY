import React, {useLayoutEffect, useRef, useContext} from 'react'
import {Canvas} from '@react-three/fiber'
import CubeCascade from '../3DModel/Cube/Scene';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import useWindowDimensions from '../SizeController';
import { AppContext } from '@/Context/AppContext';

function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  const {width} = useWindowDimensions();

  const section:any = useRef(null);
  const windowRef:any= useRef();

  const {delay} = useContext(AppContext);

  const phraseOne = 'We are a new futurist'
  const phraseTwo = 'digital agency'

  useLayoutEffect(() => {
    // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

    const ctx = gsap.context(() => {
        const t1 = gsap.timeline({defaults: {ease: 'SlowMo.easeOut'}});
        t1.fromTo('#anim', {y: '100%', opacity: 0}, {y: '0%', duration: .8, stagger: 0.1, delay: delay, opacity: 1});
        t1.fromTo('.scroll-down-hero', {x: '-100%', opacity: 0}, {x: '0%', duration: .5, opacity: 1});

        const t2 = gsap.timeline({
          scrollTrigger:{
            trigger: section.current,
            start: 'top top',
            scrub: 1,
          }
        }).to('#circle-image-hero', {rotate: 360})
    })

    return () => ctx.revert();

  }, [])

  useLayoutEffect(() => {
    const width = window.innerWidth;
    windowRef.current = window.innerWidth

  }, [width])

  return (
    <section id = 'hero-section' ref = {section}>
        <h1>
          {phraseOne.split(' ').map((l:string, i:number) => <span id = 'anim' key = {i}>{l}&nbsp;</span>)}
          {phraseTwo.split(' ').map((l:string, i:number) => <span id = 'anim' className='color2' key = {i}>{l}</span>)}
        </h1>
        <div className='scroll-down-hero'>
          <hr></hr>
          <label>Scroll down and see our proyects</label>
          <img src = {'/circle.png'} alt = 'circleImage' id = 'circle-image-hero'/>
        </div>
        <div className='canvas-container' id = 'canvas'>
          <Canvas dpr={[1, 2]} shadows camera={{fov: 75}}>
            <CubeCascade/>
          </Canvas>
        </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        section{
            width: 100vw;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding: 150px 120px 0px;
            position: relative;
        }
        {/* .text{
          color: white;
          font-size: 120px;
          line-height: 120px;
          padding: 50px 0px;
          overflow: hidden;
        } */}
        h1{
          white-space: wrap;
          font-weight: bold;
          margin: 0;
          overflow: hidden;
          padding: 25px 0;
          color: white;
          font-size: 180px;
          line-height: 200px;
        }
        span{
          display: inline-block;
        }
        .color2{
          color: #38BCDC;
          overflow: visible !important;
        }
        .scroll-down-hero{
          margin-top: 200px;
          display: flex;
          align-items: center;
          gap: 25px;
          color: white;
          position: relative;
        }
        hr{
          width: 50px;
          height: 1px;
        }
        label{
          font-size: 32px;
          font-weight: 600;
        }
        img{
          position: absolute;
          right: -5%;
          width: 250px;
          height: 250px;
          color: white;
          -webkit-filter: invert(53%) sepia(4%) saturate(9%) hue-rotate(321deg) brightness(93%) contrast(89%);;
          filter: invert(53%) sepia(4%) saturate(9%) hue-rotate(321deg) brightness(93%) contrast(89%);
          z-index: -1;
          transform: rotate(150deg);
        }
        .canvas-container{
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0 !important;
        }
        @media screen and (max-width: 2200px){
          h1{
            font-size: 150px;
            line-height: 170px;
          }
          .scroll-down-hero{
            margin-top: 100px;
          }
        }
        @media screen and (max-width: 1920px){
          h1{
            font-size: 135px;
            line-height: 155px;
          }
          .scroll-down-hero{
            margin-top: 200px;
            display: flex;
            align-items: center;
            gap: 25px;
            color: white;
            position: relative;
          }
          label{
            font-size: 24px;
          }
          img{
            width: 200px;
            height: 200px;
          }
        }
        @media screen and (max-width: 1700px){
          h1{
            font-size: 120px;
            line-height: 140px;
          }
          img{
            width: 200px;
            height: 200px;
          }
          label{
            font-size: 25px;
          }
        }
        @media screen and (max-width: 1550px){
          h1{
            font-size: 105px;
            line-height: 125px;
          }
        }
        @media screen and (max-width: 1400px){
          h1{
            font-size: 82.5px;
            line-height: 102.5px;
          }
        }
        @media screen and (max-width: 1200px){
          .canvas-container{
            display: none;
          }
        }
        @media screen and (max-width: 1100px){
          section{
            padding: 150px 70px 0px;
          }
          label{
            font-size: 20px;
          }
          img{
            width: 170px;
            height: 170px;
          }
        }
        @media screen and (max-width: 1020px){
          {/* section{
            height: auto;
            padding: 150px 70px;
          } */}
          .scroll-down-hero{
            margin-top: 150px;
          }
        }
        @media screen and (max-width: 710px){
          section{
            padding: 150px 40px 0px;
          }
          h1{
            font-size: 70px;
            line-height: 90px;
          }
        }
        @media screen and (max-width: 560px){
          section{
            padding: 150px 15px 0px;
          }
          hr{
            width: 25px;
          }
          img{
            width: 140px;
            height: 140px;
            right: 0%;
          }
        }
        @media screen and (max-width: 500px){
          img{
            width: 120px;
            height: 120px;
          }
          label{
            font-size: 16px;
          }
        }
        @media screen and (max-width: 450px){
          h1{
            font-size: 60px;
            line-height: 80px;
          }
        }
        @media screen and (max-width: 400px){
          h1{
            font-size: 52px;
            line-height: 72px;
          }
          .scroll-down-hero{
            margin-top: 100px;
          }
        }
    `}</style>
    </section>
  )
}

export default Hero