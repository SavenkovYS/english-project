'use strict';

const DataTypes = require('sequelize').DataTypes;

module.exports = {
  up(queryInterface) {
    return queryInterface.createTable('question', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      body: {
        type: DataTypes.STRING
      },
      answers: {
        type: DataTypes.JSON
      },
      description: {
        type: DataTypes.STRING
      }
    })
  },

  down(queryInterface) {
    return queryInterface.dropTable('question');
  }
};
