// import { useState } from "react";

// function SimpleForm() {
//     const [name,setNmae] = useState("")
//     const [email,setEmail] = useState("")

// const handleSubmit = (e) =>{
//     e.preventDefault()
//     console.clear()
//     console.log("Nmae" , name)
//     console.log("Email" , email)
// }
//   return (
//     <form onSubmit={handleSubmit}>
//         <h2>React Form Example</h2>

//         <label>Name: </label>
//         <input 
//         type="text" 
//         value={name} 
//         onChange={(e)=> setNmae(e.target.value)}
//         />

//         <br/>
//         <br/>

//         <label>Email: </label>
//         <input 
//         type="email"
//          value={email} 
//          onChange={(e)=> setEmail(e.target.value)}
//          />

//         <br/>
//         <br/>

//         <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default SimpleForm
