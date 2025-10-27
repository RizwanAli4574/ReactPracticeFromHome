// import { useState } from "react";

// function Advanceform() {
//   const [formData, setFormData] = useState({
//     gender: "",
//     country: "pakistan",
//     agree: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const handleChange = (e) => {
//     const { name, type, value , checked} = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Form with Checkbox , Radio & Select</h2>

//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={formData.gender === "Male"}
//           onChange={handleChange}
//         />
//         Male
//       </label>
//       <br />

//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={formData.gender === "Female"}
//           onChange={handleChange}
//         />
//         Female
//       </label>
//       <br />

//       <label>
//         country:
//         <select name="country" 
//         value={formData.country} 
//         onChange={handleChange}>
//           <option value="Pakistan">Pakistan</option>
//           <option value="Usa">USA</option>
//           <option value="UK">UK</option>
//         </select>
//       </label>
//       <br />

//       <label>
//         <input type="checkbox" 
//         name="agree"
//         checked={formData.agree}
//         onChange={handleChange} 
//         />I agree to term and condition
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Advanceform;
