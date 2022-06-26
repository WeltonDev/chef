'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(
      "products", "category_id", {
         type: Sequelize.INTEGER,
          references: { model: 'category', key: 'id' },
          allowNull: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn("category");
  }
};
