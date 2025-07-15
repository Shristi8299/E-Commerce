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
function App() {
  return (
    <> 
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
