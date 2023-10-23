import React, {useLayoutEffect, useContext} from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'

import CustomLink from '../customLink'
import { AppContext } from '@/Context/AppContext'

function index() {
    const router = useRouter();

    const {delay} = useContext(AppContext);

    useLayoutEffect(() => {
      // const delay = (time && !loader) ? (4000 - time)/1000 : (!time && loader) ? 4 : 0;

        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({defaults: {ease: 'SlowMo.easeOut'}});
            t1.fromTo('.h4-fixed-div', {y: '-100%'}, {y: '0%', duration: .5, delay: delay+1});
        })

        return () => ctx.revert()

    }, [])

  return (
    <div className='fixed-div-hero'>
      <CustomLink href = '/'>
        <h4 className='h4-fixed-div'>NEURO</h4> 
      </CustomLink>
    <style jsx>{`
        .fixed-div-hero{
          position: fixed;
          top: 5%;
          left: 5%;
          color: white;
          z-index: 2100;
          overflow: hidden;
        }
        .fixed-div-hero h4{
          font-size: 50px;
          font-weight: bold;
          margin: 0;
          cursor: pointer;
        }
        @media screen and (max-width: 1920px){
          h4{
            font-size: 40px !important;
          }
        }
        @media screen and (max-width: 500px){
          h4{
            font-size: 35px !important;
          }
        }
    `}</style>
    </div>
  )
}

export default index