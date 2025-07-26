import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({children})=>{
//     const myName = "shristi";
//     return (
//      <CartContext.Provider value={{myName}}>
//       {children}
//      </CartContext.Provider>
//     )
// }


export type CartItem = {
  _id: string;
  quantity: number;
};

// export interface User{
//   name:string;
//   branch:string;
// }

// export const UserContext = createContext<User|null>(null);
export const UserContext = createContext<CartItem|null>(null);


export default function UserProvider({children}:{children:ReactNode}) {



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



//    const user:User= {
//         name:'shristi',
//         branch:'cse'
//  }


  return (
    <UserContext.Provider value={addToCart}>
    {children}
    </UserContext.Provider>
  )
}




