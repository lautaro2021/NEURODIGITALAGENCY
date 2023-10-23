import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {
    gsap.registerPlugin(ScrollTrigger);

    const sectionTwo = useRef(null);
    const sectionTwoH2 = useRef(null);

    const phraseOne = 'different';


    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            // Animacion segunda seccion
            const t2 = gsap.timeline({
                scrollTrigger: {
                trigger: sectionTwo.current,
                start: '-=100%',
                }
            })
            .fromTo(sectionTwoH2.current, {x: '-300%', opacity: 0}, {x: '0%', opacity: 1, ease: 'power', duration: 0.75})
            .fromTo('#about-us-information-span', {opacity: 0}, {opacity: 1, stagger: 0.05, duration: 1})
        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref = {sectionTwo}>
    <div className=''>
      <h2 ref = {sectionTwoH2}>We do things<br/>
        <span>{phraseOne.split('').map((letter:string) => <span id = 'about-us-information-span'>{letter}</span>)}</span>
      </h2>
      {/* <p>We are obsessed with doing things right, and that is our main objective and driving force. 
We want our clients to stand out from the competition, to have a different, innovative and adapted service to their business.</p> */}
    </div>    
  <style jsx>{`
    section{
      width: 100vw;
      height: 90vh;
      background-color: #000108;
      padding: 0px 120px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    div{
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
      gap: 20vw;
    }
    h2{
      margin: 0 !important;
      font-size: 120px;
      padding: 0;
    }
    span{
      margin: 0 !important;
      color: #1966AF;
      font-size: 200px;
    }
    p{
      height: 100%;
      font-size: 30px;
      padding: 50px;
      border-radius: 20px;
      background-color: #38BCDC;
      color: black;
      font-weight: bold;
    }
  `}</style>
  </section>
  )
}

export default index