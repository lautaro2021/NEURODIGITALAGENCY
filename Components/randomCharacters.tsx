import { useEffect, useState } from "react";

export default function RandomCharacter({wordPassed, anim, contact, megamenu}:any){
    const [word, setWord] = useState(wordPassed);
    const [hover, setHover] = useState<any>(false);
    const [intervalCounter, setIntervalCounter] = useState(0);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/;=-~!@#$%^&*()+{}:?><€¡¥×«»¶¿çµñ©æáßðøöóíúüþéåä';

    const handleLeave = () => {
        setHover(false);
        setIntervalCounter(0);
    }

    useEffect(() => {
        const randomlyArrayOfChars = chars.split('').sort((a, b)=> 0.5 - Math.random());
        const sliced = randomlyArrayOfChars.slice(0, word.length).join('');

        const interval = setInterval(() => {
            if(hover && intervalCounter < 5){
                setWord(sliced);
                setIntervalCounter((prevCounterValue:number) => prevCounterValue + 1);
            }
            else{
                setWord(wordPassed);
                clearInterval(interval);
            }
        }, 100);
    
        return () => {
            clearInterval(interval);
        }
      }, [hover, word]);


    return (
        <>
        <span onMouseOver = {() => setHover(true)} onMouseLeave = {() => handleLeave()}>
            {word}
        </span>

        <style jsx>{`
            span{
            font-family: 'Monument';
            font-weight: ${( contact || megamenu ) ? '800' : '200'};
            font-size: ${anim ? '0px' : contact ? '180px' : megamenu ? '70px' : '22px'};
            cursor: ${anim ? '' : 'pointer'};
            color: ${(megamenu || contact) ? 'white' : 'grey'};
            transition: color .3s;
            animation: ${(contact || megamenu) ? '' : anim ? 'spanDesapear 1s ease-in' : 'spanAppear 1s ease-in'};
            pointer-events: ${anim ? 'none' : ''};
            z-index: 1000;
            ${megamenu &&
            `color: white;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;`
            }
            }
            span:hover{
                color: white;
                
            }
            @keyframes spanDesapear{
                from{
                    font-size: 22px;
                }
                to{
                    font-size: 0;
                }
            }
            @keyframes spanAppear{
                from{
                    font-size: 0;
                }
                to{
                    font-size: 22px;
                }
            }
            @media screen and (max-width: 2200px){
                span{
                    font-size: ${anim ? '0px' : contact ? '150px' : megamenu ? '55px' : '22px'};
                }
            }
            @media screen and (max-width: 1920px){
                span{
                    font-size: ${anim ? '0px' : contact ? '135px' : megamenu ? '45px' : '22px'};
                }
            }
            @media screen and (max-width: 1700px){
                span{
                    font-size: ${anim ? '0px' : contact ? '120px' : megamenu ? '43px' : '22px'};
                }
            }
            @media screen and (max-width: 1550px){
                span{
                    font-size: ${anim ? '0px' : contact ? '105px' : megamenu ? '40px' : '22px'};
                }
            }
            @media screen and (max-width: 1100px){
                span{
                    font-size: ${anim ? '0px' : contact ? '82.5px' : megamenu ? '45px' : '22px'};
                }
            }
            @media screen and (max-width: 830px){
                span{
                    font-size: ${anim ? '0px' : contact ? '70px' : megamenu ? '45px' : '22px'};
                }
            }
            @media screen and (max-width: 600px){
                span{
                    font-size: ${anim ? '0px' : contact ? '70px' : megamenu ? '40px' : '22px'};
                }
            }
            @media screen and (max-width: 540px){
                span{
                    font-size: ${anim ? '0px' : contact ? '60px' : megamenu ? '40px' : '22px'};
                }
            }
            @media screen and (max-width: 480px){
                span{
                    font-size: ${anim ? '0px' : contact ? '60px' : megamenu ? '38px' : '22px'};
                }
            }
            @media screen and (max-width: 420px){
                span{
                    font-size: ${anim ? '0px' : contact ? '50px' : megamenu ? '30px' : '22px'};
                }
            }
        `}</style>
        </>
    )
}