import { useState } from "react"

function Parent(){
  const [text , setText] =useState("");
  return (
    <>
    < Child change={setText}/> 
    < Display value={text}/>
    </>
  )
  
  
  
}

function Child({change}){
 return (
  <>
  <input type="text" 
  placeholder="Enter Your Name"
  onChange={(e) => change(e.target.value)}
  />
  </>
 )
}

function Display({value}){
 return <h3>Typed : {value}</h3>
}



function App() {
  return (
    <>
      <Parent />
    </>
  )
}

export default App
