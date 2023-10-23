import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {
    gsap.registerPlugin(ScrollTrigger);

  return (
    <section id = 'lets-work-section'>
        <h1>
            <span id = 'work-animation'>Let's&nbsp;</span><span id = 'work-animation'>create</span>
            <span id = 'work-animation2'>Something&nbsp;</span><span id = 'work-animation2'>incredible</span>
            <span id = 'work-animation3'>TOGETHER</span>           
        </h1>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 120px;
            font-family: 'Monument';
            position: relative;
        }
        h1{
            width: auto;
            text-align: center;
            overflow: hidden;
            margin: 0;
            z-index: 1000;
        }
        span{
            display: inline-block;
        }
        @media screen and (max-width: 2200px){
            h1{
                font-size: 150px;
            }
        }
        @media screen and (max-width: 1920px){
            h1{
                font-size: 135px;
            }
        }
        @media screen and (max-width: 1700px){
            h1{
                font-size: 120px;
            }
        }
        @media screen and (max-width: 1550px){
            h1{
                font-size: 105px;
            }
        }
        @media screen and (max-width: 1250px){
            section{
                display: none;
            }
        }
    `}</style>
    </section>
  )
}

export default index