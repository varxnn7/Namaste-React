import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
      <div className="flex flex-wrap w-full min-w-full">
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