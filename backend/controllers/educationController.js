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
  static async create(req, res, next) {
    const {
      user_id,
      degreename,
      institutename,
      instituteurl,
      startdate,
      enddate,
    } = req.body;
    try {
      const createdEducation = await Educations.create({
        user_id,
        degreename,
        institutename,
        instituteurl,
        startdate,
        enddate,
      });
      res.status(200).json(createdEducation);
    } catch (err) {
      next(err);
    }
  }
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        user_id,
        degreename,
        institutename,
        instituteurl,
        startdate,
        enddate,
      } = req.body;
      const [updateRowsCount, [updateEducation]] = await Educations.update(
        {
          user_id,
          degreename,
          institutename,
          instituteurl,
          startdate,
          enddate,
        },
        { where: { id }, returning: true }
      );
      if (updateRowsCount !== 1) {
        throw { name: "NothingChange" };
      }
      res.status(200).json(updateEducation);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const education = await Educations.findOne({ where: { id } });
      if (!education) {
        throw { name: "ErrorNotFound", message: "Project Not Found" };
      }
      await Educations.destroy({ where: { id } });
      res
        .status(200)
        .json({ message: `Education ${education.degreename} was deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EducationController;
