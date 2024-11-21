import React, { useEffect, useState } from 'react';
function LifeCycle(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0)
    // type-1
    // useEffect(()=>{
    //     console.log("Use Effect Executing!");
        
    // })
    //type-2
//     useEffect(()=>{
// console.log("Use Efffect Executing");

//     },[count1])
// type-3
useEffect(()=>{
    console.log("Use eFFect Executing");
    
},[])
    return<>
    <h1>{count1}</h1>
    <h2>{count2}</h2>
    <button onClick={()=>setCount1(count1+1)}>Click This</button>
    <button onClick={()=>setCount2(count2+1)}>Click This</button>
    </>
}
export default LifeCycle;

