import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import CustomLink from '../customLink';
import Image from 'next/image';

function AboutUs() {

  const img = useRef(null);
  const text = useRef(null);
  const button = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-aboutus',
          start: 'top-=50% top',
        }
      })
      .fromTo(img.current, {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'power'})
      .to(text.current, {opacity: 1, duration: 0.25, ease: 'power'})
      .to(button.current, {opacity: 1, duration: 0.25, ease: 'power'})
    })

    return () => ctx.revert();

  }, []) 

  return (
    <section id = 'section-aboutus'>
      <div className='container-aboutus'>
        <div>
          <h2 ref = {text}>
            <span className='first-span-aboutus'>What is</span>
            <span>NEURO?</span>
          </h2>
          <CustomLink href = '/about-us'>
            <button ref = {button}>Discover US</button>
          </CustomLink>
        </div>
        <div id="imgAboutUs">
          <Image
            src='/backgrounds/neuro-about.png'
            width={500}
            height={500}
            alt='about-bg Neuro About Web Design and Digital Marketing'
            ref={img}
            style={{objectFit: 'contain', width:"100%", height:"100%"}}
            blurDataURL='/backgrounds/neuro-about.png'
            placeholder='blur'
            decoding='async'
          />
        </div>
      </div>
    <style jsx>{`
        section{
            width: 100%;
            height: 120vh;
            color: white;
            font-family: 'Monument';
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
        }
        .container-aboutus{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: start;
            gap: 120px;
            width: 80%;
        }
        h2{
          font-size: 120px;
          text-align: left;
          line-height: 100px;
          margin: 0;
          opacity: 0;
        }
        .first-span-aboutus{
          font-size: 80px !important;
        }
        span{
          display: block;
        }
        #imgAboutUs{
          max-width: 900px;
          height: 1600px;
          opacity: 1;
        }
        button{
            border: 1px solid white;
            background: none;
            color: white;
            font-size: 40px;
            margin-top: 50px;
            font-family: 'Monument';
            font-weight: bold;
            padding: 1em 2em;
            border-radius: 100px;
            cursor: pointer;
            background-image: linear-gradient(white, white);
            background-size: 0 100%;
            opacity: 0;
        }
        button:hover{
            background-image: linear-gradient(white, white);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: black;
            transition: 0.5s;
        }
        @media screen and (max-width: 2200px){
          #imgAboutUs{
            max-width: 50%;
            height: 100% !important;
          }
          button{
            font-size: 30px;
          }
          .container-aboutus{
            height: 100%;
            gap: 0;
            justify-content: space-between;
          }
        }
        @media screen and (max-width: 1920px){
          h2{
            font-size: 100px;
          }
          button{
            font-size: 24px;
          }
        }
        @media screen and (max-width: 1600px){
          h2{
            font-size: 90px;
          }
          .first-span-aboutus{
            font-size: 70px !important;
          }
          #imgAboutUs{
            max-width: none;
            height: 100% !important;
          }
        }
        @media screen and (max-width: 1400px){
          h2{
            font-size: 80px;
          }
          .first-span-aboutus{
            font-size: 60px !important;
          }
          button{
            font-size: 20px;
          }
        }
        @media screen and (max-width: 1200px){
          h2{
            font-size: 70px;
          }
          .first-span-aboutus{
            font-size: 50px !important;
        }
        @media screen and (max-width: 1100px){
          section{
            height: auto !important;
          }
          .container-aboutus{
            flex-direction: column-reverse;
            width: 100% !important;
            padding: 0px 70px;
          }
          .container-aboutus div{
            padding: 30px 0px;
            width: 100%;
          }
          button{
            margin: 50px 0px;
          }
          #imgAboutUs{
            height: 800px !important;
            object-fit: cover;
          }
        }
        @media screen and (max-width: 710px){
          .container-aboutus{
            padding: 0px 40px;
          }
        }
        @media screen and (max-width: 600px){
          h2{
            font-size: 60px;
          }
          .first-span-aboutus{
            font-size: 40px !important;
          }
          button{
            margin: 25px 0px;
            padding: 25px 50px;
            font-size: 18px;
          }
        }
        @media screen and (max-width: 500px){
          .container-aboutus{
            padding: 0px 15px;
          }
        }
        @media screen and (max-width: 420px){
          h2{
            font-size: 52px;
          }
          button{
            padding: 18px 34px;
            font-size: 18px;
          }
        }
    `}</style>
    </section>
  )
}

export default AboutUs