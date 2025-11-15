import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      toast.info(`${product.name} Already Added`);
      return; 
    }

    setCart((prev) => [...prev, { ...product, qty: 1 }]);
    toast.success(`Added ${product.name} Successfully`);
  };

  const removeProduct = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <CartContext.Provider
        value={{ cart, addToCart, removeProduct, updateQty, total }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
