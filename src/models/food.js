'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('food', {
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    foodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};