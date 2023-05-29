"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certificate_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Certificate_category.belongsTo(models.Certificate, {
        foreignKey: "certificate_id",
      });
      Certificate_category.belongsTo(models.Category, {
        foreignKey: "cetegory_id",
      });
    }
  }
  Certificate_category.init(
    {
      certificate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Certificate_category",
    }
  );
  return Certificate_category;
};
