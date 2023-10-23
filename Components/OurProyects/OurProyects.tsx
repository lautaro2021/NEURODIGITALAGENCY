import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";

import Image from "next/image";

function LateralScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const section: any = useRef(null);
  const section2: any = useRef(null);
  const strokeText: any = useRef(null);
  const ctx2Ref: any = useRef(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoverSection, setHoverSection] = useState(false);

  const handleHover = () => {
    setHoverSection(true);
  };
  const handleLeave = () => {
    setHoverSection(false);
  };

  useLayoutEffect(() => {
    const width = window?.innerWidth;

    const handleMousePosition = (event: any) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePosition);

    const contentDiv = gsap.utils.toArray("#proyects-content");
    const sectionDimensions = section.current.offsetWidth;

    const ctx = gsap.context(() => {
      const t2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: section2.current,
            start: "top-=1000 top",
            end: "+=3000%",
            scrub: 10,
            toggleActions: "play none reverse none",
          },
        })
        .fromTo(strokeText.current, { x: "0%" }, { x: "100%", duration: 20 });
    });

    if (width > 1000) {
      ctx2Ref.current = gsap.context(() => {
        gsap.to(contentDiv, {
          xPercent: -100 * (contentDiv.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#proyects-scroll-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=" + sectionDimensions * 2,
          },
        });
      });
    }

    return () => {
      ctx2Ref.current?.revert();
      ctx.revert();
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return (
    <>
      {/* title section */}
      <section ref={section2}>
        <h2 className="stroke-text">
          <span ref={strokeText}>
            OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR
            PROYECTS OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR
            PROYECTS OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR PROYECTS OUR
            PROYECTS
          </span>
        </h2>
        <style jsx>{`
          section {
            width: 100vw;
            height: 50vh;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(0, 0, 0);
            font-family: "Monument";
            position: relative;
            font-size: 100px;
            margin-top: 3px;
          }
          h2 {
            color: white;
            font-weight: 600;
            overflow: hidden;
            margin: 0;
          }
          .stroke-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
          }
          .stroke-text span {
            display: inline-block;
            white-space: nowrap;
            font-size: 250px;
            font-weight: 800;
            color: white;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            opacity: 0.3;
          }
          span {
            display: inline-block;
          }
          @media only screen and (max-width: 3000px) {
            .stroke-text span {
              font-size: 180px;
            }
          }
          @media only screen and (max-width: 2300px) {
            .stroke-text span {
              font-size: 130px;
            }
          }
          @media only screen and (max-width: 1950px) {
            .stroke-text span {
              font-size: 110px;
            }
          }
          @media screen and (max-width: 1020px) {
            section {
              height: 30vh;
            }
            .stroke-text span {
              font-size: 70px;
            }
          }
          @media screen and (max-width: 710px) {
            .stroke-text span {
              font-size: 50px;
            }
          }
        `}</style>
      </section>
      {/* scroll section */}
      <div
        id="proyects-scroll-section"
        ref={section}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        {hoverSection ? (
          <div id="cursor">
            <BsArrowUpRight />
          </div>
        ) : null}

        <a
          id="proyects-content"
          href="https://clinicaveterinaria24hs.com.ar/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="container">
            <div className="proyect-background">
              <div className="text-container">
                <label>
                  <hr></hr>Web development
                </label>
                <h3>DiGiovanni</h3>
                <span>Veterinary Clinic</span>
              </div>
              <div className="proyect-img-container">
                <Image
                  src="/Proyects/veterinaria.jpg"
                  fill
                  alt="veterinaria proyect social media and branding"
                  priority
                  blurDataURL="/Proyects/veterinaria.jpg"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </a>
        <a
          id="proyects-content"
          href="https://www.behance.net/neurostudio"
          rel="noreferrer"
          target="_blank"
        >
          <div className="container">
            <div className="proyect-background">
              <div className="text-container">
                <label>
                  <hr></hr>Social media/Branding
                </label>
                <h3>Bastet</h3>
                <span>Pub</span>
              </div>
              <div className="proyect-img-container">
                <Image
                  src="/Proyects/bastetimg2.jpg"
                  fill
                  alt="bastetbg proyect social media and branding"
                  priority
                  blurDataURL="/Proyects/bastetimg2.jpg"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </a>
        <a
          id="proyects-content"
          href="https://www.behance.net/neurostudio"
          rel="noreferrer"
          target="_blank"
        >
          <div className="container">
            <div className="proyect-background">
              <div className="text-container">
                <label>
                  <hr></hr>Social media/Branding
                </label>
                <h3>Epifania</h3>
                <span>Restaurant</span>
              </div>
              <div className="proyect-img-container">
                <Image
                  src="/Proyects/epifaniaimg2.jpg"
                  fill
                  alt="epifaniabg restaurant proyect social media and branding"
                  priority
                  blurDataURL="/Proyects/epifaniaimg2.jpg"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </a>
        <a
          id="proyects-content"
          href="https://www.behance.net/neurostudio"
          rel="noreferrer"
          target="_blank"
        >
          <div className="container">
            <div className="proyect-background">
              <div className="text-container">
                <label>
                  <hr></hr>Social media/Web
                </label>
                <h3>Budapestt</h3>
                <span>Men's Apparel</span>
              </div>
              <div className="proyect-img-container">
                <Image
                  src="/Proyects/budaimg.jpg"
                  fill
                  alt="budabg web design and social media"
                  priority
                  blurDataURL="/Proyects/budaimg2.jpg"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </a>
        <a
          id="proyects-content"
          href="https://www.behance.net/neurostudio"
          rel="noreferrer"
          target="_blank"
        >
          <div className="container">
            <div className="proyect-background">
              <div className="text-container">
                <label>
                  <hr></hr>Social media/Branding
                </label>
                <h3>La Mantis</h3>
                <span>Grow Shop</span>
              </div>
              <div className="proyect-img-container">
                <Image
                  src="/Proyects/LaMantisimg.jpg"
                  fill
                  alt="mantisbg proyect social media and branding"
                  priority
                  blurDataURL="/Proyects/LaMantisimg.jpg"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </a>
        <a
          id="proyects-content"
          href="https://www.behance.net/neurostudio"
          rel="noreferrer"
          target="_blank"
        >
          <div className="container">
            <div className="proyect-background">
              <div className="text-container">
                <label>
                  <hr></hr>Social media/Web/Branding
                </label>
                <h3>Agustines</h3>
                <span>Clothing</span>
              </div>
              <div className="proyect-img-container">
                <Image
                  src="/Proyects/agustinesimg.jpg"
                  fill
                  alt="agustinestbg web design, social media and branding"
                  priority
                  blurDataURL="/Proyects/agustinesimg.jpg"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </a>
        <style jsx>{`
        #proyects-scroll-section{
            width: auto !important;
            height: 100vh;
            background: black;
            display: flex;
            background: rgb(0,0,0); 
            font-family: 'Monument';
            cursor: pointer;
        }
        #cursor{
            position: absolute;
            top: ${`${coords.y}px`};
            left: ${`${coords.x}px`};
            width: 120px;
            height: 120px;
            background-color: rgba(161, 161, 161, 0.4);
            z-index: 1000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            animation: cursorappear .5s ease;
        }
        @keyframes cursorappear{
            from{
                width: 0px;
                height: 0px;
            }
            to{
                width: 120px;
                height: height: 120px;
            }
        }
        #proyects-content{
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
            font-size: 180px;
            margin: 0 !important;
            z-index: 1000;
        }
        .text-container label{
            font-size: 32px;
            color: #1966AF;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 25px;
        }
        hr{
            width: 50px;
            height: 1px;
        }
        .proyect-background{
            width: 60%;
            height: 100%;
            margin: 0 !important;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .background-image{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .proyect-img-container{
            position: relative;
            width: 100%;
            height: 100%;
        }
        span{
            color: grey;
            font-weight: bold;
            font-size: 24px;
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
            .text-container span{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 1100px){
            .proyect-background{
                width: 70%;
            }
            .background-image{
                filter: brightness(0.7);
            }
        }
        @media screen and (max-width: 1000px){
            #proyects-scroll-section{
                overflow-x: scroll;
                border: 2px solid red;
            }
            .text-container{
                z-index: 500;
            }
            #proyects-content{
                width: 90vw !important;
                width: 90vw;
            }
            #cursor{
                display: none;
            }
        }
        @media screen and (max-width: 900px){
            .text-container{
                top: 80%;
                padding: 15px;
                background-color: rgba(0, 0, 0, 0.8);
                border-radius: 0px 15px 15px 0px;
            }
            .proyect-background{
                width: 100%;
                height: 85%;
            }
            .text-container label{
                font-size: 22px;
            }
        }
        @media screen and (max-width: 780px){
            .text-container h3{
                font-size: 70px;
            }
            .text-container span{
                font-size: 18px;
            }
            .text-container label{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 670px){
            .text-container h3{
                font-size: 60px;
            }
            hr{
                display: none;
            }
        }
        @media screen and (max-width: 550px){
            .text-container h3{
                font-size: 50px;
            }
            .proyect-img-container{
                object-fit: cover;
            }
        }
        @media screen and (max-width: 470px){
            .text-container h3{
                font-size: 45px;
            }
            .text-container label{
                font-size: 14px;
            }
        }
        @media screen and (max-width: 420px){
            .text-container{
                padding: 15px 15px 15px 5px;
            }
            .text-container h3{
                font-size: 38px;
            }
        }
    `}</style>
      </div>
    </>
  );
}

export default LateralScroll;
