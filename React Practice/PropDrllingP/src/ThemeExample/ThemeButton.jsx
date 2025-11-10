import { useContext } from "react"
import ThemeContext from "./ThemeContext"



 function ThemeButton(){
   const {theme , setTheme} = useContext(ThemeContext)
 return (
  <>
  <button
  onClick={ () => setTheme( theme === "light" ? "dark" : "light")}
  style={{
    cursor : "pointer" ,
    border : "2px solid black" ,
    borderRadius : "5px" ,
    backgroundColor : theme === "light" ? "#fff" : "#333",
    color : theme === "light" ? "#333" : "#fff"
  }}
  >Current Theme : {theme}</button>
  </>
 )
}

export default ThemeButton