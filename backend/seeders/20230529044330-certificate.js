"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Certificates", [
      {
        user_id: 1,
        name: "Basic of OMRON PLC",
        description:
          "A Programmable Logic Controller (PLC) is an electronic device used to control automation processes in industries. Omron PLCs are widely used and popular in various industrial sectors such as manufacturing, automotive, and food processing.",
        ispublishedby: "PT. Omron Office",
        startdate: 2021,
        enddate: 2222,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        name: "Electrical Desaign for Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar venenatis pharetra. Ut id neque orci. Suspendisse potenti. Cras interdum dui at semper sodales. Suspendisse aliquet, sapien at ornare suscipit",
        ispublishedby: "PT. Electrical Design",
        startdate: 2021,
        enddate: 2222,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Certificates", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
