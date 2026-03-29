import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    setIsCheckedOut(true);
  };

  if (isCheckedOut) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 text-center transform transition-all hover:scale-105 border border-gray-100">
          <div className="w-28 h-28 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Order Successful!</h1>
          <p className="text-gray-500 mb-8 text-lg font-medium">Thank you for ordering with us. Your delicious food is being prepared!</p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 active:scale-95"
            onClick={() => setIsCheckedOut(false)}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const itemTotal = cartItems.reduce((total, item) => total + (item.price || item.defaultPrice || 0), 0);
  const discount = itemTotal * 0.10;
  const finalTotal = itemTotal - discount;

  return (
    <div className="min-h-[80vh] flex flex-col items-center p-6 bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-md p-8 mt-5 border border-gray-100">
        <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-gray-50">
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">Your Cart</h1>
          {cartItems.length > 0 && (
            <button
              className="px-5 py-2.5 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-all shadow-sm active:scale-95 flex items-center gap-2"
              onClick={handleClearCart}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center">
            <span className="text-7xl mb-6 opacity-40 hover:opacity-100 transition-opacity cursor-default animate-bounce">🛒</span>
            <h2 className="text-2xl font-extrabold text-gray-700 mb-3">Cart is empty</h2>
            <p className="text-gray-400 font-medium mb-8">Looks like you haven't added anything yet.</p>
            <Link to="/" className="px-8 py-3.5 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 active:scale-95">
              Explore Restaurants
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items */}
            <div className="flex-1 space-y-5">
              {cartItems.map((item, index) => (
                <div key={item.id + "-" + index} className="flex justify-between items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div>
                    <h3 className="font-extrabold text-gray-800 text-lg group-hover:text-orange-500 transition-colors">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1 mt-1 font-medium">{item.description}</p>
                  </div>
                  <div className="font-black text-gray-800 text-xl whitespace-nowrap ml-6 bg-gray-50 px-4 py-2 rounded-xl">
                    ₹{item.price || item.defaultPrice}
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Details */}
            <div className="w-full lg:w-[380px] bg-gray-50 rounded-3xl p-8 h-fit border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-gray-800 mb-6 pb-4 border-b-2 border-gray-200/60">Bill Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-gray-600 font-medium text-lg">
                  <span>Item Total</span>
                  <span className="font-extrabold text-gray-800">₹{itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-green-600 font-bold bg-green-50 p-4 rounded-2xl border border-green-100">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Discount (10%)
                  </span>
                  <span>- ₹{discount.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-200/60 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-gray-800 text-xl">To Pay</span>
                  <span className="font-black text-orange-600 text-3xl">₹{finalTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">Includes all applicable taxes</p>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 active:scale-95 flex justify-center items-center gap-2 group"
              >
                Proceed to Checkout
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
