import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function index() {
    gsap.registerPlugin(ScrollTrigger);

    const section = useRef(null);

    const textOne = 'years experience'
    const textTwo = 'brands that trust'

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('#exp-h3', {y:'-100%', opacity: 0})
            gsap.set('#exp-letter', {opacity: 0})
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: '-=75%',
                }
            })
            .to('#exp-h3', {y: '0%', opacity: 1, duration: 0.35, ease: 'bounce'})
            .to('#exp-letter', {opacity: 1, duration: 0.5, stagger: 0.025})
        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref = {section}>
        <div className='experience-container'>
            <div className='exp-info-cont'>
                <h3 id = 'exp-h3'>+3</h3>
                <label>
                    {textOne.split('').map((letter: string, i:number) => <span key = {i} id = 'exp-letter'>{letter}</span>)}
                </label>
            </div>
            <div className='exp-info-cont'>
                <h3 id = 'exp-h3'>+30</h3>
                <label>
                    {textTwo.split('').map((letter: string, i:number) => <span key = {i} id = 'exp-letter'>{letter}</span>)}
                </label>
            </div>
        </div>
    <style jsx>{`
        section{
            width: 100vw;
            height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 180px;
            padding: 120px;
            background-color: black;
        }
        .experience-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 75%;
        }
        h3{
            margin: 0 !important;
        }
        label{
            font-size: 42px;
            font-weight: bold !important;
            color: #1966AF;
            text-align: center;
        }
        .exp-info-cont{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        @media screen and (max-width: 1920px){
            h3{
                font-size: 180px;
            }
            label{
                font-size: 38px;
            }
            .experience-container{
                width: 85%;
            }
        }
        @media screen and (max-width: 1700px){
            h3{
                font-size: 160px
            }
            label{
                font-size: 35px;
            }
        }
        @media screen and (max-width: 1620px){
            h3{
                font-size: 150px;
            }
            label{
                font-size: 32px;
            }
        }
        @media screen and (max-width: 1550px){
            h3{
                font-size: 120px;
            }
            label{
                font-size: 28px;
            }
        }
        @media screen and (max-width: 1380px){
            .experience-container{
                width: 100%;
            }
        }
        @media screen and (max-width: 1180px){
            h3{
                font-size: 100px;
            }
            label{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 1100px){
            section{
                padding: 120px 70px;
            }
        }
        @media screen and (max-width: 950px){
            label{
                font-size: 20px;
            }
            h3{
                font-size: 82px;
            }
        }
        @media screen and (max-width: 800px){
            .experience-container{
                flex-direction: column;
                height: 100%;
            }
            h3{
                font-size: 100px;
            }
            label{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 560px){
            section{
                padding: 80px 40px;
            }
        }
        @media screen and (max-width: 520px){
            h3{
                font-size: 82px;
            }
            label{
                font-size: 22px;
            }
        }
        @media screen and (max-width: 400px){
            section{
                height: 85vh;
            }
        }
    `}</style>
    </section>
  )
}

export default index