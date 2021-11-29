const { response } = require("express");
const Sell = require("../../models/sell.model");

async function weeklySell(req, res) {
  response = [];
  listdate = req.body.dates;

  res.json({ hola: "mundo" });

  for (let i = 0; i < listdate.length; i++) {
    const data = Sell.findOne({ date: listdate[i] });
    response.push(data);
  }

  res.json(response);
}

module.exports = {
  weeklySell,
};
