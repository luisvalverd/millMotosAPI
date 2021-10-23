const { model, Schema } = require("mongoose");

const Sell = new Schema({
  client: {
    ref: "Client",
    type: Schema.Types.ObjectId,
  },
  date: {
    type: String,
    require: true,
    unique: false,
  },
  products: [
    {
      ref: "Product",
      type: Schema.Types.ObjectId,
    },
  ],
  workforce: {
    type: Number,
    require: false,
    unique: false,
  },
  total: {
    type: Number,
    require: true,
    unique: false,
  },
  code: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = model("Sell", Sell);
