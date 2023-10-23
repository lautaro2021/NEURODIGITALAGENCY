import React, {useLayoutEffect, useRef, useContext} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { AppContext } from '@/Context/AppContext';

function index() {
  gsap.registerPlugin(ScrollTrigger);

  const section = useRef(null);
  const video = useRef(null);
  const div = useRef(null);

  const {delay} = useContext(AppContext);

  const phrase = 'The way to your new digital dna'

  useLayoutEffect(() => {
    // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

    const ctx = gsap.context(() => {
      gsap.set('.span-aboutus', {opacity: 0});
      gsap.set(video.current, {opacity: 0});
      gsap.set(div.current, {opacity: 0})
      gsap.to('.span-aboutus', {opacity: 1, duration: 1, stagger: 0.05, ease: 'power', delay: delay})
      gsap.to(video.current, {opacity: .6, duration: 4})
      gsap.to(div.current, {opacity: 1, duration: 3, delay: delay+0.5})

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          scrub: 1,
          end: '15% top'
        }
      })
      .to(video.current, {borderRadius: '0% 0% 0% 0%', duration: 5})
    })

    return () => ctx.revert();

  }, [])

  return (
    <section ref = {section}>
        <h1>{phrase.split('').map((letter: string, i:number) => <span key={i} className='span-aboutus'>{letter}</span>)}</h1>
        <video
          src={'/Videos/bgVideo.mp4'}
          autoPlay
          loop
          muted
          playsInline
          ref = {video}
          poster={'/Videos/poster1.jpg'}
        />
        <div ref = {div}>
          <hr></hr>
          <label>Scroll and discover our mission</label>
        </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            color: white;
            font-size: 120px;
            padding: 0px 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 0 !important;
        }
        video{
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          opacity: .6;
          width: 100%;
          height: 100%;
          border-radius: 100% 100% 0% 0%;
        }
        h1{
          z-index: 1000;
        }
        div{
          margin-top: 100px;
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
          z-index: 500;
        }
        @media screen and (max-height: 1250px){
          h1{
            margin: 200px 0px 0px 0px;
          }
        }
        @media screen and (max-width: 2100px){
          h1{
            font-size: 150px;
          }
          section{
            padding: 0px 100px;
          }
        }
        @media screen and (max-width: 1920px){
          h1{
            font-size: 130px;
          }
          label{
            font-size: 24px;
          }
        }
        @media screen and (max-width: 1700px){
          h1{
            font-size: 120px;
          }
          label{
            font-size: 28px;
          }
        }
        @media screen and (max-width: 1600px){
          h1{
            margin: 120px 0px 0px 0px;
          }
        }
        @media screen and (max-width: 1400px){
          h1{
            margin: 100px 0px 0px 0px;
            font-size: 105px;
          }
        }
        @media screen and (max-width: 1200px){
          section{
            padding: 0px 70px;
          }
          h1{
            font-size: 100px;
            margin: 70px 0px 0px 0px;
          }
          video{
            border-radius: 30% 30% 0% 0%;
          }
        }
        @media screen and (max-width: 1000px){
          h1{
            font-size: 82px;
          }
          label{
            font-size: 25px;
          }
          section{
            padding: 0px 40px;
          }
        }
        @media screen and (max-width: 850px){
          label{
            font-size: 22px;
          }
        }
        @media screen and (max-width: 800px){
          h1{
            font-size: 75px;
          }
        }
        @media screen and (max-width: 750px){
          h1{
            font-size: 70px;
          }
        }
        @media screen and (max-width: 680px){
          hr{
            width: 25px;
          }
          label{
            font-size: 18px;
          }
        }
        @media screen and (max-width: 630px){
          h1{
            font-size: 60px;
          }
          video{
            border-radius: 0% 0% 0% 0%;
          }
        }
        @media screen and (max-width: 560px){
          section{
            padding: 0px 15px;
          }
        }
        @media screen and (max-width: 500px){
          label{
            font-size: 15px;
          }
        }
        @media screen and (max-width: 450px){
          h1{
            font-size: 52px;
          }
          div{
            gap: 5px;
          }
        }
        @media screen and (max-width: 420px){
          h1{
            font-size: 50px;
          }
          label{
            font-size: 12px;
          }
        }
        @media screen and (max-width: 400px){
          h1{
            margin: 120px 0px 0px 0px;
          }
          div{
            margin-top: 40px;
          }
        }
    `}</style>
    </section>
  )
}

export default index