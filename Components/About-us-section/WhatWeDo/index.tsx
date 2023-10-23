import React, {useLayoutEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import CustomLink from '@/Components/customLink';

function WhatWeDo() {
    gsap.registerPlugin(ScrollTrigger);

    const section = useRef(null);
    const image = useRef(null);
    const div = useRef(null);
    const button = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top 50%',
                }
            })
            .fromTo(div.current, {opacity: 0}, {opacity: 1})
            .fromTo('#wedo-span', {opacity: 0}, {opacity: 1, stagger: 0.05})
            .fromTo(button.current, {opacity: 0}, {opacity: 1})
        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref = {section}>
        <img
        src = '/about/neuro2-min.jpg'
        alt = 'whatWeDo BG'
        ref = {image}
        />
        <aside className='text-container'>
            <div className='center-container' ref = {div}>
                <label>WHAT WE DO <hr/></label>
                <h3>
                    <span>Full</span>
                    <span>Service</span>
                </h3>
                <div className='s-container'>
                    <span id = 'wedo-span'>01. Mobile & Web Apps</span>
                    <span id = 'wedo-span'>02. Blog</span>
                    <span id = 'wedo-span'>03. E - Commerce</span>
                    <span id = 'wedo-span'>04. Web Design</span>
                    <span id = 'wedo-span'>05. React JS</span>
                    <span id = 'wedo-span'>06. Web GL</span>
                    <span id = 'wedo-span'>07. Responsive Design</span>
                    <span id = 'wedo-span'>08. User Experience</span>
                    <span id = 'wedo-span'>09. Branding</span>
                    <span id = 'wedo-span'>10. Social Media</span>
                    <span id = 'wedo-span'>11. Content</span>
                    <span id = 'wedo-span'>12. Community Managment</span>
                    <span id = 'wedo-span'>13. Photography</span>
                    <span id = 'wedo-span'>14. Productions</span>
                </div>
                <CustomLink href='/our-services'>
                    <button ref = {button}>See our services</button>
                </CustomLink>
            </div>
        </aside>
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
        section{
            height: auto;
            width: 100vw;
            display: flex;
            justify-content: end;
            color: white;
            position: relative;
        }
        img{
            object-fit: cover;
            height: 1280px;
            width: 1280px;
            position: absolute;
            top: 0;
            left: 0;
            filter: brightness(0.8);
        }
        .text-container{
            width: 70%;
            margin-top: 200px;
            background-color: #1966AF;
            display: flex;
            align-items: start;
            justify-content: end;
            padding: 100px 100px 100px 600px;
        }
        .center-container{
            height: 100%;
            width: 100%;
            padding: 50px;
            opacity: 0;
        }
        .s-container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .s-container span{
            margin: 15px 0px;
            font-family: 'Roboto', sans-serif;
            font-size: 28px;
            color: #c1c1c1;
        }
        label{
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            color: #c1c1c1;
            font-weight: 300;
        }
        hr{
            display: inline-block;
            width: 400px;
            margin: auto;
            height: 1px;
        }
        h3{
            line-height: 120px;
        }
        h3 span{
            display: block;
            font-size: 120px;
        }
        button{
            border: 1px solid white;
            color: white;
            background: none;
            padding: 1em 2em;
            border-radius: 100px;
            cursor: pointer;
            font-size: 40px;
            font-family: 'Monument';
            font-weight: bold;
            margin-top: 100px;
            background-image: linear-gradient(white, white);
            background-size: 0 100%;
            white-space: nowrap;
        }
        button:hover{
            background-image: linear-gradient(white, white);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: black;
            transition: 0.5s;
        }
        @media screen and (max-width: 2200px){
            img{
                width: 1180px;
                height: 1180px;
            }
            h3 span{
                font-size: 100px;
            }
        }
        @media screen and (max-width: 2100px){
            button{
                font-size: 35px;
            }
        }
        @media screen and (max-width: 1920px){
            img{
                width: 1100px;
                height: 1100px;
            }
            .center-container{
                padding: 0;
            }
            h3 span{
                font-size: 90px;
            }
            label{
                font-size: 28px;
            }
            .s-container span{
                font-size: 25px;
            }
            button{
                font-size: 24px;
            }
        }
        @media screen and (max-width: 1800px){
            img{
                width: 1000px;
                height: 1000px;
            }
            .text-container{
                padding: 100px 100px 100px 500px;
            }
        }
        @media screen and (max-width: 1700px){
            .text-container{
                padding: 100px 50px 100px 550px;
                margin-top: 100px;
            }
            hr{
                width: 300px;
            }
            h3 span{
                font-size: 80px;
                line-height: 80px;
            }
            .s-container span{
                font-size: 22px;
            }
            button{
                font-size: 22px;
            }
        }
        @media screen and (max-width: 1600px){
            img{
                width: 900px;
                height: 900px;
            }
            .text-container{
                padding: 100px 50px 100px 500px;
            }
            button{
                margin-top: 50px;
            }
        }
        @media screen and (max-width: 1500px){
            img{
                width: 800px;
                height: 800px;
            }
            .text-container{
                padding: 100px 50px 100px 400px;
            }
        }
        @media screen and (max-width: 1400px){
            section{
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            img{
                top: 0;
                left: 100px;
            }
            .text-container{
                margin-top: 600px;
                padding: 100px 50px;
                z-index: 500;
            }
        }
        @media screen and (max-width: 1100px){
            .text-container{
                width: 90%;
            }
            img{
                left: 0;
            }
        }
        @media screen and (max-width: 800px){
            img{
                width: 100%;
                height: auto;
                object-fit: cover;
            }
        }
        @media screen and (max-width: 750px){
            .text-container{
                padding: 50px 20px;
            }
        }
        @media screen and (max-width: 700px){
            h3 span{
                font-size: 60px;
                line-height: 60px;
            }
            label{
                font-size: 25px;
            }
            .s-container span{
                font-size: 18px;
            }
            button{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 570px){
            hr{
                width: 200px;
            }
            .text-container{
                width: 95%;
            }
            h3 span{
                font-size: 52px;
            }
        }
        @media screen and (max-width: 520px){
            label{
                font-size: 22px;
            }
            button{
                padding: 1em;
                width: 100%;
            }
        }
        @media screen and (max-width: 480px){
            .s-container span:nth-child(even){
                padding-left: 25px;
            }
        }
        @media screen and (max-width: 450px){
            label{
                font-size: 20px;
            }
            h3 span{
                font-size: 48px;
            }
            button{
                font-size: 23px;
            }
            .text-container{
                margin-top: 400px;
                width: 100%;
            }
            section{
                margin-top: 150px;
            }
        }
        @media screen and (max-width: 410px){
            .s-container span{
                font-size: 16px;
            }
            button{
                font-size: 20px;
            }
            .text-container{
                padding: 50px 15px;
            }
        }
        @media screen and (max-width: 370px){
            hr{
                width: 150px;
            }
        }
    `}</style>   
    </section>
  )
}

export default WhatWeDo