const { model, Schema } = require("mongoose");
const Products = require("./products.model");

const Client = new Schema({
  name_client: {
    type: String,
    unique: false,
    require: false,
  },
  cedula: {
    type: String,
    require: false,
    unique: false,
  },
  direction: {
    type: String,
    require: false,
    unique: false,
  },
  phone: {
    type: String,
    require: false,
    unique: false,
  },
});

module.exports = model("Client", Client);
