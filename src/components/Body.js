import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import LandingPage from "./LandingPage";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create a promoted version of RestaurantCard using HOC
const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // whenever the state variable is updated, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered", ListOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const restaurants =
      resList?.data?.cards
        ?.filter(
          (card) =>
            card?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((card) => card.card.card);

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return <h1> Looks like you are offline </h1>
 
  const foodCategories = [
    { name: "North Indian", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=200&q=80" },
    { name: "South Indian", img: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=200&q=80" },
    { name: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80" },
    { name: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80" },
    { name: "Desserts", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=200&q=80" },
    { name: "Chinese", img: "https://images.unsplash.com/photo-1536521642388-441263f88a61?auto=format&fit=crop&w=200&q=80" },
    { name: "Biryani", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80" },
  ];

  const groceryCategories = [
    { name: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=200&q=80" },
    { name: "Rice & Atta", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80" },
    { name: "Snacks", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=200&q=80" },
    { name: "Beverages", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80" },
    { name: "Dairy", img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=200&q=80" },
    { name: "Cleaning", img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=200&q=80" },
  ];
  if (!authChecked) return null; // Wait for Firebase check

  if (!user) {
    return <LandingPage />;
  }

  return ListOfRestaurants.length === 0 ? <Shimmer /> :(
    <div className="body bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 pt-8 pb-20">
        
        {/* Food Categories Carousel */}
        <div className="mb-14 border-b border-gray-100 dark:border-gray-800 pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[28px] font-extrabold text-[#02060c] dark:text-white tracking-tight">Order our best food options</h2>
            <div className="flex gap-2 hidden md:flex">
              <button className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors cursor-pointer border-none outline-none">&larr;</button>
              <button className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 cursor-pointer transition-colors cursor-pointer border-none outline-none">&rarr;</button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
            {foodCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[120px] cursor-pointer group">
                <div className="w-[120px] h-[120px] rounded-full bg-orange-50 dark:bg-gray-800 mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg whitespace-nowrap">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instamart Categories Carousel */}
        <div className="mb-14 border-b border-gray-100 dark:border-gray-800 pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[28px] font-extrabold text-[#02060c] dark:text-white tracking-tight">Shop groceries on Instamart</h2>
            <div className="flex gap-2 hidden md:flex">
              <button className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors border-none outline-none">&larr;</button>
              <button className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 cursor-pointer transition-colors border-none outline-none">&rarr;</button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {groceryCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[140px] cursor-pointer group">
                <div className="w-[140px] h-[160px] rounded-2xl bg-gray-50 dark:bg-gray-800 mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow shrink-0 px-2 py-4 flex flex-col items-center border border-gray-100 dark:border-gray-700">
                  <img src={cat.img} alt={cat.name} className="w-full h-[90px] object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg mb-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-[15px] text-center">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Header & Search/Filters matching Swiggy style */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700 gap-4">
          <h2 className="text-[28px] font-bold text-gray-900 dark:text-white tracking-tight">
            Restaurants with online food delivery
          </h2>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="relative flex items-center min-w-[240px]">
              <input 
                type="text" 
                placeholder="Search restaurants..."
                className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-2xl pl-11 pr-4 py-2.5 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-all text-gray-800 dark:text-gray-100 placeholder-gray-500" 
                value={searchText} 
                onChange={(e) => {
                  setSearchText(e.target.value);
                  const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
                  setFilteredRestaurants(filteredRestaurant);
                }}
              />
              <svg className="w-5 h-5 absolute left-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button 
              className="whitespace-nowrap px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-[18px] text-[14px] font-medium text-gray-700 dark:text-gray-200 hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
              onClick={() => { 
                const filteredList = ListOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Ratings 4.5+
            </button>
            <button 
              className="whitespace-nowrap px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-[18px] text-[14px] font-medium text-gray-700 dark:text-gray-200 hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
              onClick={() => setFilteredRestaurants(ListOfRestaurants)}
            >
              All Restaurants
            </button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:shadow-md transition-shadow bg-white dark:bg-gray-800 flex items-center justify-center min-w-[38px] min-h-[38px]"
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {filteredRestaurants.map((restaurant) => (
            <Link 
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="block hover:scale-[0.98] transition-transform duration-300"
            >           
              {restaurant.info.avgRating > 4.5 ? (
                <PromotedRestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;