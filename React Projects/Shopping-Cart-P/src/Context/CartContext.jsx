import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const toastRun = useRef(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (!toastRun.current) {
        if (existing) {
          toast.info(`${product.name} Already Added`);
        } else {
          toast.success(`Added ${product.name} Successfully`);
        }
      }

      toastRun.current = true;

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    setTimeout(() => {
      toastRun.current = false;
    }, 200);
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
