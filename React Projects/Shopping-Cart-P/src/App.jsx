import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CartPage from "./Pages/CartPage.jsx";
import  {CartProvider, useCart } from "./Context/CartContext.jsx";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          🛒 MyShop
        </NavLink>
        <div>
          <NavLink className="nav-link d-inline me-3 text-white" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link d-inline text-white" to="/cart">
            Cart ({cart.length})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
