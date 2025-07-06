import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-white-500 sticky top-0 z-50 flex justify-between items-center  space-x-6  px-6 py-2 border-b border-gray-300 h-15">
      {/* logo */}
      <Link to="/" className="text-2xl font-bold text-black">
        ShopEase
      </Link>

      {/* Navigation Link */}
      <div className="flex justify items-center space-x-6">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/Products" className="hover:underline">
          Products
        </NavLink>
        <NavLink to="/about" className="hover:underline">
          About
        </NavLink>
        <NavLink to="/contacts" className="hover:underline">
          Contacts
        </NavLink>
      </div>

      {/* search link */}
      <div className="relative ">
        <Search className="absolute left-3 top-1.5" />
        <form action="" className="flex items-center ">
          <input
            type="text"
            placeholder="search product......"
            className="border-1 border-gray-300 pl-10 px-3 py-1 rounded-xl "
          />
        </form>
      </div>

      {/* login and signup */}

      <div className=" flex items-center justify-between space-x-5 mr-2">
        <NavLink to="/cart">
          <ShoppingCart />
        </NavLink>
        <button className=" hover:bg-gray-200 border border-gray-300 rounded-sm px-4 py-1">
          <Link to="/Login">Login</Link>
        </button>

        <button className=" hover:bg-gray-200 border border-gray-300 rounded-sm px-4 py-1">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </nav>
  );
}
