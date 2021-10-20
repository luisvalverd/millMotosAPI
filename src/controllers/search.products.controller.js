const Products = require("./../models/products.model");

// this function is for search a list of products by name
async function searchProductByName(req, res) {
  Products.find({ name: req.body.name }, (err, product) => {
    try {
      if (product.length === 0) {
        return res
          .status(400)
          .json({ message: "error in search, not find any product" });
      }
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
    }
  });
}

// find product by its mark
async function searchProductByMark(req, res) {
  Products.find({ mark: req.body.mark }, (err, product) => {
    try {
      if (product.length === 0) {
        return res
          .status(400)
          .json({ message: "error in search, not find any product" });
      }
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
    }
  });
}

async function searchProductByCategory(req, res) {
  Products.find({ category: req.body.category }, (err, product) => {
    try {
      if (product.length === 0) {
        return res
          .status(400)
          .json({ message: "error in search, not find any product" });
      }
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
    }
  });
}

async function searchProductByCode(req, res) {
  Products.findOne({ code: req.body.code }, (err, product) => {
    try {
      if (!product) {
        return res
          .status(400)
          .json({ message: "error in search, not find any product" });
      }
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = {
  searchProductByName,
  searchProductByMark,
  searchProductByCategory,
  searchProductByCode,
};
