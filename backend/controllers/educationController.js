const { Educations, User } = require("../models");

class EducationController {
  static async getAll(req, res, next) {
    try {
      const data = await Educations.findAll({ include: [User] });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async getById(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Educations.findOne({ include: [User], where: { id } });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EducationController;
