import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resData.info;

  const discount = aggregatedDiscountInfoV3;

  return (
    <div className="m-3 w-[260px] rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Image with discount badge */}
      <div className="relative">
        <img
          className="w-full h-[160px] object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/260x160?text=" + encodeURIComponent(name);
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Discount badge */}
        {discount && (
          <div className="absolute bottom-2 left-2 text-white">
            <p className="text-xs font-black tracking-wide drop-shadow">
              {discount.header}{" "}
              {discount.subHeader && (
                <span className="font-medium">{discount.subHeader}</span>
              )}
            </p>
          </div>
        )}
        {/* Rating badge */}
        <div
          className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold text-white shadow ${
            avgRating >= 4.5
              ? "bg-green-600"
              : avgRating >= 4.0
              ? "bg-green-500"
              : "bg-orange-400"
          }`}
        >
          <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          {avgRating}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-[15px] truncate">{name}</h3>
        <p className="text-gray-400 text-xs mt-1 truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {sla.slaString}
          </span>
          <span className="font-medium text-gray-600">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;