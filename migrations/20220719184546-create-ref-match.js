"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ref_matches", {
      match_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      match_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_match: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      match_requester: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      potential_match: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ref_matches");
  },
};
