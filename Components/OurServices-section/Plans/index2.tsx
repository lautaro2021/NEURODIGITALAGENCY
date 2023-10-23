import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image';

function index2() {
    gsap.registerPlugin(ScrollTrigger);

    const sectionOne = useRef(null);
    const title = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionOne.current,
                    start: 'top 50%',
                }
            })
            .fromTo(title.current, {opacity: 0}, {opacity: 1, duration: 2})

            const t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#plan-container-1',
                    start: 'top 50%',
                }
            })
            .fromTo('#card-container-1', {opacity: 0}, {opacity: 1, duration: 2}, "anim1")
            .fromTo('#web-services-span', {opacity: 0}, {opacity: 1, stagger: 0.1}, "anim1")

            const t3 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#plan-container-2',
                    start: 'top 50%',
                }
            })
            .fromTo('#card-container-2', {opacity: 0}, {opacity: 1, duration: 2}, "anim2")
            .fromTo('#brand-services-span', {opacity: 0}, {opacity: 1, stagger: 0.1}, "anim2")

            const t4 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#plan-container-3',
                    start: 'top 50%',
                }
            })
            .fromTo('#card-container-3', {opacity: 0}, {opacity: 1, duration: 2}, "anim3")
            .fromTo('#social-services-span', {opacity: 0}, {opacity: 1, stagger: 0.1}, "anim3")

            const t5 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#plan-container-4',
                    start: 'top 50%',
                }
            })
            .fromTo('#card-container-4', {opacity: 0}, {opacity: 1, duration: 2}, "anim4")
            .fromTo('#content-services-span', {opacity: 0}, {opacity: 1, stagger: 0.1}, "anim4")
        })

        return () => ctx.revert();

    }, [])

  return (
    <section>
        <h2 ref = {title}><b>Our Services</b></h2>

        <div className='new-plans-container' id = 'plan-container-1'>
            <div className='card-container' id = 'card-container-1'>
                <h3>Website & Apps</h3>
                <p>We build websites and custom applications 
                using the best technologies on the market.
                We have the tools and knowledge to make your
                application secure, accessible, fast and modern.</p>
                <div className='services-cont'>
                    <span id = 'web-services-span'>01. Web Design</span>
                    <span id = 'web-services-span'>02. User Experience</span>
                    <span id = 'web-services-span'>03. React JS</span>
                    <span id = 'web-services-span'>04. Web GL</span>
                    <span id = 'web-services-span'>04. Typescript</span>
                    <span id = 'web-services-span'>05. Responsive Design</span>
                    <span id = 'web-services-span'>06. SEO Strategy</span>
                    <span id = 'web-services-span'>07. FullStack Services</span>
                    <span id = 'web-services-span'>08. e - Commerce</span>
                    <span id = 'web-services-span'>09. Blogs</span>
                    <span id = 'web-services-span'>10. Wordpress</span>
                    <span id = 'web-services-span'>11. Elementor</span>
                </div>
            </div>
            <div className='image-container'>
                <Image
                    src='/ourServices/web.jpg'
                    alt='webServices'
                    fill
                    blurDataURL='/ourServices/web.jpg'
                    priority
                    style={{objectFit: 'cover'}}
                />
            </div>
        </div>

        <div className='new-plans-container' style = {{flexDirection: 'row-reverse'}} id = 'plan-container-2'>
            <div className='card-container' id = 'card-container-2'>
                <h3>Branding & Identity</h3>
                <p>We promote the growth of brands through modern 
                design, market research and interaction with the public. 
                Our main goal is to take your brand to a new level.</p>
                <div className='services-cont'>
                    <span id = 'brand-services-span'>01. Branding</span>
                    <span id = 'brand-services-span'>02. Identity Design</span>
                    <span id = 'brand-services-span'>03. Logotype</span>
                    <span id = 'brand-services-span'>04. Key Visual</span>
                    <span id = 'brand-services-span'>05. re - Branding</span>
                    <span id = 'brand-services-span'>06. Merchandising</span>
                </div>
            </div>
            <div className='image-container'>
                <Image
                    src='/ourServices/social.jpg'
                    alt='branding&identity'
                    fill
                    blurDataURL='/ourServices/social.jpg'
                    priority
                    style={{objectFit: 'cover'}}
                />
            </div>
        </div>

        <div className='new-plans-container' id = 'plan-container-3'>
            <div className='card-container' id = 'card-container-3'>
                <h3>Social Media</h3>
                <p>The design of social networks is fundamental for the 
                growth of your business. Daily content, interaction 
                with the public, valuable content, are some of the 
                fundamental elements to boost your social networks.</p>
                <div className='services-cont'>
                    <span id = 'social-services-span'>01. Advertising campaigns</span>
                    <span id = 'social-services-span'>02. Story Design</span>
                    <span id = 'social-services-span'>03. Post Design</span>
                    <span id = 'social-services-span'>04. Copywriting</span>
                    <span id = 'social-services-span'>05. Community Manager</span>
                    <span id = 'social-services-span'>06. Data Visualization</span>
                    <span id = 'social-services-span'>07. Flyers</span>
                    <span id = 'social-services-span'>08. Posters</span>
                </div>
            </div>
            <div className='image-container'>
                <Image
                    src='/ourServices/brand.jpg'
                    alt='socialMediaBG'
                    fill
                    blurDataURL='/ourServices/brand.jpg'
                    priority
                    style={{objectFit: 'cover'}}
                />
            </div>
        </div>

        <div className='new-plans-container' style = {{flexDirection: 'row-reverse'}} id = 'plan-container-4'>
            <div className='card-container' id = 'card-container-4'>
                <h3>Content Generation</h3>
                <p>We are in everything. Product photos, advertising 
                campaigns, video generation. We know how to transform 
                a simple product photo into a highly reliable and 
                valuable content to use in social networks.</p>
                <div className='services-cont'>
                    <span id = 'content-services-span'>01. Photographic campaigns</span>
                    <span id = 'content-services-span'>02. Product Photography</span>
                    <span id = 'content-services-span'>03. Video Production</span>
                </div>
            </div>
            <div className='image-container'>
                <Image
                    src='/ourServices/content.jpg'
                    alt='contentGeneration'
                    fill
                    blurDataURL='/ourServices/content.jpg'
                    priority
                    style={{objectFit: 'cover'}}
                />
            </div>
        </div>

    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
        section{
            width: 100vw;
            background-color: #070707;
            padding: 150px;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .new-plans-container{
            width: 80%;
            margin: 100px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .card-container{
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
        }
        #card-container-2, #card-container-4{
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: end !important;
            justify-content: center;
        }
        #card-container-2 p, #card-container-4 p{
            text-align: end;
        }
        #card-container-2 span, #card-container-4 span{
            text-align: end;
        }
        h2{
            font-size: 150px;
            width: 100%;
            text-align: left;
        }
        h3{
            font-size: 50px;
            margin: 0;
        }
        p{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 25px;
            width: 90%;
        }
        .services-cont{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 70%;
        }
        span{
            color: grey;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 22px;
            margin: 10px 0px;
        }
        .image-container{
            width: 40%;
            height: 1000px;
            position: relative;
        }
        @media screen and (max-width: 2100px){
            section{
                padding: 150px 100px;
            }
        }
        @media screen and (max-width: 1920px){
            h2{
                font-size: 120px;
            }
            .image-container{
                height: 900px;
            }
            .new-plans-container{
                width: 85%;
            }
            h3{
                font-size: 45px;
            }
            p{
                font-size: 23px;
            }
            span{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 1700px){
            h2{
                font-size: 105px;
            }
            .image-container{
                height: 800px;
            }
            .new-plans-container{
                width: 100%;
            }
            h3{
                font-size: 42px;
            }
            p{
                font-size: 20px;
            }
            span{
                font-size: 18px;
            }
        }
        @media screen and (max-width: 1500px){
            .image-container{
                height: 700px
            }
        }
        @media screen and (max-width: 1200px){
            section{
                padding: 0px 70px;
            }
            h2{
                font-size: 82px;
            }
            h3{
                font-size: 38px;
            }
            .services-cont{
                width: 85%;
            }
        }
        @media screen and (max-width: 1100px){
            h3{
                font-size: 35px;
            }
        }
        @media screen and (max-width: 1000px){
            section{
                padding: 0 40px;
            }
            h2{
                font-size: 70px;
            }
            .new-plans-container{
                flex-direction: column-reverse !important;
                align-items: center !important;
                justify-content: center !important;
            }
            .card-container{
                width: 100% !important;
                align-items: center;
            }
            #card-container-2, #card-container-4{
                align-items: center !important;
                justify-content: center !important;
            }
            p{
                text-align: center !important;
            }
            span{
                text-align: center !important;
            }
            .image-container{
                height: 600px;
                width: 100%;
                margin-bottom: 50px;
            }
        }
        @media screen and (max-width: 600px){
            .image-container{
                height: 500px;
            }
            h2{
                font-size: 60px;
            }
        }
        @media screen and (max-width: 560px){
            section{
                padding: 0 15px;
            }
            h3{
                font-size: 30px;
            }
        }
        @media screen and (max-width: 480px){
            h3{
                font-size: 25px;
            }
        }
        @media screen and (max-width: 420px){
            h2{
                font-size: 50px;
            }
            .image-container{
                height: 400px;
            }
            h3{
                font-size: 22px;
            }
            p{
                font-size: 18px;
            }
            span{
                font-size: 16px;
            }
        }
    `}</style>
    </section>
  )
}

export default index2