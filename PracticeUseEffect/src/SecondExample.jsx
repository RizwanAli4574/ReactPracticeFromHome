import { useState , useEffect } from "react";

function SecondExample() {
    const [count,setCount] = useState(0);
  
     useEffect(() =>{
      console.log("useEffect : Secound Example");
     },[]);
  
    return (
      <div style={{textAlign: "center" , marginTop: "40px"}}>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        
      </div>
    )
}

export default SecondExample

