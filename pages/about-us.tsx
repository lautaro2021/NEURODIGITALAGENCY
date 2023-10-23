import React from 'react'
import Head from 'next/head'

import HeroAbout from '../Components/About-us-section/Hero-about';
import MegaMenu from '@/Components/Navbar/index2';
import SectionOne from '../Components/About-us-section/Information/sectionOne';
import Experience from '../Components/About-us-section/Experience';
import SectionThree from '../Components/About-us-section/Information/sectionThree';
import Parters from '../Components/About-us-section/Partners';
import Contact from '../Components/Contact';
import Logo from '../Components/Logo';
import WhatWeDo from '@/Components/About-us-section/WhatWeDo';

function aboutUs() {

  return (
    <>
    <Head>
      {/* -----------> English */}
      <title>Neuro | Learn about Neuro and discover our mission</title>
      <meta name="description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="og:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="og:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="twitter:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="twitter:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      
      {/* -----------> Spanish */}
      {/* <title>Neuro | Learn about Neuro and discover our mission</title> */}
      <meta name="description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      <meta property="og:title" content="Neuro - Marketing Digital y Diseño Web" />
      <meta property="og:description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      <meta property="twitter:title" content="Neuro - Marketing Digital y Diseño Web" />
      <meta property="twitter:description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      
      {/* -----------> Others META */}
      <meta property="og:image" content="/metaimage.png" />
      <meta property="twitter:image" content="/metaimage.png" />
    </Head>
    <div>
      <Logo/>
      <MegaMenu/>
      <HeroAbout/>
      <SectionOne/>
      <Experience/>
      <div className='spacer'>
      </div>
      <SectionThree/>
      <Parters/>
      <WhatWeDo/>
      <Contact/>
    <style jsx>{`
      .spacer{
        width: 100%;
        height: 40vh;
        background-color: black;
      }
      @media screen and (min-width: 760px){
        .spacer{
          display: none;
        }
      }
    `}</style>
    </div>
    </>
  )
}

export default aboutUs