import React from 'react'

function Page(props) {
  return (
    <div className="min-h-screen bg-slate-200 px-16 dark:bg-black max-lg:px-0 overflow-hidden">
        <div className="bg-white h-full dark:bg-zinc-900">
        {props.children}
        </div>
    </div>
  )
}

export default Page