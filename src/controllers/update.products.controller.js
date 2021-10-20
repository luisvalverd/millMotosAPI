const Products = require("../models/products.model");

// update stock
async function updateProductStock(req, res) {
  const { code, stock } = req.body;
  Products.findOneAndUpdate(
    { code },
    {
      stock,
    },
    (err, product) => {
      try {
        res.json({ message: "update successfuly" });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

// update price
async function updateProductPrice(req, res) {
  const { price, code } = req.body;
  Products.findOneAndUpdate(
    { code },
    {
      price,
    },
    (err, product) => {
      try {
        res.json({ message: "price update successfuly" });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

// update description
async function updateProductDescription(req, res) {
  const { description, code } = req.body;
  Products.findByIdAndUpdate(
    { code },
    {
      description,
    },
    (err, product) => {
      try {
        res.json({ message: "description update successfuly" });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

// update name
async function updateProductName(req, res) {
  const { name, code } = req.body;
  Products.findOneAndUpdate(
    { code },
    {
      name,
    },
    (err, product) => {
      try {
        res.json({ message: "name update successfuly" });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

// update mark
async function updateProductMark(req, res) {
  const { mark, code } = req.body;
  Products.findOneAndUpdate(
    { code },
    {
      mark,
    },
    (err, product) => {
      try {
        res.json({ message: "mark update successfuly" });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

// update model
async function updateProductModel(req, res) {
  const { model, code } = req.body;
  Products.findOneAndUpdate(
    { code },
    {
      model,
    },
    (err, product) => {
      try {
        res.json({ message: "model update successfuly" });
      } catch (e) {
        console.log(e);
      }
    }
  );
}

module.exports = {
  updateProductPrice,
  updateProductStock,
  updateProductDescription,
  updateProductName,
  updateProductMark,
  updateProductModel,
};
