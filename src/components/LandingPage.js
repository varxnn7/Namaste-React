import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-[#ff5200] min-h-[calc(100vh-64px)] w-full font-sans flex flex-col pt-4 pb-20 px-4 md:px-0 relative overflow-hidden">
      
      {/* Decorative side images (matching Swiggy's landing page) */}
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/v1678428358/portal/m/seo_web/dweb_header.png" alt="left-decoration" className="absolute left-0 top-0 h-full max-h-[600px] object-cover opacity-90 hidden lg:block z-0 transform -translate-x-1/4" />
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/v1678428358/portal/m/seo_web/dweb_header.png" alt="right-decoration" className="absolute right-0 top-0 h-full max-h-[600px] object-cover opacity-90 hidden lg:block z-0 transform translate-x-1/2 scale-x-[-1]" />
      
      {/* Top section */}
      <div className="max-w-[1200px] mx-auto w-full flex-grow relative z-10 pt-10">
        
        {/* Search Bar section */}
        <div className="flex flex-col lg:flex-row gap-4 max-w-[900px] mx-auto mt-8 md:mt-16 bg-transparent">
          <div 
            className="flex-[0.8] bg-white rounded-xl flex items-center px-5 py-4 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
            onClick={() => alert("Location selection will be available after login.")}
          >
            <svg className="w-5 h-5 text-[#ff5200] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <input type="text" placeholder="Street 14, Damoh Naka, ..." className="w-full focus:outline-none text-gray-800 font-semibold text-lg cursor-pointer bg-transparent" readOnly />
            <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <div 
            className="flex-[1.2] bg-white rounded-xl flex items-center px-5 py-4 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group"
          >
            <input type="text" placeholder="Search for restaurant, item or more" className="w-full focus:outline-none text-gray-600 font-medium text-lg cursor-pointer bg-transparent" readOnly onClick={() => alert("Please login to search for restaurants and food.")} />
            <button 
                className="bg-[#ff5200] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#e04a00] transition-colors ml-2 shadow-md whitespace-nowrap"
                onClick={() => alert("Please login to search for restaurants and food.")}
            >
                Search
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center mt-16 md:mt-24 px-4 lg:px-0">
          
          {/* Food Delivery */}
          <div className="bg-white rounded-[36px] p-8 md:p-10 flex-[1] max-w-[500px] hover:scale-[1.03] cursor-pointer transition-transform duration-300 shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 w-[65%]">
              <h2 className="text-[34px] lg:text-[40px] font-black tracking-tight text-[#3d4152] leading-[1.1]">FOOD DELIVERY</h2>
              <p className="text-[18px] lg:text-[20px] text-gray-500 font-semibold mt-1">FROM RESTAURANTS</p>
              <p className="text-[14px] text-[#ff5200] font-bold mt-4 bg-orange-50 inline-block px-3 py-1 rounded-full border border-orange-100 uppercase tracking-wide">UPTO 60% OFF</p>
              <button className="mt-14 bg-[#ff5200] text-white font-bold px-7 py-3.5 rounded-[24px] flex items-center gap-2 group-hover:bg-[#e04a00] transition-colors shadow-lg hover:shadow-xl text-lg">
                Explore 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" 
              alt="Food" 
              className="absolute right-[-20px] bottom-[-10px] w-[55%] md:w-[60%] object-cover group-hover:scale-110 transition-transform duration-500 rounded-br-[36px]"
            />
          </div>

          {/* Instamart */}
          <div className="bg-white rounded-[36px] p-8 md:p-10 flex-[1] max-w-[500px] hover:scale-[1.03] cursor-pointer transition-transform duration-300 shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 w-[65%]">
              <h2 className="text-[34px] lg:text-[40px] font-black tracking-tight text-[#3d4152] leading-[1.1]">INSTAMART</h2>
              <p className="text-[18px] lg:text-[20px] text-gray-500 font-semibold mt-1">INSTANT GROCERY</p>
              <p className="text-[14px] text-[#ff5200] font-bold mt-4 bg-orange-50 inline-block px-3 py-1 rounded-full border border-orange-100 uppercase tracking-wide">UPTO 60% OFF</p>
              <button className="mt-14 bg-[#ff5200] text-white font-bold px-7 py-3.5 rounded-[24px] flex items-center gap-2 group-hover:bg-[#e04a00] transition-colors shadow-lg hover:shadow-xl text-lg">
                Explore 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <img 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CORP/2024/9/4/0aa631e8-d1d4-42b4-8255-a50e5883ceee_Groceries.jpeg" 
              alt="Groceries" 
              className="absolute right-[-25px] bottom-[-20px] w-[55%] md:w-[60%] object-cover group-hover:scale-110 transition-transform duration-500 rounded-br-[36px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
