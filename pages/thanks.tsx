import React, {useLayoutEffect, useContext} from 'react'
import gsap from 'gsap'
import Head from 'next/head';

import Logo from '../Components/Logo';
import MegaMenu from '@/Components/Navbar/index2';
import { AppContext } from '@/Context/AppContext';
import CustomLink from '@/Components/customLink';


function Thanks() {
    const {delay} = useContext(AppContext);

    useLayoutEffect(() => {
        const ctx = gsap.context(()=> {
            gsap.fromTo('#thanks-title', {y: '100%', opacity: 0}, {y: '0%', opacity: 1, duration: 1, delay: delay, stagger: 0.25})

            gsap.fromTo('#thanks-button', {opacity: 0}, {opacity: 1, delay: delay+1.2, duration: 1})
        })

        return () => ctx.revert();

    }, [])


  return (
    <>
    <Head>
        <title>Neuro | Thanks for trusting us.</title>
    </Head>
        <Logo/>
        <MegaMenu/>
    <section>
        <h1 >
            <span id = 'thanks-title'>Thank you for trusting us.</span>
            <span id = 'thanks-title'>We will contact you soon.</span>
        </h1>

        <CustomLink href = '/'>
            <button id = 'thanks-button'>GO HOME</button>
        </CustomLink>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            font-family: 'Monument', sans-serif;
            font-size: 50px;
            padding: 50px 150px;
        }
        h1{
            overflow: hidden;
            margin: 0;
        }
        span{
            display: inline-block;
        }
        span:first-child{
            color: #38BCDC;
        }
        button{
            border: 1px solid white;
            background: none;
            color: white;
            font-size: 40px;
            margin-top: 50px;
            font-family: 'Monument';
            font-weight: bold;
            padding: 1em 2em;
            width: 450px;
            border-radius: 100px;
            cursor: pointer;
            background-image: linear-gradient(white, white);
            background-size: 0 100%;
            opacity: 0;
        }
        button:hover{
            background-image: linear-gradient(white, white);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: 0.5s;
            color: black;
        }
        @media screen and (max-width: 1920px){
            button{
                font-size: 24px;
                width: 300px;
            }
        }
        @media screen and (max-width: 1250px){
            section{
                padding: 50px 60px;
            }
        }
        @media screen and (max-width: 1000px){
            section{
                padding: 50px 40px;
            }
            h1{
                font-size: 60px;
            }
        }
        @media screen and (max-width: 750px){
            button{
                font-size: 30px;
            }
        }
        @media screen and (max-width: 600px){
            span:last-child{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 540px){
            section{
                padding: 50px 15px;
            }
        }
        @media screen and (max-width: 500px){
            button{
                font-size: 25px;
                width: 80%;
            }
            h1{
                width: 100%;
                font-size: 45px;
            }
        }
        @media screen and (max-width: 420px){
            button{
                width: 100%;
                font-size: 22px;
                white-space: nowrap;
            }
        }
    `}</style>
    </section>
    </>
  )
}

export default Thanks