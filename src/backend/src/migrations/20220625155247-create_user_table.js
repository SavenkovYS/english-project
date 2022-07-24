'use strict';

const DataTypes = require('sequelize').DataTypes;

module.exports = {
  async up (queryInterface) {
    return queryInterface.createTable('user', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      login: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      refresh_token: {
        type: DataTypes.STRING
      }
    })
  },

  async down (queryInterface) {
    return queryInterface.dropTable('user');
  }
};
