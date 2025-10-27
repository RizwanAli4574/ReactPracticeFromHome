import { useState } from "react"

function BasicVForm() {
    const [name , setNmae] = useState("");
    const [email , setEmail] = useState("");
    const [error , setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name || !email){
            setError("Please fill all fields")
        }else {
            setError("");
            console.log("Form Submitt" , {name , email})
            alert("Form Submitt Successfully")
        }
    }
  return (
   <form onSubmit={handleSubmit}>
    <h2>Basic Validation Form</h2>

    <input type="text" 
    placeholder="Enter your name"
    value = {name}
    onChange={(e)=>setNmae(e.target.value)}
    />
    <br/>    
    <br/>

    <input 
    type="email" 
    placeholder="Enter your Email"
    value = {email}
    onChange={(e)=>setEmail(e.target.value)}
    />  
    <br/>  
    <br/>  
    
    {error && <p style={{color: "red"}}>{error}</p>}

    <button type="submit">Submit</button>  

   </form>
  )
}

export default BasicVForm
