import React, {useState, useContext, useLayoutEffect} from 'react'
import { useRouter } from 'next/router';
import gsap from 'gsap' 
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import emailjs from 'emailjs-com';
import Head from 'next/head';

import Logo from '../Components/Logo';
import MegaMenu from '@/Components/Navbar/index2';
import { AppContext } from '@/Context/AppContext';

function Contact() {
    gsap.registerPlugin(ScrollTrigger);
    const router = useRouter();
    const {delay} = useContext(AppContext)

    const phraseOne = 'Tell us about your ideas';

    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        text: '',
        content: false,
        design: false,
        brand: false,
        website: false,
    })

    const handleForm = (e:any) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = (e:any) => {
        e.preventDefault();

        emailjs.sendForm('service_az88f5i', 'template_b14t2l9', e.target, 'EQ_zqGb2OP0BOi-d5').then(() => {router.push('/thanks')}, () => {alert('something went wrong')})
    } 

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('#contact-us-span', {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.05, ease: 'power', delay: delay})
        })

        return () => ctx.revert();
    }, [])

  return (
    <>
    <Head>
      {/* -----------> English */}
      <title>Neuro | Contact us and start your digital revolution.</title>
      <meta name="description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="og:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="og:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      <meta property="twitter:title" content="Neuro - Digital Marketing and Web Design" />
      <meta property="twitter:description" content="Neuro is a digital marketing and web design agency. We offer creative and customized solutions to enhance your business's online presence." />
      
      {/* -----------> Spanish */}
      {/* <title>Neuro | Contact us and start your digital revolution.</title> */}
      <meta name="description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      <meta property="og:title" content="Neuro - Marketing Digital y Diseño Web" />
      <meta property="og:description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      <meta property="twitter:title" content="Neuro - Marketing Digital y Diseño Web" />
      <meta property="twitter:description" content="Neuro es una agencia de marketing digital y diseño web. Ofrecemos soluciones creativas y personalizadas para potenciar la presencia online de tu negocio." />
      
      {/* -----------> Others META */}
      <meta property="og:image" content="/metaimage.png" />
      <meta property="twitter:image" content="/metaimage.png" />
    </Head>
    <Logo/>
    <MegaMenu/>
    <section id = 'contact-section'>
        <h3>
            {phraseOne.split('').map((l:string, i:number) => <span key = {i} id = 'contact-us-span'>{l}</span>)}
        </h3>
        <form onSubmit={submitForm}>
            <input placeholder='Your name...' type='text' name='name' onChange={handleForm} required></input>
            <input placeholder='Your email...' type='email' name='email' onChange={handleForm} required></input>
            <input placeholder='Your company name...' type='text' name='company' onChange={handleForm} required></input>

            <label>Services you are interested in</label>
            <div className='checkbox-container'>
                <label className='options-container'>
                    <input type='checkbox' name = 'content' onChange={handleForm}/>
                    <span className='checkbox-span'>Content</span>
                </label>

                <label className='options-container'>
                    <input type='checkbox' name = 'design' onChange={handleForm}/>
                    <span className='checkbox-span'>Design</span>
                </label>

                <label className='options-container'>
                    <input type='checkbox' name = 'brand' onChange={handleForm}/>
                    <span className='checkbox-span'>Brand Indentity</span>
                </label>

                <label className='options-container'>
                    <input type='checkbox' name = 'website' onChange={handleForm}></input>
                    <span className='checkbox-span'>Website</span>
                </label>

            </div>
            <textarea placeholder='Describe your project needs' name='text' onChange={handleForm} required/>
            
            <div className='contact-button-container'>
                <button type = 'submit'>Submit</button>
            </div>
        </form>
    <style jsx>{`
        section{
            width: 100vw;
            color: white;
            padding: 300px 120px;
            font-size: 100px;
            font-family: 'Monument';
        }
        h3{
            font-size: 180px;
            margin-top: 0;
        }
        .title-span{
            display: block;
        }
        form{
            margin-top: 2em;
            display: flex;
            flex-direction: column;
            width: 65%;
            gap: 1em;
        }
        input{
            height: 45px;
            background: none;
            border: none;
            border-bottom: 1px solid grey;
            font-size: 0.3em;
            padding: 1em;
            color: white;
            cursor: pointer;
        }
        input:focus{
            outline: none;
            border-bottom: 1px solid white;
        }
        label{
            font-size: 0.26em;
            font-weight: bold;
        }
        .checkbox-container{
            display: flex;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
            gap: 0.5em;
        }
        .options-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.1em;
            cursor: pointer;
        }
        .checkbox-span{
            margin-left: 10px;
            font-size:24px;
        }
        input[type="checkbox"] {
        /* ...existing styles */
        display: grid;
        place-content: center;
        background-color: #1966AF;
        }
        input[type="checkbox"]::before {
        content: "";
        width: 1.5em;
        height: 1.5em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: #38BCDC;
        }
        input[type="checkbox"]:checked::before {
        transform: scale(1);
        background-color: #38BCDC;
        }
        textarea{
            border: 1px solid #6c6c6c50;
            resize: none;
            height: 500px;
            background: none;
            padding: 1em;
            color: white;
            font-size: 0.3em;
            font-family: 'Helvetica', sans-serif;
        }
        textarea:focus{
            outline: 0;
            border: 1px solid white;
        }
        button{
            border: 1px solid white;
            background: none;
            color: white;
            font-size: 40px;
            margin-top: 50px;
            font-family: 'Monument';
            font-weight: bold;
            padding: 1em 2em;
            width: 400px;
            border-radius: 100px;
            cursor: pointer;
            background-image: linear-gradient(white, white);
            background-size: 0 100%;
        }
        button:hover{
            background-image: linear-gradient(white, white);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: black;
            transition: 0.5s;
        }
        .fixed-div{
            position: fixed;
            top: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        @media screen and (max-width: 2100px){
            h3{
                font-size: 150px;
            }
            section{
                padding: 300px 100px;
            }
            button{
                font-size: 27px;
                width: 300px;
            }
        }
        @media screen and (max-width: 1920px){
            h3{
                font-size: 135px;
            }
            .checkbox-span{
                font-size:19px;
            }
            form{
                width: 60%;
                gap: .7em;
            }
            textarea{
                font-size: 0.25em;
                height: 350px;
            }
            button{
                font-size: 23px;
                width: 220px;
                padding: .7em;
            }
        }
        @media screen and (max-width: 1700px){
            h3{
                font-size: 120px;
            }
        }
        @media screen and (max-width: 1450px){
            form{
                width: 100%;
            }
            h3{
                font-size: 105px;
            }
        }
        @media screen and (max-width: 1200px){
            section{
                padding: 300px 70px;
            }
        }
        @media screen and (max-width: 1000px){
            section{
                padding: 3em 40px;
            }
            .contact-button-container{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        @media screen and (max-width: 600px){
            h3{
                font-size: 0.8em;
            }
        }
        @media screen and (max-width: 540px){
            section{
                padding: 2em 15px;
            }
        }
        @media screen and (max-width: 470px){
            h3{
                font-size: 0.6em;
                margin: 0 !important;
            }
            input, textarea, input[type="checkbox"]{
                font-size: 0.2em;
            }
            form{
                margin-top: 1em;
            }
            button{
                font-size: 22px;
            }
        }
    `}</style>
    </section>
    </>
  )
}

export default Contact