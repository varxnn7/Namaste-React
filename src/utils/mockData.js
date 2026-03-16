 const resList = {
"statusCode": 0,
"data": {
"statusMessage": "done successfully",
"pageOffset": {
"nextOffset": "CMdlEO8kKIC4hN3NnZb2ETDCDjgC",
"widgetOffset": {
"restaurantCountWidget": "",
"inlineFacetFilter": "",
"collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
"collectionV5MastheadWidget": ""
}
},
"cards": [
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
"collectionId": "83645",
"title": "North Indian",
"description": "Indulge with the best of North Indian cuisines.",
"imageId": "COLLECTIONS/IMAGES/MERCH/2025/1/24/cd5a2666-bc5d-4545-baa0-1dcbe1ee4888_Northindian.png",
"aspectRatio": "3.44",
"cta": {
"link": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian,north%20indian,layout_NorthIndian,ads_pc_north_indian",
"type": "collectionv2"
},
"type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
"count": "183 restaurants",
"navBarConfig": {}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
"sortConfigs": [
{
"key": "relevance",
"title": "Relevance (Default)",
"selected": true,
"defaultSelection": true
},
{
"key": "deliveryTimeAsc",
"title": "Delivery Time"
},
{
"key": "modelBasedRatingDesc",
"title": "Rating"
},
{
"key": "costForTwoAsc",
"title": "Cost: Low to High"
},
{
"key": "costForTwoDesc",
"title": "Cost: High to Low"
}
],
"restaurantCount": 183,
"facetList": [
{
"label": "10 Mins Delivery",
"id": "isRestaurantBolt",
"selection": "SELECT_TYPE_SINGLESELECT",
"facetInfo": [
{
"label": "10 Mins Delivery",
"id": "isRestaurantBoltfacetquery0",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_FLATTENED",
"subLabel": "Filter by",
"icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
"selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
},
{
"label": "Veg/Non-Veg",
"id": "isVeg",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Non Veg",
"id": "isVegfacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Pure Veg",
"id": "isVegfacetquery1",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filter by",
"openFilter": true
},
{
"label": "Ratings",
"id": "rating",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Ratings",
"id": "ratingfacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Ratings 4.0+",
"id": "ratingfacetquery1",
"analytics": {},
"openFilter": true
},
{
"label": "Ratings 4.5+",
"id": "ratingfacetquery2",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filter by",
"openFilter": true
},
{
"label": "Delivery Time",
"id": "deliveryTime",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Less than 30 mins",
"id": "deliveryTimefacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Less than 45 mins",
"id": "deliveryTimefacetquery1",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filter by",
"openFilter": true
},
{
"label": "Cost For Two",
"id": "costForTwo",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Less than Rs. 300",
"id": "costForTwofacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Rs.300 - Rs.600",
"id": "costForTwofacetquery1",
"analytics": {},
"openFilter": true
},
{
"label": "Greater than Rs. 600",
"id": "costForTwofacetquery2",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filter by",
"openFilter": true
}
],
"widgetId": "inlineFacetFilter"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
"layout": {
"rows": 1,
"widgetPadding": {
"left": 16,
"top": 12,
"right": 16
},
"widgetTheme": {
"defaultMode": {
"backgroundColour": "#FFFFFF",
"theme": "THEME_TYPE_LIGHT"
},
"darkMode": {
"backgroundColour": "#1B3028",
"theme": "THEME_TYPE_DARK"
}
}
},
"id": "restaurantCountWidget",
"gridElements": {
"infoWithStyle": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
"text": "183 Restaurants to explore",
"headerStyling": {
"textSize": 15,
"textColor": "text_color_highest_emphasis",
"textFontName": "FONT_NAME_HEADER_H5",
"maxLines": 1
}
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "622716",
"name": "Haldiram's Restaurant",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/18a96461-eb80-4571-965f-68204437013f_622716.JPG",
"locality": "Bloom Chowk",
"areaName": "Civic_Center_Jab",
"costForTwo": "₹400 for two",
"cuisines": [
"North Indian",
"Chaat",
"Chinese",
"South Indian",
"Fast Food",
"Snacks",
"sandwich",
"Burger",
"pizza",
"Pasta"
],
"avgRating": 4.4,
"veg": true,
"parentId": "351771",
"avgRatingString": "4.4",
"totalRatingsString": "5.1K+",
"promoted": true,
"adTrackingId": "cid=2cbd1701-b57f-49c4-b0f6-1e9fe033e4d3~p=0~adgrpid=2cbd1701-b57f-49c4-b0f6-1e9fe033e4d3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=622716~plpr=COLLECTION~eid=01aecd2e-5d15-482a-8d17-c4d3e1105726~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 4.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-12 23:50:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Mithai.png",
"description": "Delivery!"
},
{
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
"description": "OnlyOnSwiggy"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Mithai.png"
}
},
{
"attributes": {
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
"description": "OnlyOnSwiggy"
}
},
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹50 OFF",
"subHeader": "ABOVE ₹199",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "2cbd1701-b57f-49c4-b0f6-1e9fe033e4d3"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=622716&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "633759",
"name": "Haldiram's Sweets and Namkeen",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/3e57dec6-32f7-43b9-9276-54bcafe35fe9_633759.JPG",
"locality": "Shastri Bridge",
"areaName": "Napier Town",
"costForTwo": "₹400 for two",
"cuisines": [
"Sweets",
"Desserts",
"indian snacks",
"Snacks"
],
"avgRating": 4.7,
"veg": true,
"parentId": "391465",
"avgRatingString": "4.7",
"totalRatingsString": "747",
"promoted": true,
"adTrackingId": "cid=514d3211-21d1-402b-9527-722ac93aeb82~p=1~adgrpid=514d3211-21d1-402b-9527-722ac93aeb82#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=633759~plpr=COLLECTION~eid=2283de98-6deb-4b2f-b281-6861af19d3e1~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 4.3,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "4.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-13 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
"description": "OnlyOnSwiggy"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
"description": "OnlyOnSwiggy"
}
},
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹42",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "514d3211-21d1-402b-9527-722ac93aeb82"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=633759&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "512529",
"name": "UBQ-Meals,Thalis & Bowls",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/e25d89f0-a372-462f-b2fe-dd864b0b60b4_512529.JPG",
"locality": "Jagat Mall",
"areaName": "Napier Town",
"costForTwo": "₹300 for two",
"cuisines": [
"North Indian",
"Kebabs",
"Barbecue",
"Biryani",
"Street Food",
"Snacks"
],
"avgRating": 4.1,
"parentId": "617376",
"avgRatingString": "4.1",
"totalRatingsString": "1.0K+",
"promoted": true,
"adTrackingId": "cid=a00e7e74-d08e-4793-8d39-7b17d7ab14d5~p=2~adgrpid=a00e7e74-d08e-4793-8d39-7b17d7ab14d5#ag80~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=512529~plpr=COLLECTION~eid=95b2e3d6-0a94-4338-9b49-6fbb8c66be1f~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 5.7,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "5.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-12 23:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120",
"headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
"secondaryDiscountCallout": "₹30 Cashback",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "a00e7e74-d08e-4793-8d39-7b17d7ab14d5"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=512529&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1053968",
"name": "Honest Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/3d295841-f807-487f-b62a-8bd99d127fc8_1053968.JPG",
"locality": "Russel Chowk",
"areaName": "Ganjipura",
"costForTwo": "₹200 for two",
"cuisines": [
"North Indian",
"High Protein",
"Biryani"
],
"avgRating": 4.5,
"parentId": "612552",
"avgRatingString": "4.5",
"totalRatingsString": "221",
"promoted": true,
"adTrackingId": "cid=7f865576-48a6-4ff3-9bce-08e4336f411d~p=3~adgrpid=7f865576-48a6-4ff3-9bce-08e4336f411d#ag72~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1053968~plpr=COLLECTION~eid=546b74b8-c4f7-4e9b-a6c7-889d3a328778~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-12 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "High%20Protein/rx%20tag%205.png",
"description": "High Protein"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "High Protein",
"imageId": "High%20Protein/rx%20tag%205.png"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "7f865576-48a6-4ff3-9bce-08e4336f411d"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1053968&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "639516",
"name": "Dum Safar Biryani",
"cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
"locality": "Jabalpur",
"areaName": "JAGAT MALL JABALPUR",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"Kebabs",
"North Indian",
"barbeque"
],
"avgRating": 4.3,
"parentId": "351013",
"avgRatingString": "4.3",
"totalRatingsString": "1.3K+",
"promoted": true,
"adTrackingId": "cid=ed6c00c4-ccf1-4104-b9ce-182233fe3b1e~p=5~adgrpid=ed6c00c4-ccf1-4104-b9ce-182233fe3b1e#ag81~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=639516~plpr=COLLECTION~eid=31e1957d-646d-446b-96f5-90e343481cc8~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 5.7,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "5.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-12 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "newg.png",
"description": "Gourmet"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "ed6c00c4-ccf1-4104-b9ce-182233fe3b1e"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=639516&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "427124",
"name": "Behrouz Biryani",
"cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
"locality": "Russel Chowk",
"areaName": "Ganjipura",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"North Indian",
"Kebabs",
"Mughlai",
"Beverages",
"Desserts"
],
"avgRating": 4.5,
"parentId": "1803",
"avgRatingString": "4.5",
"totalRatingsString": "2.5K+",
"promoted": true,
"adTrackingId": "cid=6f9e4633-c59b-4c0d-8561-3fcb2ea30af9~p=7~adgrpid=6f9e4633-c59b-4c0d-8561-3fcb2ea30af9#ag71~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=427124~plpr=COLLECTION~eid=2ff05ac0-abbf-4bfd-904c-d1a679111224~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-12 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
},
{
"attributes": {
"imageId": "newg.png",
"description": "Gourmet"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "6f9e4633-c59b-4c0d-8561-3fcb2ea30af9"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=427124&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1112810",
"name": "10 Downing Street",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/141bc89c-2316-47cb-949a-c31552c95e38_1112810.jpg",
"locality": "Marhatal",
"areaName": "Marhatal",
"costForTwo": "₹600 for two",
"cuisines": [
"North Indian",
"Chinese",
"Continental"
],
"avgRating": 4.3,
"parentId": "1239",
"avgRatingString": "4.3",
"totalRatingsString": "35",
"promoted": true,
"adTrackingId": "cid=25578197-8a2b-4c2d-b91c-f15a7aafdd38~p=8~adgrpid=25578197-8a2b-4c2d-b91c-f15a7aafdd38#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1112810~plpr=COLLECTION~eid=499c41b0-b1e4-464b-9235-e85e5abe1d50~srvts=1773302238478~collid=83645",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 3.8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "3.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-03-12 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "newg.png",
"description": "Gourmet"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "67% OFF",
"subHeader": "UPTO ₹130",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "25578197-8a2b-4c2d-b91c-f15a7aafdd38"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1112810&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES101",
"name": "Pizza Paradise",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/18a96461-eb80-4571-965f-68204437013f_622716.JPG",
"locality": "Civil Lines",
"areaName": "Civil Lines",
"costForTwo": "₹450 for two",
"cuisines": ["Pizza", "Italian", "Pasta", "Burgers", "Fast Food"],
"avgRating": 4.6,
"parentId": "999001",
"avgRatingString": "4.6",
"totalRatingsString": "3.2K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 23:59:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "50% OFF", "subHeader": "UPTO ₹100", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES101", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES102",
"name": "The Burger Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/3e57dec6-32f7-43b9-9276-54bcafe35fe9_633759.JPG",
"locality": "Napier Town",
"areaName": "Napier Town",
"costForTwo": "₹350 for two",
"cuisines": ["Burgers", "American", "Wraps", "Fries", "Shakes"],
"avgRating": 4.3,
"parentId": "999002",
"avgRatingString": "4.3",
"totalRatingsString": "1.8K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 23:00:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "40% OFF", "subHeader": "UPTO ₹80", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES102", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES103",
"name": "Chinese Dragon",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/e25d89f0-a372-462f-b2fe-dd864b0b60b4_512529.JPG",
"locality": "Marhatal",
"areaName": "Marhatal",
"costForTwo": "₹400 for two",
"cuisines": ["Chinese", "Asian", "Thai", "Sushi", "Noodles"],
"avgRating": 4.4,
"parentId": "999003",
"avgRatingString": "4.4",
"totalRatingsString": "2.1K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 4.0,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 23:30:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "30% OFF", "subHeader": "UPTO ₹90", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES103", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES104",
"name": "South Indian Tadka",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/3d295841-f807-487f-b62a-8bd99d127fc8_1053968.JPG",
"locality": "Ganjipura",
"areaName": "Ganjipura",
"costForTwo": "₹300 for two",
"cuisines": ["South Indian", "Dosa", "Idli", "Kerala", "Tamil"],
"avgRating": 4.5,
"parentId": "999004",
"avgRatingString": "4.5",
"totalRatingsString": "4.0K+",
"veg": true,
"sla": {
"deliveryTime": 28,
"lastMileTravel": 3.2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 22:00:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "ITEMS", "subHeader": "AT ₹59", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES104", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES105",
"name": "Rolls & Wraps Express",
"cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
"locality": "Russel Chowk",
"areaName": "Russel Chowk",
"costForTwo": "₹250 for two",
"cuisines": ["Rolls", "Wraps", "Kathi Rolls", "Frankie", "Street Food"],
"avgRating": 4.2,
"parentId": "999005",
"avgRatingString": "4.2",
"totalRatingsString": "900+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 23:00:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "60% OFF", "subHeader": "UPTO ₹120", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES105", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES106",
"name": "Cake & Bake Studio",
"cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
"locality": "Model Road",
"areaName": "Model Road",
"costForTwo": "₹500 for two",
"cuisines": ["Bakery", "Desserts", "Cakes", "Pastries", "Beverages"],
"avgRating": 4.7,
"parentId": "999006",
"avgRatingString": "4.7",
"totalRatingsString": "2.8K+",
"veg": true,
"sla": {
"deliveryTime": 38,
"lastMileTravel": 5.1,
"serviceability": "SERVICEABLE",
"slaString": "35-45 mins",
"lastMileTravelString": "5.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 22:00:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "₹75 OFF", "subHeader": "ABOVE ₹299", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES106", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "RES107",
"name": "Mughal Darbar",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/141bc89c-2316-47cb-949a-c31552c95e38_1112810.jpg",
"locality": "Adhartal",
"areaName": "Adhartal",
"costForTwo": "₹600 for two",
"cuisines": ["Mughlai", "North Indian", "Kebabs", "Biriyani", "Desserts"],
"avgRating": 4.6,
"parentId": "999007",
"avgRatingString": "4.6",
"totalRatingsString": "5.5K+",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 6.2,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "6.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": { "nextCloseTime": "2026-03-13 23:59:00", "opened": true },
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
"aggregatedDiscountInfoV3": { "header": "ITEMS", "subHeader": "AT ₹99", "logoCtx": { "text": "BENEFITS" } },
"loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
"orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
"differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": { "aggregatedRating": { "rating": "--" } },
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": { "link": "swiggy://menu?restaurant_id=RES107", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
}
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "RES108",
        "name": "Spice Route Kitchen",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/3e57dec6-32f7-43b9-9276-54bcafe35fe9_633759.JPG",
        "locality": "Wright Town",
        "areaName": "Wright Town",
        "costForTwo": "₹350 for two",
        "cuisines": ["North Indian", "Punjabi", "Tandoor", "Dal Makhani"],
        "avgRating": 4.4,
        "parentId": "999008",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.5K+",
        "sla": { "deliveryTime": 30, "lastMileTravel": 3.8, "serviceability": "SERVICEABLE", "slaString": "25-35 mins", "lastMileTravelString": "3.8 km", "iconType": "ICON_TYPE_EMPTY" },
        "availability": { "nextCloseTime": "2026-03-13 23:00:00", "opened": true },
        "badges": {}, "isOpen": true, "type": "F",
        "badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
        "aggregatedDiscountInfoV3": { "header": "20% OFF", "subHeader": "UPTO ₹60", "logoCtx": { "text": "BENEFITS" } },
        "loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
        "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
        "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
        "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {},
        "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": { "link": "swiggy://menu?restaurant_id=RES108", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "RES109",
        "name": "The Ice Cream Lab",
        "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
        "locality": "Sadar",
        "areaName": "Sadar",
        "costForTwo": "₹200 for two",
        "cuisines": ["Ice Cream", "Desserts", "Milkshakes", "Waffles", "Sundaes"],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "999009",
        "avgRatingString": "4.8",
        "totalRatingsString": "6.2K+",
        "sla": { "deliveryTime": 22, "lastMileTravel": 2.9, "serviceability": "SERVICEABLE", "slaString": "20-25 mins", "lastMileTravelString": "2.9 km", "iconType": "ICON_TYPE_EMPTY" },
        "availability": { "nextCloseTime": "2026-03-13 23:30:00", "opened": true },
        "badges": {}, "isOpen": true, "type": "F",
        "badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
        "aggregatedDiscountInfoV3": { "header": "₹50 OFF", "subHeader": "ABOVE ₹149", "logoCtx": { "text": "BENEFITS" } },
        "loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
        "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
        "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
        "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {},
        "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": { "link": "swiggy://menu?restaurant_id=RES109", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "RES110",
        "name": "Taco Fiesta",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/e25d89f0-a372-462f-b2fe-dd864b0b60b4_512529.JPG",
        "locality": "Tilhari",
        "areaName": "Tilhari",
        "costForTwo": "₹300 for two",
        "cuisines": ["Mexican", "Tex-Mex", "Nachos", "Burritos", "Quesadillas"],
        "avgRating": 4.2,
        "parentId": "999010",
        "avgRatingString": "4.2",
        "totalRatingsString": "780+",
        "sla": { "deliveryTime": 38, "lastMileTravel": 5.0, "serviceability": "SERVICEABLE", "slaString": "35-40 mins", "lastMileTravelString": "5.0 km", "iconType": "ICON_TYPE_EMPTY" },
        "availability": { "nextCloseTime": "2026-03-13 23:00:00", "opened": true },
        "badges": {}, "isOpen": true, "type": "F",
        "badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
        "aggregatedDiscountInfoV3": { "header": "30% OFF", "subHeader": "UPTO ₹75", "logoCtx": { "text": "BENEFITS" } },
        "loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
        "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
        "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
        "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {},
        "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": { "link": "swiggy://menu?restaurant_id=RES110", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "RES111",
        "name": "The Health Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/3d295841-f807-487f-b62a-8bd99d127fc8_1053968.JPG",
        "locality": "Civil Lines",
        "areaName": "Civil Lines",
        "costForTwo": "₹400 for two",
        "cuisines": ["Healthy", "Salads", "Smoothie Bowls", "Protein", "Vegan"],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "999011",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.4K+",
        "sla": { "deliveryTime": 28, "lastMileTravel": 3.3, "serviceability": "SERVICEABLE", "slaString": "25-30 mins", "lastMileTravelString": "3.3 km", "iconType": "ICON_TYPE_EMPTY" },
        "availability": { "nextCloseTime": "2026-03-13 21:00:00", "opened": true },
        "badges": {}, "isOpen": true, "type": "F",
        "badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
        "aggregatedDiscountInfoV3": { "header": "ITEMS", "subHeader": "AT ₹79", "logoCtx": { "text": "BENEFITS" } },
        "loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
        "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
        "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
        "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {},
        "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": { "link": "swiggy://menu?restaurant_id=RES111", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "RES112",
        "name": "BBQ Nation Express",
        "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
        "locality": "Gorakhpur",
        "areaName": "Gorakhpur",
        "costForTwo": "₹700 for two",
        "cuisines": ["Barbecue", "Grills", "North Indian", "Kebabs", "Starters"],
        "avgRating": 4.8,
        "parentId": "999012",
        "avgRatingString": "4.8",
        "totalRatingsString": "8.9K+",
        "sla": { "deliveryTime": 50, "lastMileTravel": 7.1, "serviceability": "SERVICEABLE", "slaString": "45-55 mins", "lastMileTravelString": "7.1 km", "iconType": "ICON_TYPE_EMPTY" },
        "availability": { "nextCloseTime": "2026-03-13 23:59:00", "opened": true },
        "badges": {}, "isOpen": true, "type": "F",
        "badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
        "aggregatedDiscountInfoV3": { "header": "ITEMS", "subHeader": "AT ₹149", "logoCtx": { "text": "BENEFITS" } },
        "loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
        "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
        "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
        "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {},
        "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": { "link": "swiggy://menu?restaurant_id=RES112", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "RES113",
        "name": "Paneer Palace",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/18a96461-eb80-4571-965f-68204437013f_622716.JPG",
        "locality": "Napier Town",
        "areaName": "Napier Town",
        "costForTwo": "₹300 for two",
        "cuisines": ["Paneer", "North Indian", "Veg", "Curry", "Roti"],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "999013",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.1K+",
        "sla": { "deliveryTime": 33, "lastMileTravel": 4.4, "serviceability": "SERVICEABLE", "slaString": "30-35 mins", "lastMileTravelString": "4.4 km", "iconType": "ICON_TYPE_EMPTY" },
        "availability": { "nextCloseTime": "2026-03-13 23:00:00", "opened": true },
        "badges": {}, "isOpen": true, "type": "F",
        "badgesV2": { "entityBadges": { "imageBased": {}, "textExtendedBadges": {}, "textBased": {} } },
        "aggregatedDiscountInfoV3": { "header": "25% OFF", "subHeader": "UPTO ₹50", "logoCtx": { "text": "BENEFITS" } },
        "loyaltyDiscoverPresentationInfo": { "logoCtx": { "text": "BENEFITS", "logo": "v1634558776/swiggy_one/OneLogo_3x.png" }, "freedelMessage": "FREE DELIVERY" },
        "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} },
        "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } },
        "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {},
        "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": { "link": "swiggy://menu?restaurant_id=RES113", "text": "RESTAURANT_MENU", "type": "DEEPLINK" },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" }
  }
}
],
"firstOffsetRequest": true,
"nextFetch": 3
},
"tid": "27003384-bde1-44d9-b4dd-f3b8a56b6c5d",
"sid": "q6d3887601a-12d2-4aee-99be-c248c1262",
"deviceId": "111dd303-6fcd-1339-31cd-771203fb6b0d",
"csrfToken": "mViXfWBqe2sV-BXozzcLcvGI-sZ3NEF3Xu9vIJ78"
}
export default resList;