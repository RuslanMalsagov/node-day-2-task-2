const { Router } = require("express");
const { productsController } = require("../controlles/products.controller");

const router = Router();

router.get("/products", productsController.getProducts);

router.get("/products/:id", productsController.getProducts);

router.post("/products", productsController.postProducts);

router.delete("/products", productsController.deleteProducts);

module.exports = router;
