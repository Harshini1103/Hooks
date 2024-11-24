import React, { useState } from 'react';
const Hello=()=>{

 const [count,setCount]=useState(0);
 
const Increment=()=>
{
setCount((arr)=>arr+1)
}
const Decrement=()=>
{
setCount((arr)=>arr-1)
}
  return<div>
<h1>{count}</h1>
<button onClick={ Increment}>+</button>
<button onClick={Decrement}>-</button>
  </div>
}
export default Hello;
