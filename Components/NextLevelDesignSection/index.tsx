import React, { useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'

function VerticalText() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const timelaneOne = gsap.timeline({
        scrollTrigger:{
            trigger: sectionRef.current,
            start: 'top-=400 top',
        }
    })
    .fromTo('#next-design-section-animate', {opacity: 0, x: '100%'}, {opacity: 1, x: '0%', duration: 0.75, stagger: 0.15})

}, [])


  return (
    <section ref = {sectionRef}>
      <div>
        <h2>
          <span id = 'next-design-section-animate'>Next</span>
        </h2>
        <h2>
          <span id = 'next-design-section-animate' className='color1'>Level</span>  
        </h2>
      </div>
      <div>
        <h2>
          <span id = 'next-design-section-animate'>Of</span>
        </h2>
        <h2>
          <span id = 'next-design-section-animate' className='color1'>Design</span>
        </h2>
      </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 0px 100px;
        }
        div{
          height: 100%;
          width: 50%;
          font-size: 100px;
          color: white;
        }
        div:first-child{
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
        }
        .color1{
          color: #1966AF;
        }
        div:last-child{
          display: flex;
          flex-direction: column;
          align-items: end;
          justify-content: center;
          text-align: end;
        }
        div h2{
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        div h2 span{
          display: block;
          font-family: 'Monument';
          font-weight: 800;
        }
        .color1{
          color: #38BCDC;
        }
        @media screen and (max-width: 2200px){
          h2{
            font-size: 120px;
          }
        }
        @media screen and (max-width: 1920px){
          h2{
            font-size: 100px;
          }
        }
        @media screen and (max-width: 1600px){
          h2{
            font-size: 90px;
          }
          section{
            padding: 0px 70px;
          }
        }
        @media screen and (max-width: 1350px){
          h2{
            font-size: 75px;
          }
        }
        @media screen and (max-width: 1000px){
          section{
            flex-direction: column;
            justify-content: start;
          }
          h2{
            width: 100%;
          }
          div{
            width: 100%;
          }
        }
        @media screen and (max-width: 710px){
          span{
            font-size: 70px;
          }
          section{
            padding: 70px 40px;
          }
        }
        @media screen and (max-width: 560px){
          section{
            padding: 0px 15px;
          }
        }
        @media screen and (max-width: 450px){
          span{
            font-size: 60px;
          }
        }
        @media screen and (max-width: 400px){
          span{
            font-size: 52px;
          }
        }
    `}</style>
    </section>
  )
}

export default VerticalText