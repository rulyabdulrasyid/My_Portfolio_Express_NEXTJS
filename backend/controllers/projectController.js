const {
  Project,
  User,
  Category,
  Tech,
  Project_category,
  Project_tech,
} = require("../models");

class ProjectController {
  static async getAll(req, res, next) {
    try {
      const { page, limit = 1 } = req.query;
      const offset = (page - 1) * limit;

      const count = await Project.count();
      const data = await Project.findAll({
        include: [User, Category, Tech],
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
      if (data) {
        const totalPages = Math.ceil(count / limit);
        res.status(200).json({
          totalData: count,
          data,
          totalPages,
          currentPage: parseInt(page),
        });
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (err) {
      next(err);
    }
  }
  static async getById(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Project.findOne({
        include: [Category, Tech],
        where: { id },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async create(req, res, next) {
    const { name, year, description, status, user_id, category_id, tech_id } =
      req.body;
    try {
      // const imagePath = `http://localhost:${process.env.PORT}/${req.file.path}`;
      const createdProject = await Project.create({
        name,
        year,
        description,
        status,
        user_id,
        // image:
      });
      await Project_category.create({
        project_id: createdProject.id,
        category_id,
      });
      await Project_tech.create({
        project_id: createdProject.id,
        tech_id,
      });
      res.status(201).json(createdProject);
    } catch (err) {
      next(err);
    }
  }
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, year, description, status, user_id, category_id, tech_id } =
        req.body;
      const [updateRowsCount, [updateProject]] = await Project.update(
        { name, year, description, status, user_id, category_id, tech_id },
        { where: { id }, returning: true }
      );
      if (updateRowsCount !== 1) {
        throw { name: "NothingChange" };
      }
      res.status(200).json(updateProject);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      await Project_category.destroy({ where: { project_id: id } });
      await Project_tech.destroy({ where: { project_id: id } });

      const project = await Project.findOne({ where: { id } });
      if (!project) {
        throw { name: "ErrorNotFound", message: "Project Not Found" };
      }
      await Project.destroy({ where: { id } });
      res.status(200).json({ message: `Project ${project.name} was deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProjectController;
