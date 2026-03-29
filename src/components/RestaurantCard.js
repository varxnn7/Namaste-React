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
    <div className="w-[273px] flex flex-col gap-2 rounded-2xl bg-transparent transition-all duration-300 transform cursor-pointer group hover:scale-[0.98]">
      {/* Image with discount badge */}
      <div className="relative w-full h-[182px] overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md">
        <img
          className="w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/260x160?text=" + encodeURIComponent(name);
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
        
        {/* Discount badge */}
        {discount && (
          <div className="absolute bottom-2 left-3 w-full">
            <h3 className="text-[22px] font-extrabold text-[#ffffff] tracking-tighter shadow-sm leading-tight uppercase font-sans">
              {discount.header} {discount.subHeader ? discount.subHeader : ""}
            </h3>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="px-3 flex flex-col gap-1 mt-1">
        <h3 className="font-bold text-[18px] tracking-tight text-gray-900 dark:text-gray-100 truncate w-full">
          {name}
        </h3>
        
        <div className="flex items-center gap-1.5 text-[16px] font-bold text-gray-800 dark:text-gray-200">
          <svg width="20" height="20" viewBox="0 0 20 20" role="img" aria-hidden="true" stroke="rgba(2, 6, 12, 0.92)" fill="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C7.15344 14.4928 6.94723 14.3431 6.99593 14.1593L7.69755 11.4552C7.7121 11.3991 7.69315 11.3392 7.64998 11.2995L5.48514 9.30902C5.34907 9.18393 5.4246 8.94827 5.60226 8.93291L8.53039 8.67919C8.58784 8.67421 8.63853 8.63737 8.65874 8.58309L9.77114 5.58913C9.84089 5.40149 10.1591 5.40149 10.2289 5.58913L11.3413 8.58309C11.3615 8.63737 11.4122 8.67421 11.4696 8.67919L14.3977 8.93291C14.5754 8.94827 14.6509 9.18393 14.5149 9.30902L12.35 11.2995C12.3069 11.3392 12.2879 11.3991 12.3025 11.4552L13.0041 14.1593C13.0528 14.3431 12.8466 14.4928 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
          <span>{avgRating} • {sla.slaString}</span>
        </div>

        <p className="text-[15px] text-gray-500 font-medium truncate pt-0.5">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

// Higher Order Component - adds a "Promoted" label to restaurants with rating > 4.5
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted ribbon label */}
        <div className="absolute top-3 left-3 z-10">
          <span className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg uppercase tracking-wider">
            <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Promoted
          </span>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;