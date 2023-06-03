"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstname: "admin",
          lastname: "portofolio",
          username: "rulyabdulrasyid",
          email: "admin@gmail.com",
          password: await bcrypt.hash("admin", 10),
          aboutme:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar venenatis pharetra. Ut id neque orci. Suspendisse potenti. Cras interdum dui at semper sodales. Suspendisse aliquet, sapien at ornare suscipit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
