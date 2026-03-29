import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container bg-[#f0f0f5] pt-12 pb-24 mt-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-gray-300">
          
          {/* Column 1: Logo & Copy */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-start hidden md:flex">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#ff5200] rounded-xl flex items-center justify-center text-white text-xl">
                🍔
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#ff5200]">
                Food Steps
              </span>
            </Link>
            <p className="text-gray-500 font-semibold text-[15px]">© 2025 Food Steps Limited</p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-extrabold text-[#02060c] text-[17px] mb-5 tracking-tight">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-gray-500 hover:text-gray-900 font-semibold transition-colors">About Us</Link></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Food Steps Corporate</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Careers</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Team</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Food Steps One</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Food Steps Instamart</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Food Steps Dineout</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Minis</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Pyng</span></li>
            </ul>
          </div>

          {/* Column 3: Contact Us & Legal */}
          <div>
            <div className="mb-10">
              <h3 className="font-extrabold text-[#02060c] text-[17px] mb-5 tracking-tight">Contact us</h3>
              <ul className="flex flex-col gap-4">
                <li><Link to="/contact" className="text-gray-500 hover:text-gray-900 font-semibold transition-colors">Help & Support</Link></li>
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Partner With Us</span></li>
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Ride With Us</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-extrabold text-[#02060c] text-[17px] mb-5 tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-4">
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Terms & Conditions</span></li>
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Cookie Policy</span></li>
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Privacy Policy</span></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Available In */}
          <div>
            <h3 className="font-extrabold text-[#02060c] text-[17px] mb-5 tracking-tight">Available in:</h3>
            <ul className="flex flex-col gap-4">
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Bangalore</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Gurgaon</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Hyderabad</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Delhi</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Mumbai</span></li>
              <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Pune</span></li>
            </ul>
            <div className="mt-5 border border-gray-300 rounded-lg px-4 py-2 w-max cursor-pointer bg-transparent text-gray-500 font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
              685 cities
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Column 5: Life at Swiggy & Social */}
          <div>
            <div className="mb-10">
              <h3 className="font-extrabold text-[#02060c] text-[17px] mb-5 tracking-tight">Life at Food Steps</h3>
              <ul className="flex flex-col gap-4">
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Explore With Food Steps</span></li>
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Food Steps News</span></li>
                <li><span className="text-gray-500 hover:text-gray-900 font-semibold transition-colors cursor-pointer">Snackables</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-extrabold text-[#02060c] text-[17px] mb-5 tracking-tight">Social Links</h3>
              <div className="flex gap-4">
                <span className="cursor-pointer text-gray-800 hover:text-black hover:scale-110 transition-transform">in</span>
                <span className="cursor-pointer text-gray-800 hover:text-black hover:scale-110 transition-transform">ig</span>
                <span className="cursor-pointer text-gray-800 hover:text-black hover:scale-110 transition-transform">fb</span>
                <span className="cursor-pointer text-gray-800 hover:text-black hover:scale-110 transition-transform">p</span>
                <span className="cursor-pointer text-gray-800 hover:text-black hover:scale-110 transition-transform">tx</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <h2 className="text-[#3d4152] font-black text-2xl tracking-tighter">
            For better experience, download the Food Steps app now
          </h2>
          <div className="flex items-center gap-4">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" className="w-[180px] md:w-[200px] cursor-pointer hover:scale-105 transition-transform" alt="Google Play" />
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" className="w-[180px] md:w-[200px] cursor-pointer hover:scale-105 transition-transform" alt="App Store" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
