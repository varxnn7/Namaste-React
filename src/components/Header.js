import { LOGO_URL } from "../utils/constant.js";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  const cartItems = useSelector((store) => store.cart.items);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/grocery", label: "Grocery" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <span className="text-white text-xl">🍔</span>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight hidden sm:block">
              Namaste<span className="text-orange-400">React</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(to)
                    ? "bg-white/20 text-white shadow-inner"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side: status + cart + login */}
          <div className="flex items-center gap-3">
            {/* Online status */}
            <div className="hidden sm:flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <span className="text-sm">{onlineStatus ? "✅" : "🔴"}</span>
              <span className="text-xs text-gray-300 font-medium">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>

            {/* Login/Logout button */}
            <button
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 ${
                btnNameReact === "Login"
                  ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
              }`}
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact === "Login" ? (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-3 pt-1 border-t border-white/10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg my-1 text-sm font-medium transition-all duration-200 ${
                  isActive(to)
                    ? "bg-white/20 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;