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
import axios from "axios";
// import UserProvider, { UserContext, type User } from "./context/CartContext";
import CartProvider from "./context/CartContext";

// type CartItem = {
//   _id: string;
//   quantity: number;
// };

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [apiUser, setApiUser] = useState<any>();

  useEffect(() => {
    const func = async () => {
      const user = await axios.get("http://localhost:3000/middleware", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setApiUser(user.data);
    };
    func();
  }, []);

  return (
    <>
      <CartProvider>
        <Navbar apiUser={apiUser} setSearchTerm={setSearchTerm} />
        <Routes>
          {/* <Route path="/" element={<Home addToCart={addToCart} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login apiUser={apiUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contact />} />
          <Route
            path="/products"
            // element={<Product  apiUser={apiUser} addToCart={addToCart} searchTerm={searchTerm} />}
            element={<Product apiUser={apiUser} searchTerm={searchTerm} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/carts"
            element={
              <Carts
              // onDelete={onDelete}
              // onDelete2={onDelete2}
              // cart={cart}
              // increaseQuantity={increaseQuantity}
              // decreaseQuantity={decreaseQuantity}
              />
            }
          />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
