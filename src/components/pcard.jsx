import React from "react";

function Pcard(props) {
  return (
    <div className="p-card w-[30%] p-4  mb-4 rounded-md  group hover:bg-slate-100  dark:hover:bg-zinc-800 dark:bg-zinc-900 max-lg:w-4/5">
      {props.children}
    </div>
  );
}

export default Pcard;
