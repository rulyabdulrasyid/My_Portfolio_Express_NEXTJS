"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Media_socials",
      [
        {
          user_id: 1,
          username: "instagram/adminportofolio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          username: "twitter/adminportofolio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          username: "youtube/adminportofolio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Media_socials", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
