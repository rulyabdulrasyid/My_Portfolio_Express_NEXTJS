"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Certificate_categories", [
      {
        certificate_id: 1,
        category_id: 2,
        name: "Electrical",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        certificate_id: 2,
        category_id: 2,
        name: "Electrical",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Certificate_categories", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
