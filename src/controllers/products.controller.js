const Products = require("./../models/products.model");

// this function is for add a new product
async function addProduct(req, res) {
  const { name, description, mark, price, model, category, stock, code } =
    req.body;

  // find if product code is exists
  Products.find({ code }, async (err, product) => {
    try {
      if (product.length !== 0) {
        res.status(406).json({ message: "the product code already exists" });
      }

      // add product

      if (product.length === 0) {
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
        res.status(300).json({ message: "product save", newProduct });
      } else {
        res.status(406).json({ message: "exist" });
      }
    } catch (e) {
      console.log(e);
    }
  });
}

// this function is for search a list of products by name
async function findProductByName(req, res) {
  Products.find({ name: req.body.name }, (err, product) => {
    res.json(product);
  });
}

async function getAllProducts(req, res) {
  Products.find({}, (err, product) => {
    res.json(product);
  });
}

// update stock
async function updateProductStock(req, res) {
  const { name, code, stock } = req.body;
  Products.findOneAndUpdate(
    { code },
    {
      stock,
    },
    (err, product) => {
      try {
        res.json({ message: "update successfuly", product });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

module.exports = {
  addProduct,
  findProductByName,
  getAllProducts,
  updateProductStock,
};
