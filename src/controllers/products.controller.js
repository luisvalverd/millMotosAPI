const Products = require("./../models/products.model");

// create code
async function createCodeProduct() {
  let code = (Math.random() + 1).toString(36).substring(5);
  if (code.length > 7) {
    return createCodeProduct();
  }
  Products.findOne({ code }, (err, product) => {
    try {
      if (product) {
        return createCodeProduct();
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
  const code = await createCodeProduct();

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
  createCodeProduct();
  Products.find({}, (err, product) => {
    res.json(product);
  });
}

module.exports = {
  addProduct,
  getAllProducts,
};
