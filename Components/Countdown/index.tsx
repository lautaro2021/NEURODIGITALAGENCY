import React, { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";
import { gsap } from "gsap";

import { AppContext } from "@/Context/AppContext";

const Countdown = ({time, loader}:any) => {
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  const div = useRef(null);

  const {delay} = useContext(AppContext)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

    gsap.fromTo(div.current, {opacity: 0}, {opacity: 1, delay: delay+1.5, duration: 3, ease: 'SlowMo.easeOut'})
  }, [])

  const days = timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days;
  const hours = timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours;
  const minutes = timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;
  const seconds = timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;

  return (
    <div ref = {div}>
      <p>
        {days}
        <label>days</label>
      </p>
      <p>
        {hours}
        <label>hours</label>
      </p>
      <p>
        {minutes}
        <label>minutes</label>
      </p>
      {/* <p>{``}{days}<span>:</span>{hours}<span>:</span>{minutes}</p> */}
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
        div{
            background-color: white;
            color: black;
            padding: 10px 30px;
            border-radius: 50px;
            margin: 50px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .counter-cont{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .counter-exp-cont{
          display: flex;
          align-items: center;
          justify-content: space-between !important;
          border: 2px solid red;
          width: 100%;
        }
        p{
            font-family: 'Roboto';
            font-size: 120px;
            font-weight: bold;
            margin: 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0px 30px;
        }
        label{
            font-size: 30px;
            margin: 0 !important;
        }
        @media screen and (max-height: 1080px){
          div{
            padding: 10px 20px;
          }
          p{
            font-size: 100px;
          }
        }
        @media screen and (max-width: 1920px){
          p{
            font-size: 90px;
          }
          label{
            font-size: 26px;
          }
        }
        @media screen and (max-width: 1700px){
          p{
            font-size: 80px;
          }
        }
        @media screen and (max-width: 1500px){
          p{
            font-size: 65px;
          }
        }
        @media screen and (max-width: 1300px){
          label{
            font-size: 20px;
          }
          div{
            padding: 12px;
          }
          p{
            padding: 0px 20px;
          }
        }
        @media screen and (max-width: 600px){
          div{
            width: 100%;
            justify-content: space-between;
            padding: 12px 20px;
          }
          label{
            font-size: 12px;
          }
          p{
            font-size: 50px;
            padding: 0px 12px;
          }
        }
        @media screen and (max-width: 470px){
          p{
            font-size: 30px;
          }
          div{
            width: 80%;
          }
        }
        @media screen and (max-width: 400px){
          div{
            width: 70%;
          }
        }
    `}</style>
    </div>
  );
};

const calculateTimeLeft = () => {
    const difference = +new Date("2023-6-30") - +new Date();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
  
    return timeLeft;
  };

export default Countdown;