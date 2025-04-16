import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="border-t p-4 mt-5 border-gray-400">
        <div className="links flex gap-3 dark:text-white">
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
<Link to='/project'>Project</Link>
        </div>
        <div className='social  mt-4 text-2xl flex flex-row gap-5 dark:text-zinc-400 '>
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
        <div className="design mt-5 text-right dark:text-white">
        2024 © Designed by - Abhisek Chowdhury
        </div>
    </div>
  )
}

export default Footer