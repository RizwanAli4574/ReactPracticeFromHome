import { useState } from "react"
import { ThemeContext } from "./ThemeContext"
import { UserContext } from "./UserContext";
import SubPage from "./SubPage"

function MainPage() {
    const [theme , setTheme] = useState("light");
    const [user , setUser] = useState("Rizwan Ali")

  return (
    <div>
      <ThemeContext.Provider value={{theme , setTheme}}>
        <UserContext.Provider value={{user , setUser}}>
        <div>
        <h1>Main Page</h1>
        < SubPage />
        </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default MainPage
