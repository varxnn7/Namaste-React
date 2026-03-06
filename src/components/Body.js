import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const restaurants =
    resList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  return (
    <div className="body">
      <div className="res-container">
        {restaurants.map((restaurant) => (
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