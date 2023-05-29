"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Projects",
      [
        {
          user_id: 1,
          name: "Design and Installation Electrical Installation",
          year: 2020,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar venenatis pharetra. Ut id neque orci. Suspendisse potenti. Cras interdum dui at semper sodales. Suspendisse aliquet, sapien at ornare suscipit",
          status: "Done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          name: "Design and Installation Motor Installation",
          year: 2021,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar venenatis pharetra. Ut id neque orci. Suspendisse potenti. Cras interdum dui at semper sodales. Suspendisse aliquet, sapien at ornare suscipit",
          status: "Done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
