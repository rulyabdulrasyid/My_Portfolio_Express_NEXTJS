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
      Certificate.belongsToMany(model.Category, {
        through: models.Certificate_category,
        foreignKey: "certificate_id",
      });
    }
  }
  Certificate.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      ispublishedby: DataTypes.STRING,
      startdate: DataTypes.INTEGER,
      enddate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Certificate",
    }
  );
  return Certificate;
};
