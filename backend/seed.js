const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');
const FoodCategory = require('./models/FoodCategory');
require('dotenv').config(); // ✅ Load .env variables

const MONGO_URI = process.env.MONGO_URI; 

const foodItemsData = [
  {
    name: "Paneer Butter Masala",
    CategoryName: "North Indian",
    options: [{ half: "150", full: "250" }],
    img: "https://tse1.mm.bing.net/th/id/OIP.VMubogAQMrrpCuVPkoNQggAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Chicken Biryani",
    CategoryName: "Biryani",
    options: [{ half: "180", full: "300" }],
    img: "https://tse1.explicit.bing.net/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Veg Burger",
    CategoryName: "Fast Food",
    options: [{ regular: "80", cheese: "100" }],
    img: "https://source.unsplash.com/900x700/?https://tse4.mm.bing.net/th/id/OIP.tYPcBnTxuEEyOHt6NAbCQAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

const foodCategoryData = [
  { CategoryName: "North Indian" },
  { CategoryName: "Biryani" },
  { CategoryName: "Fast Food" }
];

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("MongoDB Connected!");

    await FoodItem.deleteMany({});
    await FoodCategory.deleteMany({});

    await FoodItem.insertMany(foodItemsData);
    await FoodCategory.insertMany(foodCategoryData);

    console.log("✅ Data seeded successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
