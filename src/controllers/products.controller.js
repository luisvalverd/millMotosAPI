const Products = require("./../models/products.model");

// create code
async function createCode() {
  let text = (Math.random() + 1).toString(36).substring(5);
  let code = text.replace(/\s+/g, "");
  if (code.length > 7) {
    return createCode();
  }
  Products.findOne({ code }, (err, product) => {
    try {
      if (product) {
        return createCode();
      }
    } catch (e) {
      console.log(e);
    }
  });
  return code;
}

// this function is for add a new product
async function addProduct(req, res) {
  const { name, description, mark, price, model, category, stock } = req.body;

  // find product code available
  const code = await createCode();

  // add product
  const newProduct = await new Products({
    name,
    description,
    mark,
    price,
    model,
    category,
    stock,
    code,
  });

  await newProduct.save();
  res.status(200).json({ message: "new product save", newProduct });
}

async function getAllProducts(req, res) {
  Products.find({}, (err, product) => {
    res.json(product);
  });
}

module.exports = {
  addProduct,
  getAllProducts,
};
