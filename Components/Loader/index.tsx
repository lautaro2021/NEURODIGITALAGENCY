import React, {useLayoutEffect, useRef, useState} from 'react'
import gsap from 'gsap'

function Loader({loader}:any) {
    const ctxRef:any = useRef(null);
    const [displayIso, setDisplayIso] = useState(true);

    useLayoutEffect(() => {
        document.body.style.overflowY = 'hidden';
        document.body.style.height = '100vh';

        setTimeout(() => {
            document.body.style.overflowY = 'auto';
            document.body.style.height = 'auto';
            setDisplayIso(false);
        }, 4000)

        ctxRef.current = gsap.context(() => {
            const t1 = gsap.timeline({})
            t1.fromTo('#create', {opacity: 0}, {opacity: 1, duration: 0.5, stagger: 0.5, delay: 0.5})
            t1.to('#create', {opacity: 0, duration: 1})
        })

        return () => ctxRef.current.revert();

    }, [])

  return loader && (
    <section>
        <div id = 'container-div'>
            {displayIso &&
            <>
                <span id = 'create'>N</span>
                <span id = 'create'>N</span>
                <span id = 'create'>N</span>
            </>
            }
        </div>
    <style jsx>{`
        section{
            background: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: phrase 4s ease-in;
        }
        @keyframes phrase{
            0%{
                z-index: 5000;
                display: block;
                border-radius: 0;
                background-color: #001222;
            }
            75%{
                z-index: 5000;
                display: block;
                height: 100vh;
                border-radius: 0;
                background-color: #001222;
            }
            90%{
                z-index: 5000;
                display: block;
                height: 100vh;
                border-radius: 0% 0% 100% 100%;
                background-color: #001222;
            }
            100%{
                height: 0;
                display: block;
                z-index: 5000;
                background-color: #001222;
            }
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            width: 100%;
            height: 100%;
            line-height: 90px;
        }
        div h2{
            font-family: 'Monument';
            font-weight: bold;
            margin: 0;
        }
        span{
            font-weight: bold;
            font-size: 180px;
            opacity: 0;
        }
        span:nth-child(2){
            color: #38BCDC;
            transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            opacity: 0;
        }
        @media screen and (max-width: 1920px){
            span{
                font-size: 150px;
            }
        }
        @media screen and (max-width: 1600px){
            span{
                font-size: 120px;
            }
        }
        @media screen and (max-width: 1366px){
            span{
                font-size: 100px;
            }
        }
        @media screen and (min-width: 1000px){
            div{
                flex-direction: row;
            }
        }
    `}</style>
    </section>
  )
}

export default Loader