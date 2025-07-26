import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  setSearchTerm: (term: string) => void;
  apiUser: any;
}

export default function Navbar({ setSearchTerm, apiUser }: NavbarProps) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigate = useNavigate();

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-300">
      <div className="flex justify-between items-center px-6 py-2 h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          ShopEase
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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

        {/* Search Bar (Desktop) */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1.5 text-gray-500" />
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
              navigate("/products");
            }}
            type="text"
            placeholder="search product......"
            className="border border-gray-300 pl-10 pr-3 py-1 rounded-xl"
          />
        </div>

        {/* Right Side - Cart & Auth */}
        <div className="flex items-center space-x-4">
          <NavLink to="/carts">
            <ShoppingCart />
          </NavLink>

         {

        !apiUser ?  
          <>
          <Link
              to="/Login"
              className="hover:bg-gray-200 border border-gray-300 rounded-sm px-4 py-1"
            >
              Login
            </Link> 
          <Link
            to="/register"
            className="hover:bg-gray-200 border border-gray-300 rounded-sm px-4 py-1"
          >
            Register
          </Link>
          </>
          : <p>Logged</p>
         }


          {/* Hamburger Button (Mobile) */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink to="/" onClick={closeMenu} className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                onClick={closeMenu}
                className="hover:underline"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className="hover:underline"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                onClick={closeMenu}
                className="hover:underline"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
