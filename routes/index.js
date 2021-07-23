const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");
const cartRouter = require("./cartRouter");
const subcategoryRouter = require("./subcategoryRouter");
const brandRouter = require("./brandRouter");

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/cart", cartRouter);
router.use("/brand", brandRouter);

module.exports = router;
