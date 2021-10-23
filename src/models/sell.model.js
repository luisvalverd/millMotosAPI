const { model, Schema } = require("mongoose");

const Sell = new Schema({
  client: {
    ref: "Client",
    type: Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    require: true,
    unique: false,
  },
  products: [
    {
      ref: "Product",
      type: Schema.Types.ObjectId,
    },
  ],
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
