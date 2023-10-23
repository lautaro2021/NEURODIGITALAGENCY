import React, { useState, useLayoutEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import RandomCharacter from "../randomCharacters";
import gsap from "gsap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import useWindowDimensions from "../SizeController";

import CustomLink from "../customLink";
import { AppContext } from "@/Context/AppContext";

function MegaMenu() {
  const { width } = useWindowDimensions();

  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [counter, setCounter] = useState(0);

  const { delay } = useContext(AppContext);

  const timeline: any = useRef();
  const megamenu = useRef(null);
  const sliderRef: any = useRef(null);

  const arrayOfProyects = [
    { img: "/Proyects/veterinaria.jpg", name: "DIGIOVANNI" },
    { img: "/Proyects/bastetimg2.jpg", name: "BASTET" },
    { img: "/Proyects/epifaniaimg2.jpg", name: "EPIFANIA" },
    { img: "/Proyects/budaimg.jpg", name: "BUDAPEST" },
    { img: "/Proyects/LaMantisimg.jpg", name: "LA MANTIS" },
    { img: "/Proyects/agustinesimg.jpg", name: "AGUSTINES" },
  ];

  useLayoutEffect(() => {
    // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

    const ctx = gsap.context(() => {
      gsap.set(".container-div-navbar", { opacity: 0 });
      gsap.to(".container-div-navbar", {
        opacity: 1,
        delay: delay + 1,
        duration: 1,
        ease: "power",
      });

      timeline.current = gsap.timeline({ paused: true });

      if (width > 820) {
        timeline.current.fromTo(
          megamenu.current,
          {
            y: "100%",
            opacity: 0.6,
            borderRadius: "100% 100% 0% 0%",
            display: "none",
          },
          {
            opacity: 1,
            y: "0%",
            borderRadius: "0% 0% 0% 0%",
            display: "",
            duration: 0.5,
          }
        );
      } else if (width < 820 && width > 500) {
        timeline.current.fromTo(
          megamenu.current,
          {
            y: "100%",
            opacity: 0.6,
            borderRadius: "50% 50% 0% 0%",
            display: "none",
          },
          {
            opacity: 1,
            y: "0%",
            borderRadius: "0% 0% 0% 0%",
            display: "",
            duration: 0.5,
          }
        );
      } else {
        timeline.current.fromTo(
          megamenu.current,
          {
            y: "100%",
            opacity: 0.6,
            borderRadius: "30% 30% 0% 0%",
            display: "none",
          },
          {
            opacity: 1,
            y: "0%",
            borderRadius: "0% 0% 0% 0%",
            display: "",
            duration: 0.5,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleMenu = () => {
    !menu ? timeline.current.play() : timeline.current.reverse();
    setMenu(!menu);
  };

  const handleAnimationIn = (event: any) => {
    gsap.to(event.target, { borderRadius: "0% 0% 0% 0%", duration: 0.5 });
  };

  const handleAnimationOut = (event: any) => {
    if (width > 1700) {
      gsap.to(event.target, { borderRadius: "100% 100% 0% 0%", duration: 0.5 });
    } else {
      gsap.to(event.target, { borderRadius: "40% 40% 0% 0%", duration: 0.5 });
    }
  };

  const handleUpCounter = () => {
    if (counter === arrayOfProyects.length - 1) return setCounter(0);
    setCounter((prevValue: number) =>
      prevValue < arrayOfProyects.length - 1 ? prevValue + 1 : prevValue
    );
  };

  const handleDownCounter = () => {
    if (counter === 0) return setCounter(arrayOfProyects.length - 1);
    setCounter((prevValue: number) =>
      prevValue > 0 ? prevValue - 1 : prevValue
    );
  };

  return (
    <section>
      <div className="container-div-navbar" onClick={handleMenu}>
        <div>
          <hr></hr>
          {!menu ? <hr></hr> : null}
        </div>
        <label style={{ cursor: "pointer" }}>{!menu ? "Menu" : "Close"}</label>
      </div>
      <section
        style={{ position: "fixed", top: 0, left: 0 }}
        id="megamenu"
        ref={megamenu}
      >
        <div className="megamenu-leftdiv">
          <div className="megamenu-items">
            <a href="https://www.behance.net/neurostudio" target={"_blank"}>
              <RandomCharacter wordPassed="Behance" megamenu={true} />
            </a>
          </div>
          <div className="megamenu-items">
            <CustomLink href="/our-services">
              <RandomCharacter wordPassed="Our Services" megamenu={true} />
            </CustomLink>
          </div>
          <div className="megamenu-items">
            <CustomLink href="/about-us">
              <RandomCharacter wordPassed="About Us" megamenu={true} />
            </CustomLink>
          </div>
          <div className="megamenu-items">
            <CustomLink href="/contact-us">
              <RandomCharacter wordPassed="Contact Us" megamenu={true} />
            </CustomLink>
          </div>
        </div>

        <div className="megamenu-rightdiv">
          <div className="megamenu-img-container" ref={sliderRef}>
            {arrayOfProyects.map((img: any, i: number) => (
              <>
                {counter === i && (
                  <a
                    href="https://www.behance.net/neurostudio"
                    target={"_blank"}
                    onMouseLeave={handleAnimationOut}
                    onMouseOver={handleAnimationIn}
                  >
                    <img
                      src={arrayOfProyects[counter].img}
                      key={i}
                      alt={img.name}
                      id="megamenu-img"
                      placeholder="blur"
                      decoding="async"
                      loading="lazy"
                    />
                    {counter === i && <h5>{img.name}</h5>}
                  </a>
                )}
              </>
            ))}
          </div>

          <div className="slider-container">
            <button onClick={handleDownCounter}>
              <FaArrowLeft style={{ width: "35px", height: "35px" }} />
            </button>
            <label>
              See some of our projects
              <span>
                {counter + 1} - {arrayOfProyects.length}
              </span>
            </label>
            <button onClick={handleUpCounter}>
              <FaArrowRight style={{ width: "35px", height: "35px" }} />
            </button>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container-div-navbar {
          position: fixed;
          top: 6%;
          right: 5%;
          color: white;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 10px 30px;
          border-radius: 100px;
          background-color: rgba(50, 50, 50, 0.5);
          cursor: pointer;
          z-index: 2100;
          opacity: 1;
          font-family: "Helvetica", sans-serif;
          font-size: 24px;
        }
        hr {
          width: 70px;
          margin: 5px;
        }
        #megamenu {
          background-color: #171718;
          z-index: 2000;
          display: flex;
          overflow: hidden;
          position: relative;
          max-height: 100vh;
          height: 100%;
          width: 100vw;
        }
        .megamenu-leftdiv {
          border-right: 1px solid grey;
        }
        .megamenu-leftdiv,
        .megamenu-rightdiv {
          height: 100%;
          width: 50%;
        }
        .megamenu-leftdiv {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .megamenu-items {
          width: 100%;
          padding: 50px 0px 50px 150px;
          border-top: 1px solid grey;
        }
        .megamenu-items:last-child {
          border-bottom: 1px solid grey;
        }
        h4 {
          font-size: 70px;
          font-weight: bold;
          color: white;
          margin: 0;
        }
        .megamenu-img-container {
          width: 100%;
          height: 85%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .megamenu-img-container a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        img {
          border-radius: ${width > 1700 ? "100% 100% 0% 0%" : "40% 40% 0% 0%"};
          cursor: pointer;
          margin: 0 !important;
          object-fit: cover;
          min-width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0%);
          filter: brightness(0.6);
          animation: mageImgContAppear 0.7s ease;
          z-index: 0;
        }
        @keyframes mageImgContAppear {
          from {
            opacity: 0.5;
            border-radius: 100%;
            top: none;
            bottom: 0;
            min-width: 50%;
            width: 50%;
            height: 3%;
          }
          to {
            opacity: 1;
            width: 100%;
            min-width: 100%;
            height: 100%;
          }
        }
        h5 {
          position: relative;
          font-size: 100px;
          color: #ffffff90;
          z-index: 2000;
          // animation: textMegaImgContAppear .5s ease;
        }
        @keyframes textMegaImgContAppear {
          from {
            opacity: 0.7;
          }
          to {
            opacity: 1;
          }
        }
        a {
          margin: 0 !important;
        }
        .slider-container {
          width: 100%;
          height: 15%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        button {
          background: none;
          border: none;
          color: white;
          height: 100%;
          width: 20%;
          cursor: pointer;
        }
        button:not(:last-child) {
          border-right: 1px solid grey;
        }
        button:last-child {
          border-left: 1px solid grey;
        }
        .slider-container label {
          color: grey;
          font-size: 22px;
          font-weight: bold;
          text-align: center;
        }
        .slider-container label span {
          display: block;
          color: white;
        }
        @media screen and (max-height: 1080px) {
          .container-div-navbar {
            padding: 8px 20px;
            font-size: 18px;
          }
          hr {
            width: 45px;
          }
          .megamenu-items {
            padding: 30px 0px 30px 120px;
          }
        }
        @media screen and (max-width: 1920px) {
          h5 {
            font-size: 70px;
          }
        }
        @media screen and (max-width: 1700px) {
          .megamenu-items {
            padding: 30px 0px 30px 70px;
          }
          .slider-container label {
            font-size: 18px;
          }
          h5 {
            font-size: 60px;
          }
        }
        @media screen and (max-width: 1350px) {
          .megamenu-rightdiv {
            display: none;
          }
          .megamenu-leftdiv {
            width: 80%;
          }
        }
        @media screen and (max-width: 1100px) {
          .megamenu-items {
            padding: 20px 0px 20px 70px;
          }
        }
        @media screen and (max-width: 840px) {
          .megamenu-leftdiv {
            width: 100%;
          }
        }
        @media screen and (max-width: 800px) {
          .container-div-navbar label {
            display: none;
          }
          .container-div-navbar {
            height: 48px;
            padding: 0px 15px;
          }
          hr {
            width: 40px;
          }
        }
        @media screen and (max-width: 700px) {
          .megamenu-items {
            padding: 20px 0px 20px 40px;
          }
        }
        @media screen and (max-width: 540px) {
          .megamenu-items {
            padding: 20px 0px 20px 15px;
          }
        }
        @media screen and (max-width: 520px) {
          hr {
            width: 30px;
            margin: 0;
          }
          .container-div-navbar {
            height: 30px;
          }
          .container-div-navbar div {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
          }
        }
        @media screen and (max-width: 380px) {
          .megamenu-items {
            padding: 20px 0px 20px 15px;
          }
        }
      `}</style>
    </section>
  );
}

export default MegaMenu;
