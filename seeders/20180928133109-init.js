'use strict'
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teachers', [{
      firstName: 'Amy',
      lastName: 'Stiennon',
      username: 'astiennon',
      updatedAt: new Date(),
      createdAt: new Date(),
      id: uuidv4()
    }, {
      firstName: 'Lane',
      lastName: 'Benzick',
      username: 'lbenzick',
      updatedAt: new Date(),
      createdAt: new Date(),
      id: uuidv4()
    },
    {
      firstName: 'David',
      lastName: 'Stiennon',
      username: 'dstiennon',
      updatedAt: new Date(),
      createdAt: new Date(),
      id: uuidv4()
    }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teachers', null, {})
  }
}
