import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

function Nav() {
  const [dark,setdark]=useState(true);
  const [show,setshow]=useState(false);
  var toogledark=()=>{
    setdark(!dark);
    modechange();
  }
  var modechange=()=>{
    if (!dark) {
      document.querySelector('body').classList.add('dark');
    }
    else{
      document.querySelector('body').classList.remove('dark');
    }
  }
  var tooglemenu=()=>{
setshow(!show);
if (!show) {
  document.querySelector('#navbar-default').classList.remove("hidden");
}
else{
  document.querySelector('#navbar-default').classList.add("hidden");

}
  }
var  links=[{
  id:1,
  link:'/',
  data:"Home"
},
{
  id:1,
  link:'/about',
  data:"About"
},
{
  id:1,
  link:'/contact',
  data:"Contact"
},
{
  id:1,
  link:'/project',
  data:"Project"
}
  
  
];
  return (
   <nav>
<div className="navbar h-20 w-full px-20 mt-1 fixed flex items-center justify-between z-50 max-lg:px-8">
    <div className="logo px-1">
       <span className=" text-4xl font-semibold dark:text-white">Abhisek<span className="text-cyan-500 font-bold">.</span></span>
    </div>
    <div className="menu  max-lg:hidden bg-stone-100 py-2 px-2 rounded-3xl dark:bg-zinc-800" >
    {links.map(function(data) {
      return (
    
           <Link to={data.link} key={data.key} className="mx-5 text-l dark:text-white"> {data.data}</Link>
    
      )
    })}
       
    </div>
    <div className="m-menu bg-stone-100 py-2 px-5 hidden max-lg:block rounded-3xl dark:bg-zinc-800" >
      <h1 className="font-bold flex items-center justify-center gap-3 dark:text-white" onClick={tooglemenu}>
        Menu <i class="bi bi-caret-down-fill"></i>
      </h1>
    </div>
    <div className="mode text-lg bg-stone-100 px-3 py-1.5 rounded-full flex justify-center items-center text-black dark:bg-zinc-800 " onClick={toogledark}>
    <i class={(dark) ? "bi bi-brightness-high dark:text-white" : "bi bi-moon-stars"}></i>
    </div>
    </div>
    <div className="nav-m hidden fixed flex flex-col bg-white h-2/5 mt-24 z-50 w-11/12 ml-[4%] rounded-lg  lg:hidden  dark:bg-zinc-800" id='navbar-default' >
    {links.map(function(data) {
      return (
    
           <Link to={data.link} key={data.key} className="mx-5 text-xl mt-5  dark:text-white"> {data.data}</Link>
    
      )
    })}
    </div>
   </nav>
  )
}

export default Nav