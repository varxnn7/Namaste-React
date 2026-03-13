import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu(resId);
  const { resId } = useParams();
  console.log("Restaurant ID:", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

 const fetchMenu = async () => {
  try {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);

    setResInfo(json?.data);
  } catch (error) {
    console.error("Menu Fetch Error:", error);
  }
};

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Restaurant basic info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Menu items
  const itemCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find((card) => card?.card?.card?.itemCards)
      ?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>

      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;