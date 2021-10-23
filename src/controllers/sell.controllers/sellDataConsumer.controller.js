const Sell = require("../../models/sell.model");
const Client = require("../../models/client.model");
const Products = require("../../models/products.model");
const { createCodeSell } = require("./sellFinalConsumer.controller");

async function sellDataConsumer(req, res) {
  // get list product sell
  const listProducts = req.body.listProducts;
  let total = 0;
  const listSell = [];

  // this for save in listSell those products
  for (let i = 0; i < listProducts.length; i++) {
    const product = await Products.findOne({ code: listProducts[i] });
    listSell.push(product);
    total += product.price;
  }

  // get data client
  const dataClient = req.body.dataClient;

  // create code for sell
  const code = await createCodeSell();

  // create client if not exits
  const client = await Client.findOne({
    name_client: dataClient.name,
    cedula: dataClient.cedula,
    direction: dataClient.direction,
    phone: dataClient.phone,
  });

  if (!client) {
    const newClient = await new Client(dataClient);

    await newClient.save();

    // create sell

    const newSell = await new Sell({
      client: newClient._id,
      date: new Date(),
      products: listSell,
      total,
      code,
    });

    await newSell.save();
    return res.json(newSell);
  }

  const newSell = await new Sell({
    client,
    date: new Date(),
    products: listSell,
    total,
    code,
  });

  await newSell.save();
  res.json(newSell);
}

module.exports = {
  sellDataConsumer,
};
