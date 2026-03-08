import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

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
  // optional chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
// conditional rendering
// if(ListOfRestaurants.length === 0){
//   return <Shimmer />;
// }
 
  return ListOfRestaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
      <div className= "filter">
        <div className="search">
          <input 
          type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={() =>{
            // filter the restaurant cards and update the UI
            // searchText
            console.log(searchText);
            const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurant);
            

          }}>Search</button>
        </div>
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
        {filteredRestaurants.map((restaurant) => (
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