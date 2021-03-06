const Products = require("../../models/products.model");
const Client = require("../../models/client.model");
const Sell = require("../../models/sell.model");

// create code sell
async function createCodeSell() {
  let code = (Math.random() + 1).toString(36).substring(5);
  if (code.length > 7) {
    return createCodeSell();
  }
  // verify if code exist
  Sell.findOne({ code }, (err, sell) => {
    try {
      if (sell) {
        return createCodeSell();
      }
    } catch (e) {
      console.log(e);
    }
  });
  return code;
}

// create a new sell
// in this function no will create a client
// only create a new sell consumer final
async function newSellFinalConsumer(req, res) {
  // get list of products code to sell
  const listProducts = req.body.listProducts;

  // date
  let date = new Date().toLocaleDateString();

  // workforce
  let workforce = req.body.workforce || 0;
  // create a new code for Sell
  const code = await createCodeSell();

  // list products and sum total price
  let total = 0;
  const listSell = [];

  for (let i = 0; i < listProducts.length; i++) {
    const product = await Products.findOne({ code: listProducts[i] });
    listSell.push(product);
    total += product.price;
  }

  // add workforce to total
  total += workforce;

  // find a client with any data
  // if exist utilice that client else if create client
  const client = await Client.findOne({
    name_client: "",
    cedula: "",
    direction: "",
    phone: "",
  });

  if (!client) {
    const newClient = await new Client({
      name_client: "",
      cedula: "",
      direction: "",
      phone: "",
    });
    await newClient.save();

    // create document sell in mongo

    const newSellNotExistClient = await new Sell({
      client: newClient,
      date,
      products: listSell,
      workforce,
      total,
      code,
    });

    await newSellNotExistClient.save();

    return res.json(newSellNotExistClient);
  }

  const newSellExitsClient = await new Sell({
    client: client,
    date,
    products: listSell,
    workforce,
    total,
    code,
  });

  await newSellExitsClient.save();

  res.json(newSellExitsClient);
}

module.exports = {
  newSellFinalConsumer,
  createCodeSell,
};
