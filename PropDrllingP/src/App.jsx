import { useState } from "react";
import { ToolBar } from "./ThemeExample/ToolBar";
import ThemeContext from "./ThemeExample/ThemeContext";

function App() {
 
  const [theme , setTheme] = useState("light");
  return (
    <>
    <ThemeContext.Provider value={{theme , setTheme}}>
       <ToolBar />
    </ThemeContext.Provider>
     
    </>
  )
}
export default App














// import { createContext , useContext } from "react";

// const userContext = createContext();


// function App() {

//   const user = {
//     name : "Rizwan Ali",
//     age : 27
//   }
//   return (
//     <>
//     <userContext.Provider value={user}>
//        <Parent />
//     </userContext.Provider>
     
//     </>
//   )
// }


// function Parent(){

//   return (
//     <>
//    < Child />
//     </>
//   )
  
  
  
// }

// function Child(){
//  return (
//   <>
//  <GrandChild />
//   </>
  
//  )
// }

// function GrandChild(){
//   const {name , age} = useContext(userContext)
//  return (
  
//   <>
//     <h3 >Your Name is {name} and your age is : {age}</h3>
//   </>
//  )
// }


// export default App

