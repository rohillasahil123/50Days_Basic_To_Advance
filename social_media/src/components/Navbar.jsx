import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-green-600"
        >
          Laxmanjara<span className="text-gray-900">Mart</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {/* Home */}
          <Link
            to="/"
            className={`text-sm font-medium ${
              location.pathname === "/"
                ? "text-green-600"
                : "text-gray-700 hover:text-green-600"
            }`}
          >
            Home
          </Link>

          {/* Products */}
          <Link
            to="/categories"
            className="text-sm font-medium text-gray-700 hover:text-green-600"
          >
            Products
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-green-50 hover:bg-green-100 transition"
          >
            <span className="text-xl">🛒</span>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[11px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;