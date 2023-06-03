"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Project_categories",
      [
        {
          project_id: 1,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          project_id: 2,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Project_categories", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
