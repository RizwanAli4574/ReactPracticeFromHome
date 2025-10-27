import { useState ,useEffect } from "react"

function FirstExample() {

   const [count,setCount] = useState(0);

   useEffect(() =>{
    console.log("useEffect : First Example");
   });

  return (
    <div style={{textAlign: "center" , marginTop: "40px"}}>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      
    </div>
  )
}

export default FirstExample

