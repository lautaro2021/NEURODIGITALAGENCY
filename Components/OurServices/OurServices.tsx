import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image';

function OurServices() {
    gsap.registerPlugin(ScrollTrigger);

    const section:any = useRef(null);
    const section2:any = useRef(null);
    const strokeText:any = useRef(null);

    const ctx2Ref:any = useRef(null);

  useLayoutEffect(() => {
    const width = window.innerWidth
    const contentDiv = gsap.utils.toArray("#service-content");
    const sectionDimensions = section.current.offsetWidth;

    const ctx = gsap.context(() => {

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: section2.current,
                start: 'top-=1000 top',
                end: '+=3000%',
                scrub: 10,
                toggleActions: 'play none reverse none',
            }
        })
        .fromTo(strokeText.current,{x: '0%'},{x: '-100%', duration: 20})
    })

    if(width > 1000){
        ctx2Ref.current = gsap.context(() => {
            gsap.set(contentDiv, {xPercent: -100 * (contentDiv.length - 1)});
    
            gsap.to(contentDiv, {
                xPercent: 0,
                ease: "none",
                scrollTrigger:{
                trigger: "#services-scroll",
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${sectionDimensions * 2}`,
                }
            })
        })
    }

    return () => {
        ctx.revert();
        ctx2Ref.current?.revert();
    }

  }, [])
  return (
    <>
    {/* title section */}
    <section ref = {section2}>
        <h2 className='stroke-text'>
            <span ref = {strokeText}>
                OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES
                OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES OUR SERVICES
            </span>
        </h2>
    <style jsx>{`
        section{
            width: 100vw;
            height: 50vh;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(0,0,0);
            font-family: 'Monument';
            position: relative;
            font-size: 100px;
            margin-top: -1px;
        }
        h2{
            color: white;
            font-weight: 600;
            overflow: hidden;
            margin: 0;
        }
        .stroke-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
        }
        .stroke-text span{
            display: inline-block;
            white-space: nowrap;
            font-size: 250px;
            font-weight: 800;
            color: white;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            opacity: .3;
        }
        span{
            display: inline-block;
        }
        @media only screen and (max-width: 3000px){
            .stroke-text span{
                font-size: 180px;
            }
        }
        @media only screen and (max-width: 2300px){
            .stroke-text span{
                font-size: 130px;
            }
        }
        @media only screen and (max-width: 1950px){
            .stroke-text span{
                font-size: 110px;
            }
        }
        @media screen and (max-width: 1020px){
            section{
                height: 30vh;
            }
            .stroke-text span{
                font-size: 70px;
            }
        }
        @media screen and (max-width: 710px){
            .stroke-text span {
                font-size: 50px;
            }
        }
    `}</style>
    </section>
    {/* scroll section */}
    <section id = "services-scroll" ref = {section}>
        <div id = "service-content">
            <div className='container'>
                <div className='text-container'>
                    <label>real productions</label>
                    <h3>Content</h3>
                    <ul>
                        <li>Video Production</li>
                        <li>Fotography</li>
                        <li>Campaigns</li>
                    </ul>
                </div>
                <div className='service-background'>
                    <Image
                        src='/Services/content.jpg'
                        alt='Content, Video Production, Fotography and Campaigns'
                        style={{objectFit: 'cover'}}
                        priority
                        blurDataURL='/Services/content.jpg'
                        fill
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
        <div id = "service-content">
            <div className='container'>
                <div className='text-container'>
                    <label>designs to stand out</label>
                    <h3>Web</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Responsive Design</li>
                        <li>3D Web Design</li>
                        <li>E-commerce</li>
                        <li>UX/UI</li>
                    </ul>
                </div>
                <div className='service-background'>
                    <Image
                        src='/Services/website.jpg'
                        alt='Web Design, UX-UI, Responsive, 3D, E-commerce'
                        style={{objectFit: 'cover'}}
                        priority
                        blurDataURL='/Services/website.jpg'
                        fill
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
        <div id = "service-content">
            <div className='container'>
                <div className='text-container'>
                    <label>Reimagining your identity</label>
                    <h3>Identity</h3>
                    <ul>
                        <li>Logotype</li>
                        <li>Key Visual</li>
                        <li>Brand Identity</li>
                        <li>Re-Branding</li>
                        <li>UX/UI</li>
                    </ul>
                </div>
                <div className='service-background'>
                    <Image
                        src='/Services/identity.jpg'
                        alt='identity, Key Visual, Brand Identity, UX-UI'
                        style={{objectFit: 'cover'}}
                        priority
                        blurDataURL='/Services/identity.jpg'
                        fill
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
        <div id = "service-content">
            <div className='container'>
                <div className='text-container'>
                    <label>Reimagining your brand</label>
                    <h3>Design</h3>
                    <ul>
                        <li>Social Media</li>
                        <li>Packaging</li>
                        <li>Flyers</li>
                        <li>Posters</li>
                    </ul>
                </div>
                <div className='service-background'>
                    <Image
                        src='/Services/content2.jpg'
                        alt='Design, Social Media, Packaging, Flyers, Posters'
                        style={{objectFit: 'cover'}}
                        priority
                        blurDataURL='/Services/content2.jpg'
                        fill
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
    <style jsx>{`
        section{
            width: auto;
            height: auto;
            background: black;
            display: flex;
            background: rgb(0,0,0);
            font-family: 'Monument';
        }
        #service-content{
            min-width: 100vw;
            max-width: 100vw;
            width: 100%;
            min-height: 100vh;
            max-height: 100vh;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container{
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            position: relative;
        }
        .text-container{
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            z-index: 500;
        }
        .text-container h3{
            font-size: 100px;
            margin: 0;
            z-index: 1000;
        }
        .text-container label{
            font-size: 32px;
            color: #1966AF;
            font-weight: 600;
        }
        .service-background{
            width: 60%;
            height: 100%;
            margin: 0 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        ul{
            margin-top: 25px;
            list-style: none;
            font-weight: 600;
            font-size: 38px;
            width: 100%;
            padding: 0 !important;
            color: grey;
        }
        .background-image{
            object-fit: cover;
            width: 100%;
            height: 1200px;
            z-index: -1;
        }
        @media screen and (max-width: 2200px){
            .text-container h3{
                font-size: 150px;
            }
        }
        @media screen and (max-width: 1920px){
            .text-container h3{
                font-size: 135px;
            }
            .background-image{
                height: 100%;
            }
        }
        @media screen and (max-width: 1700px){
            .text-container h3{
                font-size: 120px;
            }
            .container{
                width: 90%;
            }
            .text-container label{
                font-size: 28px;
            }
            .background-image{
                filter: brightness(0.8)
            }
        }
        @media screen and (max-width: 1550px){
            .text-container h3{
                font-size: 105px;
            }
            hr{
                width: 25px;
            }
            .text-container label{
                gap: 10px;
            }
        }
        @media screen and (max-width: 1400px){
            .text-container h3{
                font-size: 82.5px;
            }
            .text-container label{
                font-size: 25px;
            }
            ul li{
                font-size: 30px;
            }
        }
        @media screen and (max-width: 1200px){
            .container{
                flex-direction: column-reverse;
                align-items: start;
                justify-content: start;
                padding-top: 50px;
            }
            .service-background{
                width: 100%;
                height: 50%;
            }
            .text-container{
                position: static;
                margin: 0;
                padding: 20px 0px;
                top: 0;
                left: 0;
                transform: translateY(0%);
            }
        }
        @media screen and (max-width: 1000px){
            section{
                overflow-x: scroll;
                height: 100vh;
            }
            .service-background{
                z-index: 500;
            }
            .container{
                padding-top: 0;
            }
            #service-content{
                min-width: 90vw;
                max-width: 90vw;
            }
        }
        @media screen and (max-width: 900px){
            .text-container label{
                font-size: 22px;
            }
        }
        @media screen and (max-width: 780px){
            .text-container h3{
                font-size: 70px;
            }
            .text-container label{
                font-size: 20px;
            }
            ul li{
                font-size: 28px;
            }
        }
        @media screen and (max-width: 670px){
            .text-container h3{
                font-size: 60px;
            }
            ul li{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 600px){
            .text-container h3{
                font-size: 52px;
            }
            ul li{
                font-size: 22px;
            }
            .text-container{

            }
        }
        @media screen and (max-width: 550px){
            .text-container h3 {
                font-size: 48px;
            }
        }
        @media screen and (max-width: 500px){
            .text-container h3 {
                font-size: 45px;
            }
        }
        @media screen and (max-width: 440px){
            .text-container label{
                font-size: 18px;
            }
            ul li{
                font-size: 20px;
            }
            .text-container h3{
                font-size: 42px;
            }
        }
    `}</style>
    </section>
    </>
  )
}

export default OurServices