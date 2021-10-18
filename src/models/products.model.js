const { model, Schema } = require("mongoose");

const Products = new Schema({
  name: {
    type: String,
    unique: false,
    require: true,
  },
  description: {
    type: String,
    unique: false,
    require: false,
  },
  mark: {
    type: String,
    unique: false,
    require: true,
  },
  price: {
    type: Number,
    unique: false,
    require: true,
  },
  model: {
    type: String,
    unique: false,
    require: true,
  },
  category: {
    type: String,
    unique: false,
    require: true,
  },
  stock: {
    type: Number,
    unique: false,
    require: false,
  },
  code: {
    type: String,
    unique: true,
    require: true,
  },
});

module.exports = model("Products", Products);
