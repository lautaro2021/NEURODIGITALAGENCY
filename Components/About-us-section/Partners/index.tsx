import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {
  gsap.registerPlugin(ScrollTrigger);

  const section = useRef(null);
  const title = useRef(null);

  const phrase = 'they trust us'

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline({
        scrollTrigger: section.current,
        start: '-=20%',
      })
      .fromTo('#partner-title', {opacity: 0}, {opacity: 1, duration: 1}, "anim")
      .fromTo('#partner-span', {opacity: 0}, {opacity: 1, duration: 0.25, stagger: 0.1}, "anim")

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: '-=10%',
        }
      })
      .fromTo('#brand-img', {opacity: 0}, {opacity: 1, duration: 2, stagger: 0.1, ease: 'power'})
    })

    return () => ctx.revert();

  }, [])

  return (
    <section ref = {section}>
      <div className='partner-title-cont'>
        <div className='label-container'>
          <hr></hr>
          <label>{phrase.split('').map((letter: string, i:number) => <span key = {i} id = 'partner-span'>{letter}</span>)}</label>
        </div>
        <h2 id = 'partner-title'>Our Partners</h2>
      </div>
      <div className='grid-brands'>
        <img src = '/brands/ag.png' alt='agBrand' id = 'brand-img'/>
        <img src = '/brands/alma.png' alt='almaBrand' id = 'brand-img'/>
        <img src = '/brands/lylautomotores.png' alt='lylautomotoresBrand' id = 'brand-img'/>
        <img src = '/brands/bimed.png' alt='bimedBrand' id = 'brand-img'/>
        <img src = '/brands/bonaparte.png' alt='bonaparteBrand' id = 'brand-img'/>
        <img src = '/brands/delsol.png' alt='delsolBrand' id = 'brand-img'/>
        <img src = '/brands/karoma.png' alt='karomaBrand' id = 'brand-img'/>
        <img src = '/brands/bastet.png' alt='bastetBrand' id = 'brand-img'/>
        <img src = '/brands/lamantis.png' alt='lamantisBrand' id = 'brand-img'/>
        <img src = '/brands/tyson.png' alt='tysonBrand' id = 'brand-img'/>
        <img src = '/brands/baleis.png' alt='baleisBrand' id = 'brand-img'/>
        <img src = '/brands/vaticano.png' alt='vaticanoBrand' id = 'brand-img'/>
        <img src = '/brands/vr.png' alt='vrBrand' id = 'brand-img'/>
        <img src = '/brands/budapest.png' alt='budapestBrand' id = 'brand-img'/>
        <img src = '/brands/lyl.png' alt='lylBrand' id = 'brand-img'/>
      </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 150vh;
            font-size: 120px;
            color: white;
            padding: 120px;
            background-color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .partner-title-cont{
          width: 100%;
          display: flex;
          flex-direction: column;
          line-height: 110px;
        }
        .label-container{
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 25px;
        }
        hr{
          width: 50px;
          height: 1px;
          margin: 0 !important;
          padding: 0 !important;
        }
        label{
          font-size: 32px;
          color: #1966AF;
          font-weight: 600;
        }
        h2{
          margin: 0 !important;
        }
        .grid-brands{
          margin-top: 10vh;
          width: 80%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-left: 15px;
        }
        img{
          width: 300px;
          height: 300px;
          margin: 0px 25px 0px 25px;
        }
        img:hover{
          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(169deg) brightness(152%) contrast(101%);
          transition: .3s;
        }
        @media screen and (max-width: 2100px){
          h2{
            font-size: 150px;
          }
        }
        @media screen and (max-width: 1920px){
          h2{
            font-size: 135px;
          }
          img{
            width: 250px;
            height: 250px;
          }
        }
        @media screen and (max-width: 1700px){
          label{
            font-size: 28px;
          }
          h2{
            font-size: 120px;
          }
          img{
            width: 230px;
            height: 230px;
          }
        }
        @media screen and (max-width: 1600px){
          img{
            width: 200px;
            height: 200px;
          }
        }
        @media screen and (max-width: 1400px){
          h2{
            font-size: 105px;
          }
          img{
            width: 170px;
            height: 170px;
          }
        }
        @media screen and (max-width: 1200px){
          h2{
            font-size: 95px;
          }
          img{
            width: 150px;
            height: 150px;
          }
          .grid-brands{
            width: 100%;
          }
        }
        @media screen and (max-width: 1100px){
          section{
            padding: 120px 70px;
          }
        }
        @media screen and (max-width: 1000px){
          label{
            font-size: 25px;
          }
          h2{
            font-size: 82px;
          }
        }
        @media screen and (max-width: 950px){
          .partner-title-cont{
            line-height: 80px;
          }
          img{
            width: 130px;
            height: 130px;
          }
        }
        @media screen and (max-width: 800px){
          h2{
            font-size: 75px;
          }
          label{
            font-size: 22px;
          }
        }
        @media screen and (max-width: 700px){
          h2{
            font-size: 70px;
          }
        }
        @media screen and (max-width: 680px){
          section{
            padding: 100px 40px;
          }
        }
        @media screen and (max-width: 630px){
          h2{
            font-size: 60px;
          }
          label{
            font-size: 18px;
          }
          hr{
            width: 25px;
          }
          img{
            width: 115px;
            height: 115px;
          }
        }
        @media screen and (max-width: 500px){
          h2{
            font-size: 50px;
          }
          section{
            padding: 80px 15px;
            height: 180vh;

          }
        }
    `}</style>
    </section>
  )
}

export default index