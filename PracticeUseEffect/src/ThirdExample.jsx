import { useState , useEffect } from "react";

function ThirdExample() {
  const [count,setCount] = useState(0);
  
     useEffect(() =>{
        if(count > 0 ) {
      console.log("useEffect : Third Example");
        }
     },[count]);
  
    return (
      <div style={{textAlign: "center" , marginTop: "40px"}}>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        
      </div>
    )
}

export default ThirdExample
