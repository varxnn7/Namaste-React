import { useState, useEffect } from "react";
import menuData from "./menuData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const data = menuData[resId] || null;
    setResInfo(data);
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;