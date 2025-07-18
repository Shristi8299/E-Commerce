import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contacts";
import Product from "./pages/Product";
import About from "./pages/About";
import Footer from "./components/Footer";
import Carts from "./pages/Carts";
import ProductDetails from "./pages/ProductDetails";
import { useEffect, useState } from "react";
import Test from "./pages/Test";

type CartItem = {
  _id: string;
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<any>(() => {
    const savedCartItem = localStorage.getItem("cart");
    return savedCartItem ? JSON.parse(savedCartItem??[]) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cartProduct: any) => {
    //   const existingItem = cart.find((item :any)=>(
    //   item._id == cartProduct._id
    // ))

    // if(!existingItem){
    //  setCart([...cart , cartProduct ]);
    // }

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
    setCart((prev: CartItem[]) =>
      prev.map((item) =>
       ( item._id == id && item.quantity > 0) ? { ...item, quantity:item.quantity-1}: item
      )
    );
  
  };


  // deletion product from cart feature 
  // const onDelete = (cart , index) =>{
  //   console.log("cartItem =" , cart);
  //   cart.splice(index , 1)
  //   console.log("cart after deletion=" , cart)
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log("item deleted");
  // }

  const onDelete = (id)=>{
    console.log("id=" , id);
    setCart((prev)=>{
      const product = prev.filter((item)=>(item._id != id))
      console.log(product);
    })
  }
 
  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contact />} />
        <Route
          path="/products"
          element={<Product addToCart={addToCart} searchTerm={searchTerm} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/carts"
          element={
            <Carts
              onDelete={onDelete}
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
