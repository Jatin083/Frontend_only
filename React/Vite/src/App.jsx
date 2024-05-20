import React, { useState } from 'react'
import { Product } from './Product';

const App = () => {
  var [a,b] = useState(56);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-3'>
      <Product namm="value" data={{age: 19, name:"Jatin"}}/>
    </div>
  )
}

export default App