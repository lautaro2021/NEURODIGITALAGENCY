import React, {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function index() {
    gsap.registerPlugin(ScrollTrigger);

    const sectionOne = useRef(null);
    const sectionOneParraf = useRef(null);
    const image = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animacion primer seccion
            const t1 = gsap.timeline({
                scrollTrigger: {
                trigger: sectionOne.current,
                start: '-=100%',
                }
            })
            .fromTo(sectionOneParraf.current, {opacity: 0}, {opacity: 1, duration: 1, ease: 'power'}, "key1")
        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref = {sectionOne}>
        <p ref = {sectionOneParraf}>
          Neuro is a full digital agency focused on user experience and exclusivity
        </p>
  <style jsx>{`
      section{
          width: 100vw;
          height: 50vh;
          background-color: black;
          padding: 0px 120px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
        p{
            color: white;
            font-size: 48px;
            font-weight: 600;
            width: 50%;
            position: relative;
        }
        @media screen and (max-width: 1920px){
            p{
                font-size: 40px;
            }
        }
        @media screen and (max-width: 1800px){
            p{
                font-size: 35px;
            }
        }
        @media screen and (max-width: 1620px){
            p{
                font-size: 30px;
                width: 55%;
            }
        }
        @media screen and (max-width: 1320px){
            p{
                width: 60%;
            }
        }
        @media screen and (max-width: 1230px){
            p{
                width: 65%;
            }
        }
        @media screen and (max-width: 1150px){
            p{
                font-size: 26px;
            }
        }
        @media screen and (max-width: 1100px){
            section{
                padding: 0px 70px;
            }
            p{
                width: 70%;
            }
        }
        @media screen and (max-width: 900px){
            p{
                width: 80%;
            }
        }
        @media screen and (max-width: 780px){
            p{
                width: 100%;
            }
        }
        @media screen and (max-width: 660px){
            p{
                font-size: 22px;
            }
        }
        @media screen and (max-width: 560px){
            section{
                padding: 0px 40px;
            }
        }
  `}</style>
  </section>
  )
}

export default index