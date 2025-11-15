import { useCart } from "../Context/CartContext.jsx";



export default function ProductCart({product}) {
 const {addToCart } = useCart();

  return (
    <div className="card shadow-sm h-100 text-center">
      <div className="card-body">
        <div>{product.img}</div>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button 
        onClick={ () => addToCart(product)}
        className="btn btn-outline-secondary">Add to Cart</button>
      </div>
    </div>
  );
}


