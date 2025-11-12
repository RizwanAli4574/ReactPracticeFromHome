import ProductCart from "./ProdectCart";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Mobile", price: 700 },
  { id: 4, name: "Mouse", price: 900 },
  { id: 5, name: "TelePhone", price: 1000 },
  { id: 6, name: "Card", price: 800 },
];

export default function ProductList() {
  return (
    <div className="row">
      {products.map((p) => (
        <div key={p.id} className="col-md-3 mb-4">
          <ProductCart 
           product={p}
          />
        </div>
      ))}
    </div>
  );
}
