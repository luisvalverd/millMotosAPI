const { Router } = require("express");
const router = Router();
const {
  addProduct,
  getAllProducts,
  updateProductStock,
} = require("../controllers/products.controller");

router.get("/get-all-products", getAllProducts);

router.post("/find-product", (req, res) => {
  res.json({ message: "find product" });
});

router.post("/add-product", addProduct);

router.post("/update-product-stock", updateProductStock);

module.exports = router;
