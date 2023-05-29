"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Certificate.belongsTo(models.User, { foreignKey: "user_id" });
      Certificate.belongsToMany(models.Category, {
        through: models.Certificate_category,
        foreignKey: "certificate_id",
      });
    }
  }
  Certificate.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      ispublishedby: {
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
      modelName: "Certificate",
    }
  );
  return Certificate;
};
