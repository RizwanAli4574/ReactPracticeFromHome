// import { useState } from "react"


// function MultiInput() {
//     const[formdata,setFormdata] = useState({
//         name: "",
//         email:"",
//         age:"",
//     })
//     const handlesubmit = (e) =>{
//         e.preventDefault()
//         console.log(formdata)
//     }
//     const handleChange = (e) =>{
//         const {name , value} = e.target;
//         setFormdata((prev) => ({
//             ...prev, 
//             [name] : value
//         }))

//     }
//   return (
//     <form onSubmit={handlesubmit}>
//         <h2>Multi Input Form</h2>

//         <input
//          name="name" 
//          type="text" 
//          placeholder="Name"
//          value={formdata.name}
//          onChange={handleChange}
//          />
//         <br/>

//         <input 
//         name="email" 
//         type="email"
//         placeholder="Email"
//         vale={formdata.email}
//         onChange={handleChange}

//          />
//         <br/>

//         <input 
//         name="age" 
//         type="number" 
//         placeholder="Age"
//         vale={formdata.age}
//          onChange={handleChange}
        
//         />
//         <br/>

//         <button type="submit">Submit</button>



//     </form>
//   )
// }

// export default MultiInput
