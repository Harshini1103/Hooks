import React, { useState } from 'react';



const App = () => {
   const [count,setCount]=useState(0); 
  return (
    <div className='font-black text-center text-2xl'>
        <h1>counter:{count}</h1>
        <button onClick={()=>setCount(count+1)} className="border border-gray-500 p-2 rounded ml-2">Increase</button>
        <button onClick={()=>setCount(count-1)} className="border border-gray-500 p-2 rounded ml-2">Decrease</button>
        <button onClick={()=>setCount(0)} className="border border-gray-500 p-2 rounded ml-2">Reset</button>
    </div>
  )
}

export default App;
