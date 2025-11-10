import { BrowserRouter , Routes , Route, NavLink } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/CartPage"

function Navbar(){
 return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">🛒 MyShop</NavLink>
        <div>
          <NavLink className="nav-link d-inline me-3 text-white" to="/">Home</NavLink>
          <NavLink className="nav-link d-inline text-white" to="/cart">Cart (2)</NavLink>
        </div>
      </div>
    </nav>
 )
}


function App() {
  

  return (
   <BrowserRouter>
    < Navbar />
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/cart" element={<Cart />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
