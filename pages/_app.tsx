import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { useLayoutEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import PageLoader from "../Components/PageLoader/PageLoader";
import Loader from "@/Components/Loader";
import Footer from "@/Components/Footer";
import Head from "next/head";

import { AppProvider } from "@/Context/AppContext";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Monument, Helvetica Neue, sans-serif;
    scroll-behavior: auto !important;
    @font-face {
      font-family: 'Monument';
      src: url('assets/PPMonumentExtended-Black.woff') format('woff');
      font-weight: bold;
      font-display: block;
    }
    @font-face {
      font-family: 'Monument';
      src: url('assets/PPMonumentExtended-Regular.woff') format('woff');
      font-weight: 600;
      font-display: block;
    }
    @font-face {
      font-family: 'Monument';
      src: url('assets/PPMonumentExtended-Light_1.woff') format('woff');
      font-weight: 200;
      font-display: block;
    }
    background: rgb(0,0,0);
    overflow-x: hidden;
  }
  body::-webkit-scrollbar{
    width: 0px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }


`;

export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);

  const [elapsedTime, setElapsedTime] = useState(0);
  const [loader, setLoader] = useState(true);

  // ========= EN ESTE useLayoutEffect ESTA EL PROBLEMA DEL SCROLL ==========
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => clearTimeout(timeout);
  }, []);

  console.log(
    `%c
       _____ __   _______  ________   _______  _______       ________  ________  ________   ______    ________ _______  
      ╱╱   ╱   ╲╱╱       ╲╱    ╱   ╲╱╱       ╲╱       ╲╲    ╱        ╲╱        ╲╱    ╱   ╲_╱      ╲╲ ╱        ╱       ╲╲
     ╱╱        ╱╱        ╱         ╱╱        ╱    /    ╱╱    ╱     __╱  _    __╱         ╱   /    ╱╱_╱      ╱╱   /    ╱╱
    ╱         ╱       __╱        ╱╱        _╱         ╱   ╱--        ╱╱     ╱ ╱        ╱╱   /     ╱╱         ╱         ╱ 
    ╲__╱_____╱╲________╱╲_______╱╱╲____╱___╱╲________╱    ╲_______╱╱ ╲_____╱╱ ╲_______╱╱╲________╱ ╲╲_______╱╲________╱  

                                            NEURO STUDIO - DIGITAL AGENCY
                                                neuroexperience.com.ar
    `,
    `font-family: monospace`
  );

  return (
    <>
      <AppProvider>
        <Head>
          {/* -----------> English */}
          <title>Neuro | Digital Marketing Agency and Web Design</title>
          <meta
            name="description"
            content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence."
          />
          <meta
            name="keywords"
            content="Digital Marketing, Web Design, Web Development, Wordpress, React, Javascript, Typescript, Animation, 3D Design"
          />
          <meta
            property="og:title"
            content="Neuro - Digital Marketing and Web Design"
          />
          <meta
            property="og:description"
            content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence."
          />
          <meta
            property="twitter:title"
            content="Neuro - Digital Marketing and Web Design"
          />
          <meta
            property="twitter:description"
            content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence."
          />

          {/* -----------> Spanish */}
          {/* <title>Neuro | Marketing Digital y Diseño Web</title> */}
          <meta
            name="description"
            content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio."
          />
          <meta
            name="keywords"
            content="marketing digital, diseño web, desarrollo web, Wordpress, React, Javascript, Typescript, animación, diseños 3D"
          />
          <meta
            property="og:title"
            content="Neuro - Marketing Digital y Diseño Web"
          />
          <meta
            property="og:description"
            content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio."
          />
          <meta
            property="twitter:title"
            content="Neuro - Marketing Digital y Diseño Web"
          />
          <meta
            property="twitter:description"
            content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio."
          />

          {/* -----------> Others META */}
          <meta charSet="UTF-8" />

          <meta property="og:image" content="/metaimage.png" />
          <meta property="twitter:image" content="/metaimage.png" />
          <meta property="og:url" content="https://neuroexperience.com.ar" />

          <meta name="author" content="Neuro Experience"></meta>

          <meta httpEquiv="Content-Language" content="en,es"></meta>
          <meta name="language" content="en,es"></meta>
          <meta name="robots" content="index,follow"></meta>
          <meta name="googlebot" content="index,follow"></meta>
          <meta name="bingbot" content="index,follow"></meta>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Loader loader={loader} />
        <PageLoader />
        <GlobalStyle />
        <Component
          {...pageProps}
          time={elapsedTime}
          setTime={setElapsedTime}
          loader={loader}
        />
        <Footer />
      </AppProvider>
    </>
  );
}
