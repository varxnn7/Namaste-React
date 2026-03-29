import { LOGO_URL } from "../utils/constant.js";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";
import AuthDrawer from "./AuthDrawer";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsAuthOpen(false); // Close modal when logged in
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const cartItems = useSelector((store) => store.cart.items);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/grocery", label: "Grocery" },
  ];

  const isActive = (path) => location.pathname === path;

  // Detect if it is the unauthenticated landing page based on user and route
  const isLandingPage = !user && location.pathname === '/';

  return (
    <header className={`${isLandingPage ? 'bg-[#ff5200] shadow-none pt-4' : 'bg-white dark:bg-gray-900 shadow-md border-b border-gray-100 dark:border-gray-800'} sticky top-0 z-50 transition-colors duration-300`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 ${isLandingPage ? 'bg-white' : 'bg-gradient-to-br from-orange-400 to-pink-500'}`}>
              <span className={`text-2xl ${isLandingPage ? '' : 'text-white'}`}>{isLandingPage ? '🟧' : '🍔'}</span>
            </div>
            <span className={`font-extrabold text-2xl tracking-tight hidden sm:block ${isLandingPage ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
              {!isLandingPage ? (
                <>Food <span className="text-orange-500">Steps</span></>
              ) : (
                <>Food Steps</>
              )}
            </span>
          </Link>

          {/* Desktop Nav */}
          {isLandingPage ? (
            <nav className="hidden lg:flex items-center gap-10 ml-auto mr-10 font-sans">
              <span className="text-white font-bold hover:opacity-80 transition-opacity cursor-pointer text-lg tracking-wide">Food Steps Corporate</span>
              <span className="text-white font-bold hover:opacity-80 transition-opacity cursor-pointer text-lg tracking-wide">Partner with us</span>
              <button className="border border-white/50 text-white font-bold px-5 py-2.5 rounded-[14px] hover:bg-white/10 transition-colors flex items-center gap-2 text-lg">
                Get the App 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </button>
            </nav>
          ) : (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive(to)
                      ? "bg-gray-100 dark:bg-gray-800 text-[#ff5200] shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}

          {/* Right side: status + cart + login */}
          <div className="flex items-center gap-3">
            {/* Online status */}
            {!isLandingPage && (
              <div className="hidden sm:flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                <span className="text-sm">{onlineStatus ? "✅" : "🔴"}</span>
                <span className="text-xs text-gray-300 font-medium">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </div>
            )}

            {/* Cart */}
            {!isLandingPage && (
              <Link
                to="/cart"
                className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
            )}

            <button
              className={`transition-all duration-300 flex items-center gap-2 active:scale-95 ${
                isLandingPage
                  ? "bg-black text-white px-8 py-3.5 rounded-[14px] font-bold text-[17px] hover:bg-black/80 hover:scale-[1.02] shadow-xl"
                  : !user
                  ? "px-5 py-2.5 rounded-xl text-[15px] font-bold shadow-md bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:scale-105"
                  : "px-5 py-2.5 rounded-xl text-[15px] font-bold shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md hover:scale-105"
              }`}
              onClick={() => {
                if (user) {
                  handleLogout();
                } else {
                  setIsAuthOpen(true);
                }
              }}
            >
              {!user ? (
                <>
                  {!isLandingPage && (
                    <svg className="w-5 h-5 text-[#fc8019]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  <span className={!isLandingPage ? "text-[#fc8019] tracking-tight" : "text-white tracking-wide"}>Sign in</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]">{user.displayName || "Sign Out"}</span>
                </>
              )}
            </button>

            {/* Mobile menu button */}
            {!isLandingPage && (
              <button
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
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
            )}
          </div>
        </div>

        {/* Mobile Nav dropdown */}
        {menuOpen && !isLandingPage && (
          <div className="md:hidden pb-3 pt-1 border-t border-white/10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg my-1 text-sm font-bold transition-all duration-200 ${
                  isActive(to)
                    ? "bg-gray-100 dark:bg-gray-800 text-[#ff5200] shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <AuthDrawer isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onAuthSuccess={() => setIsAuthOpen(false)} />
    </header>
  );
};

export default Header;