import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function index() {
    gsap.registerPlugin(ScrollTrigger);

    const section:any = useRef(null);
    const div = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: '-=50%',
                    scrub: 1,
                    pin: true,
                    end: (section.current.ofsetHeight / 2)
                }
            }).to(div.current, {width: '100%'})
        })

        return () => ctx.revert();

    }, [])

  return (
    <section ref = {section}>
        <div ref = {div}>
            <p>
                We can do 
                <span>many things 
                    <label>(Web, design, campaings, 3D, social media)</label>
                </span>
                to boost your brand
            </p>
        </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
        section{
            width: 100vw;
            height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 120px;
            color: white;
        }
        div{
            width: 70%;
            height: 100%;
            background-color: #070707;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 150px;
        }
        p{
            font-size: 52px;
            font-weight: 600;
            text-align: left;
        }
        span{
            display: block;
            font-weight: 600;
        }
        label{
            color: #c1c1c1;
            font-size: 32px;
            display: block;
            font-family: 'Ubuntu Mono', monospace;
        }
        .first-label-p{
            font-size: 28px;
            color: black;
            margin: 0 !important;
            font-weight: bold;
            display: block;
            font-family: 'Monument';
        }
        @media screen and (max-width: 1200px){
            div{
                justify-content: start;
                width: 90%;
                padding: 150px 50px;
            }
        }
        @media screen and (max-width: 1100px){
            p{
                font-size: 45px;
            }
            label{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 820px){
            p{
                font-size: 40px;
            }
            label{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 700px){
            p{
                font-size: 35px;
            }
            label{
                font-size: 17px;
            }
        }
        @media screen and (max-width: 600px){
            div{
                padding: 100px 40px;
            }
            p{
                font-size: 30px
            }
        }
        @media screen and (max-width: 500px){
            div{
                padding: 100px 15px;
            }
        }
        @media screen and (max-width: 450px){
           p{
            font-size: 25px;
           }
        }
    `}</style>
    </section>
  )
}

export default index