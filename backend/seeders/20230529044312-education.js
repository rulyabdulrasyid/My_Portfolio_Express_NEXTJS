"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Educations",
      [
        {
          user_id: 1,
          degreename: "Elementry School",
          institutename: "SD Negeri 1 Puncak",
          instituteurl: "http://sdnegeri1puncak.com",
          startdate: 2004,
          enddate: 2009,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          degreename: "Junior High School",
          institutename: "SMP Negeri 2 Kuningan",
          instituteurl: "http://smpnegeri2kuningan.com",
          startdate: 2004,
          enddate: 2009,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Educations", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
