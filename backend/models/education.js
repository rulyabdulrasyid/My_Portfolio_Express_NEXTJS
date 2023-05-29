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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      degreename: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      institutename: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      instituteurl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      startdate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      enddate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Education",
    }
  );
  return Education;
};
