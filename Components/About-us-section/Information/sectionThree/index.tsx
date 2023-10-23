import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import useWindowDimensions from '@/Components/SizeController';
import Image from 'next/image';


function index() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionThree = useRef(null);
  const sectionThreeTitle = useRef(null);

  const {width} = useWindowDimensions();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      if(width > 800){

      // Animacion tercer seccion
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionThree.current,
          start: '-=10%',
        }
      })
      .fromTo(sectionThreeTitle.current, {opacity: 0}, { opacity: 1, duration: 0.35, ease: 'none'})

        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.desc-1',
            start: '-=60%',
          }
        })
        .fromTo('.desc-1', {opacity: 0}, {opacity: 1})
  
        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.desc-2',
            start: '-=60%',
          }
        })
        .fromTo('.desc-2', {opacity: 0}, {opacity: 1})
  
        const t4 = gsap.timeline({
          scrollTrigger: {
            trigger: '.desc-3',
            start: '-=60%',
          }
        })
        .fromTo('.desc-3', {opacity: 0}, {opacity: 1})
      }

    })

    return () => ctx.revert();

  }, [])

  return (
    <>
    <section ref = {sectionThree}>
      <h2>
        <span  ref = {sectionThreeTitle} className='story-title'>Our story</span>
      </h2>
      <div className = 'description-container desc-1'>
          <div className='imgAboutStory'>
            <Image
              fill  
              src = '/about/idea2.png'
              style={{objectFit:"contain",height: "100%", maxWidth:" 800px", maxHeight:"1300px"}}
              alt="The Idea of Neuro"
              />
          </div>
        <p className='the-idea'>
          <label>The idea</label>
          Neuro was born as an idea between two friends looking to bring something different to digital development. That idea, with the passage of time became a dream, which today brings us here.
        </p>
      </div>
      <div className = 'description-container desc-2'>
        <p className='the-b'>
          <label>The start</label>
          Before all this, we did the same work "from anonymity", without a professional name or brand. We always seek to convey to our clients a sense of belonging to us and that they can also feel our values and convictions applied to their brand.
          More than three years of freelance work later and with the ideas clearer than ever, it was time to put them into practice under a real brand, NEURO.
        </p>
        <div className='imgAboutStory' style={{textAlign: "end"}}>
          <Image
            className='imgAboutStory'
              fill
              src = '/about/beginnings.png'
              style={{objectFit:"contain",height: "100%", maxWidth:" 800px", maxHeight:"1300px"}}
              alt="The Start of Neuro"
              />
        </div>
      </div>
      <div className = 'description-container desc-3'>
        <div className='imgAboutStory'>
          <Image
            className='imgAboutStory'
              fill
              src = '/about/mission.png'
              style={{objectFit:"contain",height: "100%", maxWidth:" 800px", maxHeight:"1300px"}}
              alt="The mission"
              />
        </div>
        <p className='the-m'>
          <label>The mission</label>
          Our mission is simple and complex at the same time. We want our clients to be different from their competitors. We want your brand to go up many steps, to be positioned on a global scale. We want to transmit and capture your ideas in your digital DNA.
        </p>
      </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
      section{
        width: 100vw;
        height: 450vh;
        background-color: black;
        padding: 120px 0;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      h2{
        font-size: 180px;
        overflow: hidden;
        height: 260px !important;
        margin: 0 !important;
      }
      span{
        display: inline-block;
      }
      .description-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 15vh 0;
      }
      .image-container{
        width: 100%;
        max-width: 500px;
        height: 900px;
      }
      p{
        font-family: 'Roboto', sans-serif;
        width: 35%;
        font-size: 40px;
        margin: 0;
        padding: 120px;
        text-align: left;
      }
      .the-b{
        text-align: right;
      }
      label{
        font-family: 'Monument' !important;
        font-size: 80px;
        display: block;
        font-weight: bold;
        color: #38BCDC;
        margin: 20px 0px;
        white-space: nowrap;
      }
      .imgAboutStory{
        height: 1300px;
        width: 800px;
        position: relative;
      }
      h3{
        font-size: 120px;
        text-align: center;
      }
      @media screen and (max-height: 1250px){
        section{
          height: 500vh;
        }
      }
      @media screen and (max-width: 2100px){
        h2{
          font-size: 150px;
        }
        .imgAboutStory{
          height: 1100px;
          width: 650px;
        }
        p{
          padding: 100px;
          font-size: 38px;
        }
        label{
          font-size: 72px;
        }
      }
      @media screen and (max-width: 1920px){
        h2{
          font-size: 135px;
        }
        p{
          font-size: 34px;
          padding: 100px 80px;
        }
      }
      @media screen and (max-width: 1700px){
        h2{
          font-size: 120px;
        }
        p{
          font-size: 32px;
        }
        label{
          font-size: 65px;
        }
      }
      @media screen and (max-width: 1400px){
        section{
          height: 450vh;
        }
        h2{
          font-size: 105px;
        }
        label{
          font-size: 58px;
        }
        p{
          width: 45%;
        }
        .imgAboutStory{
          height: 950px;
          width: 580px;
        }
      }
      @media screen and (max-width: 1200px){
        section{
          height: 400vh;
        }
        p{
          padding: 80px 50px;
        }
        label{
          font-size: 55px;
        }
      }
      @media screen and (max-width: 1100px){
        .imgAboutStory{
          width: 500px;
          height: 920px;
        }
        label{
          font-size: 50px;
        }
      }
      @media screen and (max-width: 1000px){
        section{
          height: 370vh;
        }
        h2{
          font-size: 82px;
        }
        .imgAboutStory{
          width: 450px;
          height: 800px;
        }
        p{
          padding: 80px 0px 80px 40px;
        }
        .the-b{
          padding: 80px 40px 80px 0px !important;
        }
        label{
          font-size: 45px;
        }
        p{
          font-size: 30px;
        }
      }
      @media screen and (max-width: 950px){
        p{
          padding: 80px 0px 80px 20px;
        }
        .the-b{
          padding: 80px 20px 80px 0px !important;
        }
        label{
          font-size: 40px;
        }
        p{
          font-size: 28px;
        }
      }
      @media screen and (max-width: 870px){
        .imgAboutStory{
          height: 700px;
          width: 380px;
        }
        h2{
          overflow: visible;
        }
      }
      @media screen and (max-width: 800px){
        label{
          font-size: 35px;
        }
        h2{
          font-size: 75px;
        }
      }
      @media screen and (max-width: 750px){
        h2{
          font-size: 70px;
        }
      }
      @media screen and (max-width: 720px){
        section{
          height: 300vh;
        }
        .imgAboutStory{
          display: none;
        }
        label{
          font-size: 55px;
        }
        p{
          padding: 80px 15px;
          text-align: center;
          font-size: 30px;
          width: 90%;
        }
        .the-b{
          padding: 80px 15px !important;
          text-align: center;
        }
      }
      @media screen and (max-width: 630px){
        h2{
          font-size: 60px;
        }
        label{
          font-size: 48px;
        }
        p{
          font-size: 28px;
        }
      }
      @media screen and (max-width: 520px){
        p{
          width: 100%;
        }
        label{
          font-size: 45px;
        }
        p{
          font-size: 26px;
        }
      }
      @media screen and (max-width: 470px){
        h2{
          font-size: 45px;
        }
        label{
          font-size: 38px;
        }
        p{
          font-size: 24px;
        }
      }
      @media screen and (max-width: 400px){
        section{
          padding: 40px 15px;
        }
        p{
          padding: 40px 0px;
        }
        label{
          font-size: 35px;
        }
      }
      @media screen and (max-width: 380px){
        section{
          height: 400vh;
        }
      }
    `}</style>
    </section>
    </>

  )
}

export default index