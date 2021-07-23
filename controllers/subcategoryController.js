const { SubCategory } = require("../models/models");

class SubCategoryController {
  async create(req, res) {
    const { name } = req.body;
    const subcategories = await SubCategory.create({ name });
    return res.json(subcategories);
  }
  async getAll(req, res) {
    const subcategories = await SubCategory.findAll();
    return res.json(subcategories);
  }
}

module.exports = new SubCategoryController();
