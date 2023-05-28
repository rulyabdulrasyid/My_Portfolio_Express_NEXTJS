"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.User, { foreignKey: "user_id" });
      Project.belongsToMany(models.Category, {
        through: models.Project_Category,
        foreignKey: "project_id",
      });
      Project.belongsToMany(models.Tech, {
        through: models.Project_tech,
        foreignKey: "project_id",
      });
    }
  }
  Project.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      year: DataTypes.INTEGER,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
