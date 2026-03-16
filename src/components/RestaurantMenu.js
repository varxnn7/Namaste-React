import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams, Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const VegBadge = ({ isVeg }) => (
  <span
    className={`inline-flex items-center justify-center w-5 h-5 border-2 rounded-sm ${
      isVeg
        ? "border-green-600 text-green-600"
        : "border-red-600 text-red-600"
    }`}
  >
    <span
      className={`w-2.5 h-2.5 rounded-full ${
        isVeg ? "bg-green-600" : "bg-red-600"
      }`}
    />
  </span>
);

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 fill-green-600" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const MenuItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
  <div className="flex justify-between items-start py-5 border-b border-gray-100 last:border-0 group">
    <div className="flex-1 pr-6">
      <div className="flex items-center gap-2 mb-1">
        <VegBadge isVeg={item.isVeg} />
        <h4 className="font-semibold text-gray-800 text-[15px] group-hover:text-orange-500 transition-colors">
          {item.name}
        </h4>
      </div>
      <p className="text-orange-500 font-bold text-sm mb-1.5">
        ₹{item.price}
      </p>
      {item.rating && (
        <div className="flex items-center gap-1 mb-2">
          <StarIcon />
          <span className="text-xs font-semibold text-green-700">
            {item.rating}
          </span>
        </div>
      )}
      {item.description && (
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
      )}
    </div>
    <button 
      className="flex-shrink-0 mt-1 px-5 py-2 bg-white border border-orange-400 text-orange-500 text-sm font-bold rounded-lg shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-200 active:scale-95"
      onClick={handleAddItem}
    >
      ADD
    </button>
  </div>
  );
};

const CategorySection = ({ category }) => (
  <div className="mb-2">
    <details open className="group">
      <summary className="flex items-center justify-between cursor-pointer px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-t-xl select-none">
        <h3 className="font-bold text-gray-800 text-[17px]">
          {category.title}{" "}
          <span className="text-gray-400 font-normal text-sm">
            ({category.items.length})
          </span>
        </h3>
        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 text-xl">
          ▾
        </span>
      </summary>
      <div className="px-4 bg-white rounded-b-xl shadow-sm border border-gray-100">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </details>
  </div>
);

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    categories,
  } = resInfo;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-3 transition-colors"
          >
            ← Back to Restaurants
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight drop-shadow">
            {name}
          </h1>
          <p className="text-white/80 text-sm mt-1">{cuisines?.join(", ")}</p>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap items-center gap-5 text-sm">
          <div className="flex items-center gap-1.5 text-green-700 font-bold">
            <svg className="w-4 h-4 fill-green-600" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            {avgRating} Rating
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {deliveryTime}
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {costForTwo}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-3">
        <h2 className="text-2xl font-black text-gray-800 mb-4">Menu</h2>

        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">
            No menu items available.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;