const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  CategoryName: { type: String, required: true },
  options: { type: Array, required: true },
  img: { type: String, required: true }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
