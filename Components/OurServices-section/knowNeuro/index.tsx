import React, {useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import CustomLink from '@/Components/customLink';

function KnowNeuro() {
    gsap.registerPlugin(ScrollTrigger);

    const section:any = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top top',
                    pin: true,
                    scrub: 1,
                    end: '+=' + (section?.current.offsetHeight * 3)
                }
            })
            .to('#img-1', {top: '50%'})
            .to('#img-2', {top: '50%'})
            .to('#img-3', {top: '50%'})
        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref = {section}>
        <div className='images-container'>
            <img
                src='/ourServices/neuro1.png'
                id='img-1'
            />
            <img
                src='/ourServices/neuro2.png'
                id='img-2'
            />
            <CustomLink href = '/about-us'>
                <img
                    src='/ourServices/neuro3.png'
                    id='img-3'
                />
            </CustomLink>
        </div>
    <style jsx>{`
        section{
            background-color: #070707;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .images-container{
            width: 70%;
            height: 100%;
            max-height: 1200px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        img{
            position: absolute;
            height: 100%;
            max-height: 1200px;
            object-fit: cover;
            top: 200%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        #img-3:hover{
            filter: brightness(0.8);
        }
        @media screen and (max-width: 1920px){
            .images-container{
                width: 85%;
                max-height: 90vh;
                height: 100%;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: contain !important;
            }
        }
        @media screen and (max-width: 1000px){
            section{
                padding: 15px;
            }
            .images-container{
                width: 100%;
            }
        }
    `}</style>
    </section>
  )
}

export default KnowNeuro