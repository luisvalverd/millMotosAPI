const Sell = require("../../models/sell.model");

// search all sells by date
async function searchSell(date) {
  let listSell = [];

  const sells = await Sell.find({ date });
  listSell = sells;
  return listSell;
}

// in this function get all sell today and total sell
async function sellToday(req, res) {
  // get date
  const date = req.body.date;
  const sells = await searchSell(date);
  let totalSell = 0;

  for (let i = 0; i < sells.length; i++) {
    totalSell += sells[i].total;
  }
  res.json({ sells, totalSell });
}

module.exports = {
  sellToday,
};
