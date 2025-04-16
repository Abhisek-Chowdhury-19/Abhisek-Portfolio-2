import React from 'react'
import Nav from '../components/Nav'
import Page from '../components/page'
import Footer from '../components/footer'
import me from '../assets/img/hero-img.jpg'
import html from '../assets/img/logo/html.png'
import css from '../assets/img/logo/css.png'
import js from  '../assets/img/logo/js.png'
import tailwind from '../assets/img/logo/tailwind.png'
import sql from '../assets/img/logo/mysql.png'
import react from '../assets/img/logo/react.png'
import php from '../assets/img/logo/php.png'
import Card from '../components/card'
import Work from '../components/Work'

function About() {
  return (
    <>
    <Nav></Nav>
    <Page >
    <div className="hero min-h-screen flex flex-row  pt-36  px-9 max-lg:flex-col">
      <div className="hero-text w-full flex flex-col justify-center ">
  
    <h2 className=" text-3xl font-bold dark:text-white">
    Hello, I'm Abhisek Chowdhury, <br />
Full Stack Developer Based in Kolkata,India.
    </h2>
    <div className="social mt-9 text-2xl flex flex-row gap-5 dark:text-zinc-400 ">
    <a href="https://twitter.com/Abhisek1927" target='_blank'> 
      <i class="bi bi-twitter-x text-zinc-500 hover:text-black dark:hover:text-white"></i>
      </a> 
      <a href="https://github.com/Abhisek-Chowdhury-19" target='_blank'>
    <i class="bi bi-github text-zinc-500 hover:text-black dark:hover:text-white"></i>
    </a>
    <a href="https://www.linkedin.com/in/abhisek-chowdhury-294775210/">
    <i class="bi bi-linkedin text-zinc-500 hover:text-black dark:hover:text-white"></i>
    </a>

    
    </div>
    <p className="mt-6 text-lg dark:text-white">
    Hello there! I'm Abhisek Chowdhury, 
    a BCA graduate with a passion for crafting digital experiences.
     As a full stack developer at The Webtrix Limited, I specialize in leveraging a
      dynamic array of technologies to bring projects to life. My toolkit includes 
      HTML, CSS, JavaScript, TailwindCSS, React.js, PHP, and MySQL. With a year of 
      hands-on experience, I've delved into diverse projects ranging from e-commerce 
      platforms to booking systems, each tailored to meet unique client needs. 
      From front-end finesse to back-end functionality, I thrive on delivering 
      seamless solutions. 
    Let's build something remarkable together!
 </p>

    </div>
    <div className="hero-img w-2/5 flex justify-center items-center max-lg:w-full max-lg:mt-12">
    <img src={me} className="w-4/5 rounded-lg rotate-2 drop-shadow-lg max-lg:w-2/4 max-md:w-3/4" />
    </div>
      </div>
     <Work />
      <Footer></Footer>
    </Page>
    </>
  )
}

export default About