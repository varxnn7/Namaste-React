import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state varaiable - super powerful variable
  const restaurants =
    resList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

 // this is been called after the component is rendered on the screen
  useEffect(() => {
    // console.log("called");
    fetchData();
  }, []);
  // this will be called first 
  // console.log("Body rendered");

const fetchData = async () => {
  const data = await fetch(
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.190473&lng=79.926989&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
  const json = await data.json();
  console.log(json);
  // optional chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

if(ListOfRestaurants.length === 0){
  return <Shimmer />;
}
 
  return (
    <div className="body">
      <div className= "filter">
        <button 
          className="filter-btn"
          onClick={() => { 
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants

        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;