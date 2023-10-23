import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function InfoSection() {
    gsap.registerPlugin(ScrollTrigger);

    const titleSection = useRef(null);
    const vertical:any = useRef(null);
    const title:any = useRef(null);
    
    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            const t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: titleSection.current,
                    start: 'top-=200% top',
                }
            })
            .fromTo(title.current, {y: '100%'}, {y: '0%', opacity: 1, ease: 'power', duration: .25})

            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: vertical.current,
                    start: 'top-=50% top',
                }
            })
            .fromTo('#divs-info-section', {opacity: 0}, {opacity: 1, stagger: 0.25, duration: 1, ease: 'power'})
        })

        return () => ctx.revert();

    }, [])

  return (
    <>
    <section ref = {titleSection}>
        <div>
            <h2 ref = {title}>How we work</h2>
        </div>
    <style jsx>{`
        section{
            color: white;
            width: 100vw;
            height: 30vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        div{
            width: 80%;
            display: flex;
            overflow: hidden;
        }
        h2{
            font-size: 160px;
            font-weight: 900;
            line-height: 90%;
            margin: 0;
            opacity: 0;
        }
        span{
            display: block;
        }
        @media screen and (max-width: 2400px){
            h2{
                font-size: 140px;
            }
        }
        @media screen and (max-width: 2100px){
            h2{
                font-size: 120px;
            }
        }
        @media screen and (max-width: 1400px){
            h2{
                font-size: 105px;
            }
        }
        @media screen and (max-width: 1200px){
            div{
                width: 100%;
            }
            section{
                padding: 0px 70px;
            }
        }
        @media screen and (max-width: 1050px){
            h2{
                font-size: 82.5px;
            }
        }
        @media screen and (max-width: 850px){
            h2{
                font-size: 70px;
            }
        }
        @media screen and (max-width: 770px){
            section{
                padding: 0px 40px;
            }
        }
        @media screen and (max-width: 650px){
            h2{
                font-size: 60px;
            }
        }
        @media screen and (max-width: 550px){
            section{
                padding: 0px 15px;
            }
        }
    `}</style>
    </section>
    <section id = 'info-section' ref = {vertical}>
        <div className='container-info'>
            <div className='one' id ='divs-info-section'>
                <h4><span>01.</span> Meet the client</h4>
                <p>Stage one, getting to know each other. This is the fundamental stage that allows us to get to know the client, what their objectives are and where they want to go with their brand.</p>
            </div>
            <div className='two' id ='divs-info-section'>
                <h4><span>02.</span> Planification</h4>
                <p>In the planning stage, and with the information gathered in the first contact, we establish together with the client the basis of how we are going to work from now on.</p>
            </div>
            <div className='three' id ='divs-info-section'>
                <h4><span>03.</span> Development</h4>
                <p>With all the information ready, the development team begins its work. On the other hand, the close connection with the customer is maintained to adjust the whole development as required.</p>
            </div>
            <div className='four' id ='divs-info-section'>
                <h4><span>04.</span> Launch</h4>
                <p>Before concluding the development, the last checks and adjustments are made together with the client. Everything ready? We launch!</p>
            </div>
        </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
        section{
            width: 100vw;
            height: min-content;
            color: white;
            font-family: 'Monument';
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .container-info{
            width: 80%;
            margin-top: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 25px;
        }
        h4{
            font-size: 62px;
            margin: 0;
        }
        .container-info div{
            padding: 15px 0px;
            width: 100%;
        }
        p{
            font-size: 30px;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
        }
        span{
            color: #38BCDC;
        }
        @media screen and (max-width: 2400px){
            h4{
                font-size: 54px;
            }
            p{
                font-size: 26px;
            }
        }
        @media screen and (max-width: 2100px){
            p{
                font-size: 22px;
            }
            h4{
                font-size: 47px;
            }
        }
        @media screen and (max-width: 1920px){
            .container-info{
                margin-top: 100px;
            }
        }
        @media screen and (max-width: 1400px){
            h4{
                font-size: 41px;
            }
            p{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 1200px){
            .container-info{
                width: 100%;
            }
            section{
                padding: 0px 70px;
            }
        }
        @media screen and (max-width: 1050px){
            h4{
                font-size: 32px;
            }
            p{
                font-size: 18px;
            }
            .container-info{
                margin-top: 100px;
            }
        }
        @media screen and (max-width: 770px){
            section{
                padding: 0px 40px;
            }
        }
        @media screen and (max-width: 650px){
            h4{
                font-size: 28px;
            }
        }
        @media screen and (max-width: 550px){
            section{
                padding: 0px 15px;
            }
        }
        @media screen and (max-width: 430px){
            h4{
                font-size: 25px;
            }
            p{
                font-weight: normal;
            }
        }
    `}</style>
    </section>
    </>
  )
}

export default InfoSection