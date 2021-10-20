const { Router } = require("express");
const router = Router();
const {
  addProduct,
  getAllProducts,
} = require("../controllers/products.controller");

// search imports
const {
  searchProductByName,
  searchProductByMark,
  searchProductByCategory,
  searchProductByCode,
} = require("../controllers/search.products.controller");

// update imports
const {
  updateProductPrice,
  updateProductStock,
  updateProductName,
  updateProductMark,
  updateProductDescription,
  updateProductModel,
} = require("../controllers/update.products.controller");

router.get("/get-all-products", getAllProducts);

// router of search products
router.post("/search-product-by-name", searchProductByName);

router.post("/search-product-by-mark", searchProductByMark);

router.post("/search-product-by-category", searchProductByCategory);

router.post("/search-product-by-code", searchProductByCode);

// router of add product
router.post("/add-product", addProduct);

// routers of update products
router.post("/update-product-stock", updateProductStock);

router.post("/update-product-price", updateProductPrice);

router.post("/update-product-name", updateProductName);

router.post("/update-product-mark", updateProductMark);

router.post("/update-product-description", updateProductDescription);

router.post("/update-product-model", updateProductModel);

module.exports = router;
