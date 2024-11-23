import React,{useState} from 'react';

const App=()=>{
   const [count,setCount]=useState(1000);
  return(
  <div>
  <h1>{`The Value Is  increased by 3 is  ${count}`}</h1>
  <button onClick={()=>setCount(count+3)}>add3</button>
  <button onClick={()=>setCount(count-3)}>sub3</button>
  </div>)}

export default App;
