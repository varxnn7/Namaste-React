import React from "react";

const Grocery = () => {
    const groceryCategories = [
        { name: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=200&q=80" },
        { name: "Rice & Atta", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80" },
        { name: "Snacks", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=200&q=80" },
        { name: "Beverages", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80" },
        { name: "Dairy", img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=200&q=80" },
        { name: "Cleaning", img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=200&q=80" },
        { name: "Personal Care", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=200&q=80" },
        { name: "Meat & Fish", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=200&q=80" }
    ];

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
            {/* Hero Section */}
            <div className="bg-[#ff5200]/10 py-12 px-4 shadow-inner">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-[#3d4152] dark:text-white mb-4 tracking-tight">
                        Food Steps <span className="text-[#ff5200]">Instamart</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl">
                        Instantly delivered groceries from 9am to 9pm. Fresh fruits, vegetables, dairy, snacks, and more!
                    </p>
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 flex items-center justify-between w-full max-w-lg border border-gray-200 dark:border-gray-700">
                        <input type="text" placeholder="Search for groceries and daily needs..." className="w-full bg-transparent outline-none px-4 py-2 font-medium text-gray-800 dark:text-gray-200" />
                        <button className="bg-[#ff5200] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e04a00] transition-colors whitespace-nowrap">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 py-12">
                <h2 className="text-[28px] font-extrabold text-[#02060c] dark:text-white tracking-tight mb-8">
                    Shop by Category
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {groceryCategories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center cursor-pointer group">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-gray-50 dark:bg-gray-800 mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow px-3 py-4 flex flex-col border border-gray-100 dark:border-gray-700">
                                <img src={cat.img} alt={cat.name} className="w-full flex-grow object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg mb-3" />
                                <span className="text-gray-800 dark:text-gray-200 font-bold text-[15px] text-center">{cat.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner Add */}
             <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 pb-20">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
                    <div className="mb-6 md:mb-0 max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Get 20% OFF on your first grocery order!</h2>
                        <p className="text-lg text-white/90 mb-6 font-medium">Use code <span className="bg-white text-orange-600 px-3 py-1 rounded-lg font-bold ml-1 border-2 border-dashed border-orange-500">INSTA20</span> at checkout.</p>
                        <button className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-xl shadow-md hover:bg-gray-50 transition-colors">Start Shopping</button>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" alt="offer" className="w-[200px] md:w-[250px] object-cover rounded-2xl rotate-3 shadow-2xl" />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Grocery;