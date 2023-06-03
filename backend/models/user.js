"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Education, { foreignKey: "user_id" });
      User.hasMany(models.Media_social, { foreignKey: "user_id" });
      User.hasMany(models.Certificate, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      aboutme: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
