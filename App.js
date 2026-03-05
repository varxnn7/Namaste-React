import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *         - Image
 *         - Name of res star rating , cuisene, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-burger-logo-vector-emblem-design-template-128946515.jpg"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData;


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} for two</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = {
  "status": true,
  "message": "Restaurant List fetched successfully",
  "data": {
    "data": {
      "cards": [
        {},
        {
          "card": {
            "card": {
              "gridElements": {
                "infoWithStyle": {
                  "restaurants": [
                    {
                      "info": {
                        "id": "123456",
                        "name": "Pizza Paradise",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
                        "locality": "MG Road",
                        "areaName": "Central District",
                        "costForTwo": "₹400 for two",
                        "cuisines": ["Pizza", "Italian", "Fast Food"],
                        "avgRating": 4.3,
                        "sla": { "deliveryTime": 30 }
                      }
                    },
                    {
                      "info": {
                        "id": "234567",
                        "name": "Burger Hub",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
                        "locality": "Park Street",
                        "areaName": "Downtown",
                        "costForTwo": "₹300 for two",
                        "cuisines": ["Burgers", "American", "Fast Food"],
                        "avgRating": 4.5,
                        "sla": { "deliveryTime": 25 }
                      }
                    },
                    {
                      "info": {
                        "id": "345678",
                        "name": "Green Bites",
                        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                        "locality": "Residency Road",
                        "areaName": "South Zone",
                        "costForTwo": "₹250 for two",
                        "cuisines": ["Healthy Food", "Salads", "Vegan"],
                        "avgRating": 4.7,
                        "sla": { "deliveryTime": 20 }
                      }
                    },
                    {
                      "info": {
                        "id": "456789",
                        "name": "Spice Kingdom",
                        "cloudinaryImageId": "rng/md/carousel/production/indian101",
                        "locality": "Brigade Road",
                        "areaName": "City Center",
                        "costForTwo": "₹500 for two",
                        "cuisines": ["Indian", "North Indian", "Biryani"],
                        "avgRating": 4.2,
                        "sla": { "deliveryTime": 35 }
                      }
                    },
                  ]
                }
              }
            }
          }
        }
      ]
    }
  }
};
// not using keys (not acceptable) <<<<<< index key <<<<<<<<<<<<<<<<<<< unique id (best practise)
const Body = () => {

  const restaurants =
    resObj.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  return (
    <div className="body">

      <div className="search">Search</div>

      <div className="res-container">
        {/* {resObj.map((restaurant) => (
            <RestaurantCard key = {restaurant.info.id} resData = {restaurant.info} />
        ))} */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);