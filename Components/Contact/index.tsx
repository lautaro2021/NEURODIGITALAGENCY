import React, {useRef, useLayoutEffect} from 'react';
import { useRouter } from 'next/router';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

import CustomLink from '../customLink';

function index() {
    gsap.registerPlugin(ScrollTrigger);
    const router = useRouter();

    const section = useRef(null);
    const h2 = useRef(null);
    const span = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(()=>{
            const t1 = gsap.timeline({
                scrollTrigger:{
                    trigger: section.current,
                    start: '-=30%',
                }
            })
            .fromTo(h2.current, {opacity: 0}, {opacity: 1, duration: 0.5})

        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref={section}>
        <h2 ref={h2}>{router.pathname === '/services' ? 'We know what we do.' : 'Ready to start'}
        <CustomLink href='/contact-us'>
            <span ref = {span}>{router.pathname === '/services' ? 'contact us' : 'a proyect?'}</span>
        </CustomLink>
        </h2>
    <style jsx>{`
        section{
            width: 100vw;
            height: 100vh;
            color: white;
            display: flex;
            align-items: center;
            justify-content: start;
            font-size: 120px;
            background-color: ${router.pathname === '/our-services' ? '#070707' : 'black'};
            overflow: hidden;
            padding: 120px;
        }
        span{
            display: block;
            color: #1966AF;
            cursor: pointer;
            text-decoration: underline;
            overflow: hidden;
            transition: color .3s;
        }
        span:hover{
            color: #38BCDC;
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
        }
        @media screen and (max-width: 1700px){
            h2{
                font-size: 120px;
            }
        }
        @media screen and (max-width: 1400px){
            h2{
                font-size: 105px;
            }
        }
        @media screen and (max-width: 1100px){
            section{
                padding: 120px 70px;
            }
            h2{
                font-size: 82.5px;
            }
        }
        @media screen and (max-width: 830px){
            h2{
                font-size: 70px;
            }
        }
        @media screen and (max-width: 730px){
            section{
                padding: 100px 40px;
            }
        }
        @media screen and (max-width: 540px){
            h2{
                font-size: 60px;
            }
            section{
                padding: 80px 15px;
            }
        }
        @media screen and (max-width: 420px){
            h2{
                font-size: 50px;
            }
        }
    `}</style>
    </section>
  )
}

export default index