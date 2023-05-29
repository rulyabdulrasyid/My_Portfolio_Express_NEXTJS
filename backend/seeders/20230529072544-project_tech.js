"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Project_teches",
      [
        {
          project_id: 1,
          tech_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          project_id: 2,
          tech_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Project_teches", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
