import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const restaurants =
    resList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  const [searchText, setSearchText] = useState("");

  // whenever the state variable is updated, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);


const fetchData = async () => {
  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.190473&lng=79.926989&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  console.log(json);

  const restaurants =
    json?.data?.cards
      ?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setListOfRestaurants(restaurants);
  setFilteredRestaurants(restaurants);
};
// conditional rendering
// if(ListOfRestaurants.length === 0){
//   return <Shimmer />;
// }
const onlineStatus = useOnlineStatus();
if(onlineStatus===false) return <h1> Looks like you are offline </h1>
 
  return ListOfRestaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
      <div className= "filter flex">
        <div className="search m-4 p-4">
          <input 
          type="text" className="border border-solid border-black " value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() =>{
            // filter the restaurant cards and update the UI
            // searchText
            console.log(searchText);
            const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurant);
            

          }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex item-center">
           <button 
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => { 
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants

        </button>

        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link 
          key= {restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}
        >           
        <RestaurantCard
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;