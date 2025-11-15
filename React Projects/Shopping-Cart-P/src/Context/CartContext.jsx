import { createContext , useContext , useState} from "react";

const CartContext = createContext();



export function CartProvider({children}) {
  const [cart , setCart] = useState([]);


   const addToCart = (product) => {
        setCart( (prev) => {
            const existing = prev.find( (item) => item.id === product.id)
            if(existing){
              return prev.map( (item) => item.id === product.id ?  {...item , qty: item.qty + 1}  : item)
            } return [...prev , {...product , qty: 1}]
        })
        alert(`Add ${product.name} Successfully`)
   }
  

  const removeProduct = (id) => {
    setCart( (prev) => prev.filter( (item) => item.id !== id))
    
  }


  const updateQty = (id,qty) => {
    setCart( (prev) => 
      prev.map( (item) => (item.id === id ? {...item , qty} : item))
    )
  }

  const total = cart.reduce( (sum ,item) => sum + item.price * item.qty , 0)

  return (
    <div>
        <CartContext.Provider value={{cart,addToCart,removeProduct,updateQty,total}}>
           {children}
        </CartContext.Provider>
    </div>
  )
}



// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);