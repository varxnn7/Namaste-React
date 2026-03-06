import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state varaiable - super powerful variable
  const restaurants =
    resList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  const [ListOfRestaurants, setListOfRestaurants] = useState(restaurants);
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