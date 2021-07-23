const Router = require("express");
const router = new Router();
const subcategoryController = require("../controllers/subcategoryController");

router.post("/", subcategoryController.create);
router.get("/", subcategoryController.getAll);

module.exports = router;
