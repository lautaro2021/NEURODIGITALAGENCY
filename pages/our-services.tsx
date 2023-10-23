import React from 'react'
import Head from 'next/head'

import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar/index2';
import Hero from '../Components/OurServices-section/Hero'
import Information from '../Components/OurServices-section/Info';
import Plans2 from '../Components/OurServices-section/Plans/index2';
import Contact from '../Components/Contact';
import KnowNeuro from '@/Components/OurServices-section/knowNeuro';

function services() {
  return (
    <>
    <Head>
      {/* -----------> English */}
      <title>Neuro | Discover our services. We do many things.</title>
      <meta name="description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="og:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="og:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="twitter:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="twitter:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      
      {/* -----------> Spanish */}
      {/* <title>Neuro |Discover our services. We do many things.</title> */}
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
    <Hero/>
    <Information/>
    <Plans2/>
    <KnowNeuro/>
    <Contact/>
    </>
  )
}

export default services