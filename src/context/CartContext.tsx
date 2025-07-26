import { createContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  _id: string;
  quantity: number;
};

export type ContextItems = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  onDelete2: (cart: CartItem[], index: number) => void;
};

export const CartContext = createContext<ContextItems | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any>(() => {
    const savedCartItem = localStorage.getItem("cart");
    return savedCartItem ? JSON.parse(savedCartItem) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cartProduct: any) => {
    setCart((prod: any) => {
      const existingItem = prod.find(
        (item: any) => item._id == cartProduct._id
      );

      if (existingItem) {
        return prod.map((item: any) =>
          item._id == cartProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prod, { ...cartProduct, quantity: 1 }];
      }
    });
  };
  const increaseQuantity = (id: string) => {
    setCart((prev: CartItem[]) =>
      prev.map((item) =>
        item._id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id: string) => {
    setCart(
      (prev: CartItem[]) =>
        prev
          .map((item) =>
            item._id == id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) //filter them whose quantity is greater than 0
    );
  };

  const onDelete2 = (cart: any[], index: number) => {
    const arr = [...cart];
    arr.splice(index, 1);
    setCart(arr);
  };

  const value = {
    addToCart,
    cart,
    increaseQuantity,
    decreaseQuantity,
    onDelete2,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
