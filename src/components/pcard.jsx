import React from 'react'

function Pcard(props) {
  return (
    <div className="p-card w-[30%] p-4 h-64 mb-4 rounded-md drop-shadow-2xl group hover:bg-slate-100  dark:hover:bg-zinc-800 max-lg:w-4/5">
        {props.children}
    </div>
  )
}

export default Pcard