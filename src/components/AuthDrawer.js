import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthDrawer = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      if (isLogin) {
        // Sign IN
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        onAuthSuccess(userCredential.user);
      } else {
        // Sign UP
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        onAuthSuccess(userCredential.user);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex justify-end transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Click outside to close (backdrop) */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-60' : 'opacity-0'}`} 
        onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div 
        className={`relative w-full sm:w-[450px] h-full bg-white shadow-2xl overflow-y-auto pt-8 px-10 transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <button onClick={onClose} className="text-gray-700 hover:text-black hover:scale-110 transition-all font-black text-xl border-0 bg-transparent flex items-center justify-center p-2 mb-8 -ml-2">
          ✕
        </button>

        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-[30px] font-semibold text-gray-800 mb-2">{isLogin ? "Login" : "Sign up"}</h2>
            <p className="text-[13px] font-medium text-gray-500">
              {isLogin ? "or " : "or "}
              <span className="text-[#fc8019] cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "create an account" : "login to your account"}
              </span>
            </p>
            <div className="w-8 border-b-2 border-black mt-4"></div>
          </div>
          <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" 
            alt="Food" 
            className="w-[100px] h-[105px] object-cover rounded-[50%]" 
          />
        </div>

        <form onSubmit={handleAuth} className="flex flex-col">
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border border-gray-300 px-5 py-6 text-lg focus:outline-none focus:border-black font-medium transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input 
            type="email" 
            placeholder="Email" 
            className={`w-full border border-gray-300 px-5 py-6 text-lg focus:outline-none focus:border-black font-medium transition-colors ${!isLogin ? 'border-t-0' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border border-gray-300 px-5 py-6 text-lg focus:outline-none focus:border-black font-medium border-t-0 transition-colors"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMsg && <p className="text-red-500 text-sm mt-3 font-medium bg-red-50 p-3 rounded">{errorMsg}</p>}

          <button 
            type="submit" 
            className="w-full bg-[#fc8019] text-white font-bold py-4 mt-8 text-sm hover:shadow-lg transition-shadow tracking-wider"
          >
            {isLogin ? "LOGIN" : "CONTINUE"}
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 leading-relaxed font-medium">
          By clicking on {isLogin ? 'Login' : 'Continue'}, I accept the <span className="text-black font-semibold cursor-pointer">Terms & Conditions</span> & <span className="text-black font-semibold cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default AuthDrawer;
