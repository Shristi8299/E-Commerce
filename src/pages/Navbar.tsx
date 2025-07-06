import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-pink-600">
        ShopEase
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-gray-700 text-md font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 underline underline-offset-4"
              : "hover:text-pink-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 underline underline-offset-4"
              : "hover:text-pink-600"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 underline underline-offset-4"
              : "hover:text-pink-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 underline underline-offset-4"
              : "hover:text-pink-600"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Cart + Auth Buttons */}
      <div className="flex items-center gap-5">
        <Link to="/cart" className="relative">
          <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-pink-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </Link>

        <Link
          to="/login"
          className="bg-pink-600 text-white px-4 py-1.5 rounded hover:bg-pink-700 text-sm"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="border border-pink-600 text-pink-600 px-4 py-1.5 rounded hover:bg-pink-50 text-sm"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
