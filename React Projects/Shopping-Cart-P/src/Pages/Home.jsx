import ProductList from "../Components/ProdectList.jsx"


export default function Home(){

    return (
         <div className="container" style={{marginTop: "80px"}}>
      <h1 className="mb-4 text-center">Shop Products</h1>
         < ProductList />
    </div>
    )

}