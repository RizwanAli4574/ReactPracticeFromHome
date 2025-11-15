import ProductCart from "./ProdectCart.jsx";
import './ProductList.css';

const products = [
  { id: 1, name: "Laptop", price: 800 , img :  <img src="/Product Imgs/Laptop.jpg" class="card-img-top img-fluid fit" alt="" />},
  { id: 2, name: "Laptop Charger", price: 200 , img :  <img src="/Product Imgs/Laptop Charger.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 3, name: "Laptop Stand", price: 20 , img :  <img src="/Product Imgs/Laptop Stand.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 4, name: "Laptop Bag", price: 50 , img :  <img src="/Product Imgs/Laptop Bag.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 5, name: "Samsung S25", price: 950 , img :  <img src="/Product Imgs/Samsung S25.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 6, name: "I Phone 13", price: 1000 , img :  <img src="/Product Imgs/I phone 13.jpg" class="card-img-top img-fluid fit" alt="" />},
  { id: 7, name: "Headphone", price: 100 , img :  <img src="/Product Imgs/Headphone.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 8, name: "I Phone Charger", price: 10 , img :  <img src="/Product Imgs/Charger.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 9, name: "Canon Camera", price: 500 , img :  <img src="/Product Imgs/Camera.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 10, name: "Camera Bag", price: 19 , img :  <img src="/Product Imgs/Camera Bag.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 11, name: "KeyBoard", price: 8 , img :  <img src="/Product Imgs/Keyboard.jpg" class="card-img-top img-fluid fit"  alt="" />},
  { id: 12, name: "Mouse", price: 7 , img :  <img src="/Product Imgs/Mouse.jpg" class="card-img-top img-fluid fit"  alt="" />},
];

export default function ProductList() {
  return (
    <div className="row">
      {products.map((p) => (
        <div key={p.id} className="col-lg-4 col-md-6 col-sm-6 col-12  mb-4 product-card">
          <ProductCart 
           product={p}
          />
        </div>
      ))}
    </div>
  );
}
