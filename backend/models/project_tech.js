"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project_tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project_tech.belongsTo(models.Project, { foreignKey: "project_id" });
      Project_tech.belongsTo(models.Tech, { foreignKey: "tech_id" });
    }
  }
  Project_tech.init(
    {
      project_id: DataTypes.INTEGER,
      tech_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Project_tech",
    }
  );
  return Project_tech;
};
