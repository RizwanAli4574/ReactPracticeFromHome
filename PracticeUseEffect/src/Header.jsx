import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { UserContext } from "./UserContext"

function Header() {

    const {theme , setTheme} = useContext(ThemeContext);
    const {user , setUser} = useContext(UserContext);

    
  return (
    <div
    style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color : theme === "light" ? "#000" : "#fff" ,
        padding : "20px",
        borderRadius : "10px",
        textAlign : "center",
    }}
    >
      <h3>Header Component</h3>
      <p>Welcome : {user}</p>
      <p>Current Theme : {theme} </p>
      <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >{theme === "light" ? "Convert To Dark"  : "Convert To light"}</button>

        <br />
        <br />
      <button
       onClick={ () => {
        setUser(user === "Rizwan Ali" ? "Guest User" : "Rizwan Ali")
       }}
      >
        Change User
      </button>
    </div>
  )
}

export default Header
