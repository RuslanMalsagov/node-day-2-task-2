const { Router } = require("express");
const { brandsControlles } = require("../controlles/brands.controller");

const router = Router();

router.get("/brands", brandsControlles.getBrands);

router.post("/brands", brandsControlles.postBrands);

router.delete("/brands", brandsControlles.deleteBrands);

module.exports = router;
