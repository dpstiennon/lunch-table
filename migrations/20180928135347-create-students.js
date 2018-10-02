'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        primaryKey: true,
        default: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      lunchCode: {
        type: Sequelize.STRING
      },
      boyOrGirl: {
        type: Sequelize.BOOLEAN
      },
      peanut: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  }
};
