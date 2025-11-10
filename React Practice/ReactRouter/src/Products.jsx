import { Link , Outlet} from "react-router-dom"


function Products() {
  return (
    <div>
      <h3>Products page :</h3>
      <nav>
        <Link to="phone">Phone</Link> | 
        <Link to="laptop"> Laptop</Link> 
      </nav>

      < Outlet />
    </div>
  )
}

export default Products
