import React, {useRef, useLayoutEffect, useContext} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { AppContext } from '@/Context/AppContext'

function index() {
    gsap.registerPlugin(ScrollTrigger)

    const section = useRef(null);
    const img = useRef(null);
    const video = useRef(null);

    const {delay} = useContext(AppContext)

    const phrase = 'We know how to do many things'

    useLayoutEffect(() => {
        // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

        const ctx = gsap.context(() => {
            gsap.to(video.current, {opacity: .6, duration: 4})
            gsap.fromTo('.services-dynamic', {opacity: 0}, {opacity: 1, duration: 2, delay: delay+0.75, ease: 'SlowMo.easeOut'});

            const t1 = gsap.timeline({defaults: {ease: 'SlowMo.easeOut'}});
            t1.fromTo('#services-title-span', {opacity: 0}, { opacity: 1, duration: 1, stagger: 0.05, delay: delay})

            const t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top top',
                    scrub: 1,
                    end: '15% top'
                }
            })
            .to(video.current, {borderRadius: '0% 0% 0% 0%', duration: 5})

            const t3 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top top',
                    scrub: 1,
                }
            })
            .to(img.current, {rotate: 360})
        })

        return () => ctx.revert();
        
    }, [])

  return (
    <section ref = {section}>
        <h2>
            {phrase.split('').map((l:string, i:number) => <span key = {i} id = 'services-title-span'>{l}</span>)}
        </h2>
        <div className='services-dynamic'>
            <hr className='dynamic-hr'></hr>
            <label>Scroll down and see what we do</label>
            <img src = '/circle.png' alt = 'circle' id = 'circle-img-services' ref = {img}/>
        </div>
        <video
        src={'/Videos/sv_bg5.mp4'}
        autoPlay
        loop
        playsInline
        muted
        poster='/posters/posters_hero.jpg'
        ref = {video}
        />
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            color: white;
            padding: 200px 120px 120px 120px;
            font-size: 120px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            position: relative;
        }
        .services-container{
            height: min-content !important;
            display: flex;
            align-items: center;
        }
        .services-dynamic{
            display: flex;
            flex-direction: row;
            z-index: 1500;
            display: flex;
            align-items: center;
            justify-content: end;
            width: 100%;
            padding: 0.25em 2em 0.25em 0.25em;
            gap: 15px;
            position: relative;
            margin-top: 180px;
        }
        .dynamic-hr{
            margin: 0 !important;
            width: 50px;
            height: 1px;
        }
        video{
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            opacity: .6;
            width: 100%;
            height: 100%;
            border-radius: 0% 0% 100% 100%;
            opacity: 0;
        }
        label{
            font-size: 32px;
            font-weight: 600;
            z-index: 1500;
        }
        #circle-img-services{
            position: absolute;
            width: 250px;
            height: 250px;
            -webkit-filter: invert(53%) sepia(4%) saturate(9%) hue-rotate(321deg) brightness(93%) contrast(89%);;
            filter: invert(53%) sepia(4%) saturate(9%) hue-rotate(321deg) brightness(93%) contrast(89%);
            right: 5%;
            transform: rotate(150deg);
        }
        .services-title-cont{
            display: flex;
            flex-direction: column;
        }
        h2{
            z-index: 1500;
            margin: 0;
            line-height: 200px;
        }
        @media screen and (max-width: 2200px){
            section{
                padding: 200px 120px 60px 120px;
            }
            .services-container{
                padding-top: 40px;
            }
            #circle-img-services{
                width: 250px;
                height: 250px;
            }
            h2{
                font-size: 150px;
                line-height: 170px;
            }
        }
        @media screen and (max-width: 1920px){
            h2{
            font-size: 135px;
            line-height: 155px;
            }
            label{
                font-size: 24px;
            }
            #circle-img-services{
                width: 200px;
                height: 200px;
                right: 6%;
            }
        }
        @media screen and (max-width: 1700px){
            h2{
                font-size: 120px;
                line-height: 140px;
            }
            #circle-img-services{
                width: 200px;
                height: 200px;
            }
            label{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 1550px){
            h2{
                font-size: 105px;
                line-height: 125px;
            }
        }
        @media screen and (max-width: 1400px){
            h2{
                font-size: 82.5px;
                line-height: 102.5px;
            }
        }
        @media screen and (max-width: 1200px){
            .services-dynamic{
                padding: 0px 30px 0px 0px;
            }
            #circle-img-services{
                right: 0%;
            }
            video{
                border-radius: 0% 0% 30% 30%;
            }
        }
        @media screen and (max-width: 1100px){
            .services-dynamic label{
                font-size: 20px;
            }
            .services-dynamic{
                margin-top: 130px;
            }
            #circle-img-services{
                width: 170px;
                height: 170px;
            }
            section{
                padding: 120px 70px 60px;
            }
        }
        @media screen and (max-width: 710px){
            section{
                padding: 0px 40px;
            }
            h2{
                font-size: 70px;
                line-height: 90px;
            }
        }
        @media screen and (max-width: 630px){
            video{
                border-radius: 0% 0% 0% 0%;
            }
        }
        @media screen and (max-width: 560px){
            section{
                padding: 0px 15px;
            }
            #circle-img-services{
                width: 140px;
                height: 140px;
            }
        }
        @media screen and (max-width: 500px){
            .services-dynamic label{
                font-size: 16px;
            }
            #circle-img-services{
                width: 120px;
                height: 120px;
            }
            .dynamic-hr{
                width: 20px;
            }
        }
        @media screen and (max-width: 450px){
          h2{
            font-size: 60px;
            line-height: 80px;
          }
        }
        @media screen and (max-width: 400px){
          h2{
            font-size: 52px;
            line-height: 72px;
          }
          .services-dynamic{
            margin-top: 100px;
          }
        }
    `}</style>
    </section>
  )
}

export default index