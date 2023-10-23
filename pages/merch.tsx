import React, {useLayoutEffect, useRef, useContext} from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '../Components/3DModel/Hoodie/NeuroHoodie';
import Countdown from '../Components/Countdown';
import Logo from '../Components/Logo/index';
import Navbar from '../Components/Navbar/index2';
import { gsap } from 'gsap';
import Head from 'next/head';

import { AppContext } from '@/Context/AppContext';

function Merch({time, loader}:any) {
    
    const title = useRef(null);
    const canvas = useRef(null);

    const {delay} = useContext(AppContext);

    useLayoutEffect(() => {
        // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

        gsap.fromTo(title.current, {opacity: 0}, {opacity: 1, delay: delay, duration: 3, ease: 'SlowMo.easeOut'})
        gsap.fromTo(canvas.current, {opacity: 0}, {opacity: 1, delay: delay+1, duration: 3, ease: 'SlowMo.easeOut'})
    }, [])

  return (
    <>
    <Head>
      {/* -----------> English */}
      <title>Neuro | The merch drop is coming soon. Stay close.</title>
      <meta name="description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="og:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="og:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="twitter:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="twitter:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      
      {/* -----------> Spanish */}
      {/* <title>Neuro | The merch drop is coming soon. Stay close.</title> */}
      <meta name="description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      <meta property="og:title" content="Neuro - Marketing Digital y Diseño Web" />
      <meta property="og:description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      <meta property="twitter:title" content="Neuro - Marketing Digital y Diseño Web" />
      <meta property="twitter:description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      
      {/* -----------> Others META */}
      <meta property="og:image" content="/metaimage.png" />
      <meta property="twitter:image" content="/metaimage.png" />
    </Head>
    <Logo/>
    <Navbar/>
    <section>
    <div className='text-container'>
        <h1 ref = {title}>The drop <span>is coming</span><span>soon</span></h1>
        <div>
            <Countdown time = {time} loader = {loader}/>
        </div>
    </div>
    <div className='merch-canvas-container' ref = {canvas}>
        <Canvas dpr={[1, 2]} shadows camera={{fov: 75}}>
            <Model/>
        </Canvas>
    </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 100px;
            color: white;
        }
        .text-container{
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding: 40px 0px 0px 150px;
        }
        h1{
            color: #38BCDC;
            margin: 0 !important;
            line-height: 170px;
        }
        span{
            display: block;
            color: white !important;
        }
        .merch-canvas-container{
            width: 40%;
            height: 100%;
            cursor: pointer;
        }
        @media screen and (max-height: 1080px){
            section{
                font-size: 90px;
            }
            h1{
                line-height: 150px;
            }
        }
        @media screen and (max-width: 1920px){
            section{
                font-size: 80px;
            }
            h1{
                line-height: 120px;
            }
        }
        @media screen and (max-width: 1700px){
            section{
                font-size: 70px;
            }
            h1{
                line-height: 120px;
            }
        }
        @media screen and (max-width: 1500px){
            section{
                font-size: 60px;
            }
            .text-container{
                padding: 40px 0px 0px 60px;
            }
        }
        @media screen and (max-width: 1200px){
            section{
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                justify-content: center;
                height: auto !important;
            }
            .text-container{
                width: 100%;
                padding: 200px 40px 50px 40px !important;
            }
            .merch-canvas-container{
                display: none;
            }
        }
        @media screen and (max-width: 800px){
            .text-container{
                padding: 0px 40px;
            }
        }
        @media screen and (max-width: 750px){
            section{
                font-size: 45px;
            }
        }
        @media screen and (max-width: 580px){
            section{
                font-size: 40px;
            }
            h1{
                line-height: 80px;
            }
            span{
                margin: 0 !important;
            }
        }
        @media screen and (max-width: 540px){
            .text-container{
                padding: 0px 15px;
            }
            .text-container div{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        @media screen and (max-width: 420px){
            
            section{
                font-size: 35px;
            }
        }
    `}</style>
    </section>
    </>
  )
}

export default Merch