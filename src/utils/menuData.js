const menuData = {
  // Haldiram's Restaurant
  "622716": {
    name: "Haldiram's Restaurant",
    cuisines: ["North Indian", "Chaat", "Chinese", "South Indian", "Fast Food"],
    costForTwo: "₹400 for two",
    avgRating: "4.4",
    deliveryTime: "25-30 mins",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/18a96461-eb80-4571-965f-68204437013f_622716.JPG",
    categories: [
      {
        title: "Recommended",
        items: [
          { id: "1", name: "Pav Bhaji", price: 149, description: "Spicy mashed vegetables served with buttered bread rolls", isVeg: true, rating: 4.5 },
          { id: "2", name: "Paneer Tikka", price: 299, description: "Marinated cottage cheese grilled in tandoor with spices", isVeg: true, rating: 4.6 },
          { id: "3", name: "Chole Bhature", price: 179, description: "Spicy chickpeas served with fluffy deep-fried bread", isVeg: true, rating: 4.4 },
          { id: "4", name: "Samosa (2 pcs)", price: 49, description: "Crispy pastry filled with spiced potatoes and peas", isVeg: true, rating: 4.3 },
        ],
      },
      {
        title: "North Indian",
        items: [
          { id: "5", name: "Dal Makhani", price: 249, description: "Slow-cooked black lentils in creamy tomato sauce", isVeg: true, rating: 4.5 },
          { id: "6", name: "Shahi Paneer", price: 289, description: "Cottage cheese in rich, creamy tomato-cashew gravy", isVeg: true, rating: 4.6 },
          { id: "7", name: "Butter Naan", price: 49, description: "Soft leavened bread baked in tandoor with butter", isVeg: true, rating: 4.4 },
          { id: "8", name: "Tandoori Roti", price: 39, description: "Whole wheat bread baked in a clay oven", isVeg: true, rating: 4.2 },
        ],
      },
      {
        title: "Chaat & Snacks",
        items: [
          { id: "9", name: "Papdi Chaat", price: 89, description: "Crispy wafers with yogurt, chutneys and spices", isVeg: true, rating: 4.5 },
          { id: "10", name: "Aloo Tikki", price: 79, description: "Spiced potato patties served with mint and tamarind chutney", isVeg: true, rating: 4.4 },
          { id: "11", name: "Dahi Bhalla", price: 99, description: "Soft lentil dumplings in sweetened yogurt with toppings", isVeg: true, rating: 4.7 },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "12", name: "Mango Lassi", price: 89, description: "Refreshing yogurt-based mango drink", isVeg: true, rating: 4.6 },
          { id: "13", name: "Masala Chai", price: 49, description: "Aromatic spiced Indian tea", isVeg: true, rating: 4.3 },
        ],
      },
    ],
  },

  // Haldiram's Sweets and Namkeen
  "633759": {
    name: "Haldiram's Sweets and Namkeen",
    cuisines: ["Sweets", "Desserts", "Indian Snacks", "Snacks"],
    costForTwo: "₹400 for two",
    avgRating: "4.7",
    deliveryTime: "15-20 mins",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/3e57dec6-32f7-43b9-9276-54bcafe35fe9_633759.JPG",
    categories: [
      {
        title: "Sweets",
        items: [
          { id: "1", name: "Kaju Katli", price: 599, description: "Premium cashew fudge with silver leaf garnish (250g)", isVeg: true, rating: 4.8 },
          { id: "2", name: "Gulab Jamun (6 pcs)", price: 149, description: "Soft milk-solid balls soaked in rose-flavored sugar syrup", isVeg: true, rating: 4.7 },
          { id: "3", name: "Rasgulla (6 pcs)", price: 129, description: "Spongy cottage cheese balls in light sugar syrup", isVeg: true, rating: 4.6 },
          { id: "4", name: "Motichoor Ladoo (4 pcs)", price: 199, description: "Fine gram flour spheres bound with sugar syrup", isVeg: true, rating: 4.7 },
        ],
      },
      {
        title: "Namkeen & Snacks",
        items: [
          { id: "5", name: "Aloo Bhujia (400g)", price: 120, description: "Crispy potato noodle snack with Indian spices", isVeg: true, rating: 4.6 },
          { id: "6", name: "Mixture (400g)", price: 110, description: "Assorted savory snack mix", isVeg: true, rating: 4.5 },
          { id: "7", name: "Khatta Meetha (400g)", price: 120, description: "Sweet and tangy snack mix", isVeg: true, rating: 4.4 },
        ],
      },
      {
        title: "Festive Boxes",
        items: [
          { id: "8", name: "Assorted Sweets Box (1kg)", price: 699, description: "Curated assortment of premium Indian sweets", isVeg: true, rating: 4.8 },
          { id: "9", name: "Dry Fruit Box (250g)", price: 499, description: "Premium dry fruits and nuts box", isVeg: true, rating: 4.7 },
        ],
      },
    ],
  },

  // UBQ - Meals, Thalis & Bowls
  "512529": {
    name: "UBQ-Meals, Thalis & Bowls",
    cuisines: ["North Indian", "Kebabs", "Barbecue", "Biryani", "Street Food"],
    costForTwo: "₹300 for two",
    avgRating: "4.1",
    deliveryTime: "40-50 mins",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/e25d89f0-a372-462f-b2fe-dd864b0b60b4_512529.JPG",
    categories: [
      {
        title: "Thalis",
        items: [
          { id: "1", name: "Veg Thali", price: 179, description: "Complete meal with 3 sabzis, dal, roti, rice, salad and papad", isVeg: true, rating: 4.2 },
          { id: "2", name: "Non-Veg Thali", price: 229, description: "Chicken curry, dal, roti, rice, salad and papad", isVeg: false, rating: 4.3 },
          { id: "3", name: "Premium Thali", price: 299, description: "Paneer dish, 2 sabzis, dal makhani, naan, biryani rice, dessert", isVeg: true, rating: 4.4 },
        ],
      },
      {
        title: "Biryani Bowls",
        items: [
          { id: "4", name: "Chicken Biryani Bowl", price: 199, description: "Aromatic basmati rice with spiced chicken and raita", isVeg: false, rating: 4.2 },
          { id: "5", name: "Veg Biryani Bowl", price: 169, description: "Fragrant rice with seasonal vegetables and saffron", isVeg: true, rating: 4.0 },
          { id: "6", name: "Mutton Biryani Bowl", price: 249, description: "Slow-cooked mutton in layered rice with whole spices", isVeg: false, rating: 4.4 },
        ],
      },
      {
        title: "Kebabs",
        items: [
          { id: "7", name: "Chicken Seekh Kebab (4 pcs)", price: 229, description: "Minced chicken with herbs and spices, grilled on skewers", isVeg: false, rating: 4.3 },
          { id: "8", name: "Paneer Seekh Kebab (4 pcs)", price: 219, description: "Minced cottage cheese and vegetable kebabs", isVeg: true, rating: 4.2 },
        ],
      },
    ],
  },

  // Honest Bowl
  "1053968": {
    name: "Honest Bowl",
    cuisines: ["North Indian", "High Protein", "Biryani"],
    costForTwo: "₹200 for two",
    avgRating: "4.5",
    deliveryTime: "25-30 mins",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/3d295841-f807-487f-b62a-8bd99d127fc8_1053968.JPG",
    categories: [
      {
        title: "High Protein Bowls",
        items: [
          { id: "1", name: "Grilled Chicken Bowl", price: 199, description: "Lean grilled chicken over brown rice with fresh greens", isVeg: false, rating: 4.6 },
          { id: "2", name: "Egg White Bowl", price: 179, description: "Scrambled egg whites with quinoa, spinach and avocado", isVeg: false, rating: 4.5 },
          { id: "3", name: "Paneer Protein Bowl", price: 199, description: "High-protein grilled paneer with chana and mixed greens", isVeg: true, rating: 4.4 },
          { id: "4", name: "Chicken Tikka Bowl", price: 219, description: "Marinated chicken tikka over protein rice with yogurt sauce", isVeg: false, rating: 4.7 },
        ],
      },
      {
        title: "Biryani",
        items: [
          { id: "5", name: "Protein Chicken Biryani", price: 199, description: "High-protein biryani with extra chicken and brown rice", isVeg: false, rating: 4.5 },
          { id: "6", name: "Egg Biryani", price: 169, description: "Aromatic biryani loaded with boiled eggs", isVeg: false, rating: 4.3 },
        ],
      },
      {
        title: "Healthy Sides",
        items: [
          { id: "7", name: "Steamed Broccoli", price: 79, description: "Lightly seasoned steamed broccoli florets", isVeg: true, rating: 4.2 },
          { id: "8", name: "Protein Shake (Vanilla)", price: 149, description: "30g protein shake with low-fat milk", isVeg: true, rating: 4.4 },
        ],
      },
    ],
  },

  // Dum Safar Biryani
  "639516": {
    name: "Dum Safar Biryani",
    cuisines: ["Biryani", "Hyderabadi", "Kebabs", "North Indian", "Barbeque"],
    costForTwo: "₹500 for two",
    avgRating: "4.3",
    deliveryTime: "30-40 mins",
    cloudinaryImageId:
      "1154cffac2453eb0bf7fdda7e5ea1659",
    categories: [
      {
        title: "Hyderabadi Dum Biryani",
        items: [
          { id: "1", name: "Chicken Dum Biryani (Half)", price: 229, description: "Slow-cooked chicken in fragrant dum biryani style", isVeg: false, rating: 4.5 },
          { id: "2", name: "Chicken Dum Biryani (Full)", price: 399, description: "Generous full pot of slow-cooked chicken dum biryani", isVeg: false, rating: 4.6 },
          { id: "3", name: "Mutton Dum Biryani (Half)", price: 279, description: "Tender mutton pieces layered in aromatic basmati rice", isVeg: false, rating: 4.7 },
          { id: "4", name: "Veg Dum Biryani (Half)", price: 199, description: "Fresh seasonal vegetables cooked dum style with spices", isVeg: true, rating: 4.2 },
          { id: "5", name: "Prawn Dum Biryani (Half)", price: 299, description: "Juicy prawns in spiced basmati dum biryani", isVeg: false, rating: 4.6 },
        ],
      },
      {
        title: "Kebabs & Barbeque",
        items: [
          { id: "6", name: "Sheekh Kebab (6 pcs)", price: 249, description: "Classic minced lamb kebabs with fresh mint chutney", isVeg: false, rating: 4.5 },
          { id: "7", name: "Chicken Malai Tikka (6 pcs)", price: 269, description: "Creamy marinated chicken tikkas from the tandoor", isVeg: false, rating: 4.6 },
          { id: "8", name: "Boti Kabab (6 pcs)", price: 279, description: "Succulent chunks of lamb marinated and grilled", isVeg: false, rating: 4.5 },
        ],
      },
      {
        title: "Accompaniments",
        items: [
          { id: "9", name: "Mirchi Ka Salan", price: 89, description: "Traditional Hyderabadi green chili curry", isVeg: true, rating: 4.4 },
          { id: "10", name: "Raita", price: 59, description: "Cooling yogurt with cucumber and mint", isVeg: true, rating: 4.3 },
        ],
      },
    ],
  },

  // Behrouz Biryani
  "427124": {
    name: "Behrouz Biryani",
    cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
    costForTwo: "₹500 for two",
    avgRating: "4.5",
    deliveryTime: "30-40 mins",
    cloudinaryImageId:
      "1a8dfa8b2a73ddf7c6193465ab24c898",
    categories: [
      {
        title: "Royal Biryanis",
        items: [
          { id: "1", name: "Shahi Murgh Biryani", price: 349, description: "The legendary Behrouz chicken biryani with royal spices", isVeg: false, rating: 4.7 },
          { id: "2", name: "Lucknowi Gosht Biryani", price: 399, description: "Slow-cooked mutton biryani in Awadhi style", isVeg: false, rating: 4.8 },
          { id: "3", name: "Nihari Gosht Biryani", price: 419, description: "Rich nihari-style mutton biryani with bone marrow flavors", isVeg: false, rating: 4.7 },
          { id: "4", name: "Subz Nawabi Biryani", price: 279, description: "Premium vegetable biryani with nuts and saffron", isVeg: true, rating: 4.3 },
          { id: "5", name: "Lagan Ka Murgh", price: 369, description: "Slow-cooked chicken in sealed pot with aromatic spices", isVeg: false, rating: 4.6 },
        ],
      },
      {
        title: "Mughlai Kebabs",
        items: [
          { id: "6", name: "Galouti Kebab (4 pcs)", price: 299, description: "Melt-in-mouth kebabs with 160 spices — original recipe", isVeg: false, rating: 4.8 },
          { id: "7", name: "Seekh Kebab (4 pcs)", price: 269, description: "Juicy minced lamb kebabs with dill and green chili", isVeg: false, rating: 4.6 },
          { id: "8", name: "Shammi Kebab (4 pcs)", price: 259, description: "Delicate chickpea and lamb patties, lightly fried", isVeg: false, rating: 4.5 },
        ],
      },
      {
        title: "Desserts",
        items: [
          { id: "9", name: "Phirni", price: 129, description: "Creamy ground rice pudding with saffron and cardamom", isVeg: true, rating: 4.6 },
          { id: "10", name: "Shahi Tukda", price: 149, description: "Fried bread soaked in saffron milk topped with rabri", isVeg: true, rating: 4.7 },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "11", name: "Rose Sherbet", price: 89, description: "Cooling rose-flavored Indian sherbet drink", isVeg: true, rating: 4.5 },
          { id: "12", name: "Kesar Lassi", price: 109, description: "Saffron-infused thick yogurt drink", isVeg: true, rating: 4.7 },
        ],
      },
    ],
  },

  // 10 Downing Street
  "1112810": {
    name: "10 Downing Street",
    cuisines: ["North Indian", "Chinese", "Continental"],
    costForTwo: "₹600 for two",
    avgRating: "4.3",
    deliveryTime: "40-45 mins",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/141bc89c-2316-47cb-949a-c31552c95e38_1112810.jpg",
    categories: [
      {
        title: "North Indian Specialties",
        items: [
          { id: "1", name: "Butter Chicken", price: 349, description: "Succulent chicken in rich buttery tomato gravy", isVeg: false, rating: 4.6 },
          { id: "2", name: "Palak Paneer", price: 299, description: "Fresh cottage cheese in creamy spinach gravy", isVeg: true, rating: 4.5 },
          { id: "3", name: "Rogan Josh", price: 369, description: "Aromatic Kashmiri lamb curry with whole spices", isVeg: false, rating: 4.6 },
          { id: "4", name: "Garlic Naan", price: 69, description: "Soft naan brushed with garlic butter", isVeg: true, rating: 4.4 },
        ],
      },
      {
        title: "Chinese",
        items: [
          { id: "5", name: "Chicken Manchurian", price: 299, description: "Indo-Chinese fried chicken in spicy Manchurian sauce", isVeg: false, rating: 4.4 },
          { id: "6", name: "Veg Fried Rice", price: 229, description: "Wok-tossed rice with fresh vegetables and soy sauce", isVeg: true, rating: 4.2 },
          { id: "7", name: "Hakka Noodles", price: 229, description: "Stir-fried noodles with vegetables in Chinese spices", isVeg: true, rating: 4.3 },
          { id: "8", name: "Crispy Honey Chilli Potato", price: 199, description: "Crispy potato fingers tossed in sweet chili sauce", isVeg: true, rating: 4.5 },
        ],
      },
      {
        title: "Continental",
        items: [
          { id: "9", name: "Chicken Stroganoff", price: 399, description: "Tender chicken strips in creamy mushroom sauce with pasta", isVeg: false, rating: 4.5 },
          { id: "10", name: "Grilled Fish Fillet", price: 379, description: "Pan-grilled fish with lemon butter sauce and veggies", isVeg: false, rating: 4.4 },
          { id: "11", name: "Mushroom Risotto", price: 349, description: "Creamy arborio rice with mixed mushrooms and parmesan", isVeg: true, rating: 4.6 },
        ],
      },
      {
        title: "Desserts",
        items: [
          { id: "12", name: "Chocolate Lava Cake", price: 199, description: "Warm chocolate cake with molten chocolate center and ice cream", isVeg: true, rating: 4.8 },
          { id: "13", name: "Tiramisu", price: 219, description: "Classic Italian dessert with mascarpone and espresso", isVeg: true, rating: 4.7 },
        ],
      },
    ],
  },

  // Pizza Paradise
  "RES101": {
    name: "Pizza Paradise",
    cuisines: ["Pizza", "Italian", "Pasta", "Burgers", "Fast Food"],
    costForTwo: "₹450 for two",
    avgRating: "4.6",
    deliveryTime: "30-40 mins",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/18a96461-eb80-4571-965f-68204437013f_622716.JPG",
    categories: [
      {
        title: "Bestseller Pizzas",
        items: [
          { id: "1", name: "Margherita Pizza (Medium)", price: 249, description: "Classic tomato base with fresh mozzarella and basil", isVeg: true, rating: 4.7 },
          { id: "2", name: "Pepperoni Feast (Medium)", price: 329, description: "Loaded with spicy pepperoni slices and mozzarella", isVeg: false, rating: 4.8 },
          { id: "3", name: "BBQ Chicken Pizza (Medium)", price: 349, description: "Smoky BBQ sauce, grilled chicken, onions and peppers", isVeg: false, rating: 4.7 },
          { id: "4", name: "Garden Fresh Veggie (Medium)", price: 299, description: "Bell peppers, mushroom, olives, corn and red onion", isVeg: true, rating: 4.5 },
          { id: "5", name: "Four Cheese Pizza (Medium)", price: 379, description: "Mozzarella, cheddar, parmesan and gouda blend", isVeg: true, rating: 4.8 },
        ],
      },
      {
        title: "Pasta",
        items: [
          { id: "6", name: "Penne Arrabbiata", price: 199, description: "Penne in spicy tomato and garlic sauce", isVeg: true, rating: 4.4 },
          { id: "7", name: "Creamy Chicken Alfredo", price: 249, description: "Fettuccine with grilled chicken in creamy parmesan sauce", isVeg: false, rating: 4.6 },
          { id: "8", name: "Pesto Pasta", price: 219, description: "Fusilli tossed in fresh basil pesto with sun-dried tomatoes", isVeg: true, rating: 4.5 },
        ],
      },
      {
        title: "Burgers & Sides",
        items: [
          { id: "9", name: "Classic Cheeseburger", price: 179, description: "Beef patty with cheddar, lettuce, tomato and pickles", isVeg: false, rating: 4.5 },
          { id: "10", name: "Veg Burger", price: 149, description: "Crispy veg patty with fresh veggies and chipotle mayo", isVeg: true, rating: 4.3 },
          { id: "11", name: "Garlic Bread (4 pcs)", price: 99, description: "Toasted garlic butter bread with herbs", isVeg: true, rating: 4.6 },
          { id: "12", name: "Loaded Fries", price: 149, description: "Crispy fries topped with cheese sauce and jalapeños", isVeg: true, rating: 4.5 },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "13", name: "Classic Lemonade", price: 79, description: "Fresh squeezed lemonade with mint and sugar", isVeg: true, rating: 4.4 },
          { id: "14", name: "Chocolate Milkshake", price: 129, description: "Thick creamy chocolate shake topped with whipped cream", isVeg: true, rating: 4.7 },
        ],
      },
    ],
  },

  // The Burger Co.
  "RES102": {
    name: "The Burger Co.",
    cuisines: ["Burgers", "American", "Wraps", "Fries", "Shakes"],
    costForTwo: "₹350 for two",
    avgRating: "4.3",
    deliveryTime: "20-25 mins",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/3e57dec6-32f7-43b9-9276-54bcafe35fe9_633759.JPG",
    categories: [
      {
        title: "Signature Burgers",
        items: [
          { id: "1", name: "The Big Smash", price: 249, description: "Double smash patty, special sauce, caramelised onions, American cheese", isVeg: false, rating: 4.6 },
          { id: "2", name: "Crispy Chicken Deluxe", price: 229, description: "Southern-fried chicken fillet with coleslaw and honey mustard", isVeg: false, rating: 4.5 },
          { id: "3", name: "BBQ Bacon Burger", price: 269, description: "Beef patty with smoky bacon, BBQ sauce and crispy onions", isVeg: false, rating: 4.7 },
          { id: "4", name: "Veg Supreme", price: 189, description: "Black bean patty with avocado, lettuce, tomato and sriracha mayo", isVeg: true, rating: 4.2 },
          { id: "5", name: "Mushroom Swiss Burger", price: 239, description: "Juicy beef patty topped with sautéed mushrooms and Swiss cheese", isVeg: false, rating: 4.4 },
        ],
      },
      {
        title: "Wraps",
        items: [
          { id: "6", name: "Grilled Chicken Wrap", price: 189, description: "Grilled chicken, lettuce, tomato and chipotle sauce in a flour tortilla", isVeg: false, rating: 4.3 },
          { id: "7", name: "Veg Wrap", price: 169, description: "Grilled veggies, hummus and tzatziki in a warm tortilla", isVeg: true, rating: 4.1 },
        ],
      },
      {
        title: "Sides & Shakes",
        items: [
          { id: "8", name: "Truffle Parmesan Fries", price: 149, description: "Crispy fries tossed in truffle oil and parmesan shavings", isVeg: true, rating: 4.7 },
          { id: "9", name: "Onion Rings", price: 99, description: "Beer-battered crispy onion rings with dipping sauce", isVeg: true, rating: 4.4 },
          { id: "10", name: "Oreo Milkshake", price: 149, description: "Thick Oreo cookies blended with vanilla ice cream", isVeg: true, rating: 4.8 },
          { id: "11", name: "Strawberry Shake", price: 139, description: "Fresh strawberry milkshake with whipped cream", isVeg: true, rating: 4.5 },
        ],
      },
    ],
  },

  // Chinese Dragon
  "RES103": {
    name: "Chinese Dragon",
    cuisines: ["Chinese", "Asian", "Thai", "Sushi", "Noodles"],
    costForTwo: "₹400 for two",
    avgRating: "4.4",
    deliveryTime: "30-40 mins",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/e25d89f0-a372-462f-b2fe-dd864b0b60b4_512529.JPG",
    categories: [
      {
        title: "Dim Sum & Starters",
        items: [
          { id: "1", name: "Steamed Chicken Dumplings (6 pcs)", price: 199, description: "Delicate steamed dumplings with minced chicken and ginger", isVeg: false, rating: 4.6 },
          { id: "2", name: "Pan-Fried Veg Gyoza (6 pcs)", price: 179, description: "Crispy-bottomed vegetable gyoza with ponzu dipping sauce", isVeg: true, rating: 4.5 },
          { id: "3", name: "Spring Rolls (4 pcs)", price: 149, description: "Crispy golden rolls stuffed with vegetables and glass noodles", isVeg: true, rating: 4.4 },
          { id: "4", name: "Chilli Chicken (Dry)", price: 269, description: "Crispy chicken tossed in spicy Indo-Chinese sauce", isVeg: false, rating: 4.7 },
        ],
      },
      {
        title: "Main Course",
        items: [
          { id: "5", name: "Kung Pao Chicken", price: 299, description: "Spicy stir-fried chicken with peanuts and dried chilies in Szechuan sauce", isVeg: false, rating: 4.6 },
          { id: "6", name: "Mapo Tofu", price: 249, description: "Silken tofu in spicy fermented bean and Szechuan pepper sauce", isVeg: true, rating: 4.5 },
          { id: "7", name: "Sweet & Sour Pork", price: 319, description: "Crispy pork in tangy sweet and sour pineapple sauce", isVeg: false, rating: 4.4 },
          { id: "8", name: "Thai Green Curry with Rice", price: 289, description: "Aromatic green curry with coconut milk, tofu and jasmine rice", isVeg: true, rating: 4.6 },
        ],
      },
      {
        title: "Noodles & Rice",
        items: [
          { id: "9", name: "Chicken Chow Mein", price: 229, description: "Classic stir-fried noodles with chicken and vegetables", isVeg: false, rating: 4.5 },
          { id: "10", name: "Veg Pad Thai", price: 219, description: "Thai rice noodles with bean sprouts, peanuts and tamarind sauce", isVeg: true, rating: 4.4 },
          { id: "11", name: "Yang Chow Fried Rice", price: 249, description: "Wok-tossed fried rice with prawns, char siu pork and egg", isVeg: false, rating: 4.6 },
        ],
      },
    ],
  },

  // South Indian Tadka
  "RES104": {
    name: "South Indian Tadka",
    cuisines: ["South Indian", "Dosa", "Idli", "Kerala", "Tamil"],
    costForTwo: "₹300 for two",
    avgRating: "4.5",
    deliveryTime: "25-30 mins",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/3d295841-f807-487f-b62a-8bd99d127fc8_1053968.JPG",
    categories: [
      {
        title: "Dosas",
        items: [
          { id: "1", name: "Masala Dosa", price: 99, description: "Crispy rice crepe stuffed with spiced potato filling", isVeg: true, rating: 4.7 },
          { id: "2", name: "Paper Roast Dosa", price: 89, description: "Ultra-thin and crispy dosa, served with 3 chutneys and sambar", isVeg: true, rating: 4.6 },
          { id: "3", name: "Paneer Tikka Dosa", price: 139, description: "Dosa stuffed with spiced paneer tikka and onion chutney", isVeg: true, rating: 4.5 },
          { id: "4", name: "Ghee Roast Dosa", price: 119, description: "Slow-roasted dosa in generous amount of pure ghee", isVeg: true, rating: 4.8 },
          { id: "5", name: "Rava Masala Dosa", price: 109, description: "Semolina dosa with crispy texture and potato masala filling", isVeg: true, rating: 4.5 },
        ],
      },
      {
        title: "Idli & Vada",
        items: [
          { id: "6", name: "Idli Sambar (3 pcs)", price: 69, description: "Soft steamed rice cakes with piping hot sambar and chutneys", isVeg: true, rating: 4.6 },
          { id: "7", name: "Medu Vada (2 pcs)", price: 79, description: "Crispy lentil doughnuts with coconut chutney and sambar", isVeg: true, rating: 4.5 },
          { id: "8", name: "Rava Idli (3 pcs)", price: 89, description: "Soft semolina idlis with cashews and curry leaves", isVeg: true, rating: 4.4 },
        ],
      },
      {
        title: "Kerala Specials",
        items: [
          { id: "9", name: "Kerala Appam with Stew", price: 149, description: "Lacy fermented rice appam with coconut-based vegetable stew", isVeg: true, rating: 4.7 },
          { id: "10", name: "Puttu & Kadala Curry", price: 129, description: "Steamed rice flour cylinders with spiced black chickpea curry", isVeg: true, rating: 4.6 },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "11", name: "Filter Coffee", price: 49, description: "Strong South Indian filter coffee with frothy milk", isVeg: true, rating: 4.8 },
          { id: "12", name: "Buttermilk (Chaas)", price: 39, description: "Cooling spiced buttermilk with curry leaves and ginger", isVeg: true, rating: 4.5 },
        ],
      },
    ],
  },

  // Rolls & Wraps Express
  "RES105": {
    name: "Rolls & Wraps Express",
    cuisines: ["Rolls", "Wraps", "Kathi Rolls", "Street Food"],
    costForTwo: "₹250 for two",
    avgRating: "4.2",
    deliveryTime: "15-20 mins",
    cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
    categories: [
      {
        title: "Kathi Rolls",
        items: [
          { id: "1", name: "Chicken Kathi Roll", price: 129, description: "Tender chicken tikka with onions and green chutney in a flaky paratha", isVeg: false, rating: 4.4 },
          { id: "2", name: "Paneer Tikka Roll", price: 119, description: "Grilled spiced paneer with peppers in a soft paratha wrap", isVeg: true, rating: 4.3 },
          { id: "3", name: "Egg Roll", price: 99, description: "Fluffy egg omelette wrap with mustard and ketchup", isVeg: false, rating: 4.2 },
          { id: "4", name: "Mutton Seekh Roll", price: 159, description: "Minced lamb seekh kebab with onions, mint chutney in a paratha", isVeg: false, rating: 4.5 },
          { id: "5", name: "Double Chicken Roll", price: 169, description: "Extra chicken filling with extra cheese and sauces", isVeg: false, rating: 4.6 },
        ],
      },
      {
        title: "Wraps",
        items: [
          { id: "6", name: "Mexican Veg Burrito", price: 149, description: "Rice, black beans, grilled veggies, salsa and sour cream", isVeg: true, rating: 4.1 },
          { id: "7", name: "Falafel Wrap", price: 139, description: "Crispy falafel with hummus, tabbouleh and tahini in pita", isVeg: true, rating: 4.2 },
          { id: "8", name: "Shawarma Wrap", price: 149, description: "Middle-Eastern spiced chicken with garlic sauce and pickles", isVeg: false, rating: 4.4 },
        ],
      },
      {
        title: "Sides",
        items: [
          { id: "9", name: "Masala Fries", price: 79, description: "Crispy fries tossed in chaat masala and lemon", isVeg: true, rating: 4.3 },
          { id: "10", name: "Mint Chutney Dip", price: 29, description: "Freshly blended mint and coriander chutney", isVeg: true, rating: 4.4 },
        ],
      },
    ],
  },

  // Cake & Bake Studio
  "RES106": {
    name: "Cake & Bake Studio",
    cuisines: ["Bakery", "Desserts", "Cakes", "Pastries", "Beverages"],
    costForTwo: "₹500 for two",
    avgRating: "4.7",
    deliveryTime: "35-45 mins",
    cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
    categories: [
      {
        title: "Celebration Cakes",
        items: [
          { id: "1", name: "Belgian Chocolate Truffle Cake (500g)", price: 599, description: "Rich dark chocolate layers with ganache and chocolate shavings", isVeg: true, rating: 4.9 },
          { id: "2", name: "Strawberry Cheesecake (500g)", price: 549, description: "New York-style cheesecake with fresh strawberry compote", isVeg: true, rating: 4.8 },
          { id: "3", name: "Red Velvet Cake (500g)", price: 529, description: "Classic red velvet layers with cream cheese frosting", isVeg: true, rating: 4.7 },
          { id: "4", name: "Mango Passion Cake (500g)", price: 499, description: "Light mango sponge with passion fruit curd and mango mousse", isVeg: true, rating: 4.7 },
        ],
      },
      {
        title: "Pastries & Desserts",
        items: [
          { id: "5", name: "Croissant (Plain)", price: 79, description: "Buttery, flaky all-butter French croissant", isVeg: true, rating: 4.6 },
          { id: "6", name: "Pain au Chocolat", price: 99, description: "Flaky pastry filled with dark chocolate batons", isVeg: true, rating: 4.7 },
          { id: "7", name: "Crème Brûlée", price: 179, description: "Classic French custard with perfectly torched caramel crust", isVeg: true, rating: 4.8 },
          { id: "8", name: "Éclair (Chocolate)", price: 109, description: "Choux pastry filled with vanilla custard, dipped in chocolate", isVeg: true, rating: 4.6 },
          { id: "9", name: "Macarons (Box of 6)", price: 349, description: "Assorted French macarons in seasonal flavors", isVeg: true, rating: 4.8 },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "10", name: "Café Latte", price: 129, description: "Smooth espresso with steamed microfoam milk", isVeg: true, rating: 4.6 },
          { id: "11", name: "Hot Chocolate", price: 139, description: "Rich Belgian hot chocolate with marshmallows", isVeg: true, rating: 4.7 },
          { id: "12", name: "Cold Brew Coffee", price: 149, description: "12-hour cold brewed coffee, served over ice", isVeg: true, rating: 4.5 },
        ],
      },
    ],
  },

  // Mughal Darbar
  "RES107": {
    name: "Mughal Darbar",
    cuisines: ["Mughlai", "North Indian", "Kebabs", "Biryani", "Desserts"],
    costForTwo: "₹600 for two",
    avgRating: "4.6",
    deliveryTime: "40-50 mins",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/141bc89c-2316-47cb-949a-c31552c95e38_1112810.jpg",
    categories: [
      {
        title: "Kebabs & Starters",
        items: [
          { id: "1", name: "Kakori Kebab (4 pcs)", price: 349, description: "Traditional Lucknowi melt-in-mouth minced lamb kebabs with saffron", isVeg: false, rating: 4.8 },
          { id: "2", name: "Tandoori Chicken Half", price: 299, description: "Whole chicken marinated overnight in yogurt and spices from the tandoor", isVeg: false, rating: 4.7 },
          { id: "3", name: "Paneer Tikka (6 pcs)", price: 289, description: "Charred cottage cheese marinated in spiced yogurt", isVeg: true, rating: 4.6 },
          { id: "4", name: "Chicken Gilafi Seekh (4 pcs)", price: 319, description: "Minced chicken and herb kebabs encrusted with diced vegetables", isVeg: false, rating: 4.7 },
        ],
      },
      {
        title: "Royal Curries",
        items: [
          { id: "5", name: "Murgh Musallam", price: 549, description: "Whole leg of chicken stuffed and slow-cooked in royal Mughal gravy", isVeg: false, rating: 4.9 },
          { id: "6", name: "Nihari Gosht", price: 449, description: "Slow-cooked bone-in mutton stew with marrow and warm spices", isVeg: false, rating: 4.8 },
          { id: "7", name: "Aloo Bukhara Gosht", price: 429, description: "Mutton cooked with dried plums in a rich tangy gravy", isVeg: false, rating: 4.7 },
          { id: "8", name: "Shahi Paneer Makhni", price: 329, description: "Cottage cheese in rich cream-cashew-tomato Mughal-style gravy", isVeg: true, rating: 4.6 },
        ],
      },
      {
        title: "Breads",
        items: [
          { id: "9", name: "Roomali Roti (2 pcs)", price: 59, description: "Ultra-thin handkerchief bread cooked on inverted tawa", isVeg: true, rating: 4.5 },
          { id: "10", name: "Sheermal (2 pcs)", price: 89, description: "Saffron-infused sweet milk bread from tandoor", isVeg: true, rating: 4.6 },
          { id: "11", name: "Peshwari Naan", price: 79, description: "Naan stuffed with almonds, coconut and raisins", isVeg: true, rating: 4.5 },
        ],
      },
      {
        title: "Mughal Desserts",
        items: [
          { id: "12", name: "Shahi Tukda", price: 179, description: "Fried bread soaked in saffron rabri with rose water and nuts", isVeg: true, rating: 4.8 },
          { id: "13", name: "Zafrani Kheer", price: 149, description: "Creamy saffron rice pudding with cardamom and pistachio", isVeg: true, rating: 4.7 },
          { id: "14", name: "Gulab Jamun with Ice Cream", price: 159, description: "Warm gulab jamuns served with vanilla ice cream scoop", isVeg: true, rating: 4.9 },
        ],
      },
    ],
  },
};

export default menuData;

