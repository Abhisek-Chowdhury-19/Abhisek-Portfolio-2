import React from 'react'

function Card(props) {
  return (
    <div className="card py-4 px-4 rounded-md mt-6 w-9/12 hover:bg-slate-200 dark:hover:bg-zinc-800 max-lg:w-full">  
{props.children}
    </div>
  )
}

export default Card