const { Category } = require("../models");

class CategoryController {
  static async getAll(req, res, next) {
    try {
      const data = await Category.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Category.findOne({ where: { id } });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async create(req, res, next) {
    try {
      const { name, description } = req.body;
      const createdCategory = await Category.create({ name, description });
      res.status(200).json(createdCategory);
    } catch (err) {
      next(err);
    }
  }
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const [updateRowsCount, [updateCategory]] = await Category.update(
        {
          name,
          description,
        },
        { where: { id }, returning: true }
      );
      if (updateRowsCount !== 1) {
        throw { name: "NothingChange" };
      }
      res.status(200).json(updateCategory);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });
      if (!category) {
        throw { name: "ErrorNotFound", message: "Category Not Found" };
      }
      await Category.destroy({ where: { id } });
      res
        .status(200)
        .json({ message: `Category ${category.name} was deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
