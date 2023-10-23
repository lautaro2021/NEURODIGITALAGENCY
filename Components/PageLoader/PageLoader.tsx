import React, {useEffect, useContext} from 'react'

import { AppContext } from '@/Context/AppContext';

function Loader():any {
    const {isLoading, setIsLoading} = useContext(AppContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000)

        return () => clearTimeout(timer);
    }, [isLoading])

  return isLoading && (
    <section>
        <div id = 'container-div'>
        </div>
    <style jsx>{`
        section{
            background: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            animation: phrase 4s ease;
        }
        @keyframes phrase{
            0%{
                transform: translateY(100%);
                z-index: 5000;
                border-radius: 100% 100% 0% 0%;
                background-color: #001222;
            }
            15%{
                transform: translateY(0%);
                z-index: 5000;
                border-radius: 0;
                background-color: #001222;
            }
            75%{
                z-index: 5000;
                height: 100vh;
                border-radius: 0;
                background-color: #001222;
            }
            90%{
                z-index: 5000;
                height: 100vh;
                border-radius: 0% 0% 100% 100%;
                background-color: #001222;
            }
            100%{
                height: 0;
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
            width: 70%;
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