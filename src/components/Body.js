import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Create a promoted version of RestaurantCard using HOC
const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
 
  return ListOfRestaurants.length === 0 ? <Shimmer /> :(
    <div className="body bg-gray-50 min-h-screen">
      <div className="filter flex flex-wrap items-center gap-2 px-6 py-4 bg-white shadow-sm border-b border-gray-100">
        <div className="search flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search restaurants..."
            className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent w-56" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow"
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            🔍 Search
          </button>
        </div>
        <button 
          className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow"
          onClick={() => { 
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          ⭐ Top Rated
        </button>
        <button 
          className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-200 transition-all shadow"
          onClick={() => setFilteredRestaurants(ListOfRestaurants)}
        >
          🔄 Show All
        </button>
        <span className="ml-auto text-sm text-gray-500">
          {filteredRestaurants.length} restaurants
        </span>
      </div>
      <div className="flex flex-wrap w-full min-w-full px-3 py-4">
        {filteredRestaurants.map((restaurant) => (
          <Link 
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
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
  );
};

export default Body;