import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Laptop from "./Laptop";
import Phone from "./Phone";
import './Open.css'

function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>user profile {id}</h2>;
  }

  function NotFound() {
    return <h2>404 - Page Not Found</h2>;
  }

  return (
    <BrowserRouter>
      <h1>React Router Example</h1>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          {" "}
          Home |
        </NavLink>

        <NavLink 
        to="/about" 
        className="nav-link-about">
        About</NavLink> 
        
        |<Link to="/contact">Contact</Link> |
        <Link to="/user/05">User</Link> |<Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />

        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
