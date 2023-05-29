"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Teches", [
      {
        name: "Programable Logic Control",
        description:
          "A Programmable Logic Controller (PLC) is an electronic device used to control automation processes in industries.",
        techurl:
          "https://www.polycase.com/techtalk/electronics-tips/what-is-a-programmable-logic-controller.html#:~:text=A%20programmable%20logic%20controller%20is,internal%20logic%20programmed%20into%20it.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Java Script",
        description:
          "JavaScript is a high-level, interpreted programming language that is primarily used for client-side web development. ",
        techurl: "https://www.javascript.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "QELectrotech",
        description:
          "QElectroTech is a free software to create electric diagrams. QElectroTech, or QET in short, is currently available in version 0.90.",
        techurl: "https://qelectrotech.org/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teches", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
