const { User } = require("../models");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

class UserController {
  static async getAll(req, res, next) {
    try {
      const data = await User.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { firstname, lastname, username, email, password, aboutme } =
        req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const [updateRowsCount, [updateUser]] = await User.update(
        {
          firstname,
          lastname,
          username,
          email,
          password: hashPassword,
          aboutme,
        },
        { where: { id }, returning: true }
      );
      if (updateRowsCount !== 1) {
        throw { name: "InvalidCredential" };
      }
      res.status(200).json(updateUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
