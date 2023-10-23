import React from 'react'
import RandomCharacter from '../randomCharacters'

import CustomLink from '../customLink'

function ContactUS() {
  return (
    <section id = 'contact-us-section'>
      <CustomLink href = '/contact-us'>
        <RandomCharacter wordPassed = {'CONTACT US'} contact={true}/>
      </CustomLink>
    <style jsx>{`
        section{
          text-align: center;
            width: 100vw;
            height: 60vh;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0,);
        }
        @media screen and (max-width: 750px){
          section{
            padding: 0px 40px;
            text-align: center;
          }
        }
        @media screen and (max-width: 550px){
          section{
            padding: 0px 15px;
          }
        }
    `}</style>
    </section>
  )
}

export default ContactUS