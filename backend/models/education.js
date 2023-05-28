"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Education.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Education.init(
    {
      user_id: DataTypes.INTEGER,
      degreename: DataTypes.STRING,
      institutename: DataTypes.STRING,
      instituteurl: DataTypes.STRING,
      startdat: DataTypes.INTEGER,
      endedat: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Education",
    }
  );
  return Education;
};
