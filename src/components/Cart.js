import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center p-6 bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-8 mt-5 border border-gray-100">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
          <h1 className="text-3xl font-extrabold text-gray-800">Your Cart</h1>
          {cartItems.length > 0 && (
            <button
              className="px-4 py-2 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors shadow-sm active:scale-95 flex items-center gap-2"
              onClick={handleClearCart}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 flex flex-col items-center">
            <span className="text-6xl mb-4 opacity-50">🛒</span>
            <h2 className="text-xl font-bold text-gray-600 mb-2">Cart is empty</h2>
            <p className="text-gray-400">Go to restaurants and add some items to your cart.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id + "-" + index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  {item.imageId && (
                    <img 
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                  </div>
                </div>
                <div className="font-extrabold text-orange-500 text-lg whitespace-nowrap ml-4">
                  ₹{(item.price || item.defaultPrice) / 100 || item.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
