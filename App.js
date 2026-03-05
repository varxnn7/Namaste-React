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
                <img className="logo" src ="https://thumbs.dreamstime.com/b/food-burger-logo-vector-emblem-design-template-128946515.jpg" alt="logo"/>
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
    )
};

const RestaurantCard = () => {
    return (

        <div className = "res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/21/6031633c-08bb-4a8b-9af9-70522c355308_353197.jpg"/>
        <h3> Meghna foods</h3>
            <h4> Biryani, North indian , Asian </h4>
            <h4> 4.4 stars </h4>
            <h4> 38 minutes </h4> 
        </div>
    );
};


const Body = () => {
    return (
        <div className= "body">
            <div className="search"> Search </div>
            <div className= "res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                
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
    )
 } 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);