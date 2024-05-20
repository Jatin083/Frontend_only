import React, { useState } from 'react'

export const Product = ({namm,data}) => {
  const[a, b] = useState(true);
  return (
    <div className='text-white w-full h-60 bg-zinc-800 '>
      <h4 className={`${a === false ? "text-red-600": "text-blue-600"}`}>{a === false ? "hello":"hiii paaji"}</h4>
      <button onClick={()=>b(!a)}>change</button>
    </div>
  )
}
