import React from 'react'
import Head from 'next/head'

import Logo from '../Components/Logo';
import MegaMenu from '@/Components/Navbar/index2';

function NotFound() {
  return (
    <>
    <Head>
      <title>Neuro | 404: Not Found</title>
    </Head>
    <Logo/>
    <MegaMenu/>
    <section>
        <h1>
          <span>404 ERROR</span>
          <span>PAGE</span>
          <span>NOT FOUND</span>
        </h1>
        <p>
          OOPS...you are in the wrong way
        </p>
    <style jsx>{`
        section{
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }
        h1{
          font-size: 180px;
          margin: 0;
        }
        span{
          display: block;
        }
        span:nth-child(2){
          text-align: end;
        }
        span:nth-child(2), span:last-child {
          color: #4c4c4c;
        }
        p{
            font-weight: bold;
            color: white;
            font-size: 50px;
        }
        label{
          font-size: 40px;
          font-weight: 600;
          text-align: center;
          line-height: 0;
          display: flex;
          align-items: center;
          border-bottom: 1px solid;
          color: #38BCDC;
          cursor: pointer;
          border: 2px solid red;
          width: 30%;
        }
        label:hover{
          color: #1a5969;
          transition: .3s;
        }
        @media screen and (max-width: 2200px){
          h1{
            font-size: 150px;
          }
          p{
            font-size: 42px;
          }
          label{
            font-size: 34px;
          }
        }
        @media screen and (max-width: 1920px){
          h1{
            font-size: 135px;
          }
          p{
            font-size: 38px;
          }
          label{
            font-size: 31px;
          }
        }
        @media screen and (max-width: 1700px){
          h1{
            font-size: 120px;
          }
          p{
            font-size: 34px;
          }
          label{
            font-size: 28px;
          }
        }
        @media screen and (max-width: 1550px){
          h1{
            font-size: 105px;
          }
          p{
            font-size: 30px;
          }
          label{
            font-size: 25px;
          }
        }
        @media screen and (max-width: 1400px){
          h1{
            font-size: 90px;
          }
          p{
            font-size: 26px;
          }
          label{
            font-size: 22px;
          }
        }
        @media screen and (max-width: 1100px){
          section{
            padding: 0px 70px;
          }
          h1{
            font-size: 75px;
          }
          p{
            font-size: 22px;
          }
          label{
            font-size: 19px;
          }
        }
        @media screen and (max-width: 750px){
          section{
            padding: 0px 40px;
          }
          span{
            text-align: left !important;
          }
          h1{
            font-size: 70px;
          }
          p{
            text-align: center;
          }
        }
        @media screen and (max-width: 560px){
          section{
            padding: 0px 15px;
          }
          h1{
            font-size: 60px;
          }
          p{
            font-size: 20px;
          }
          label{
            font-size: 16px;
          }
        }
    `}</style>
    </section>
    </>
  )
}

export default NotFound