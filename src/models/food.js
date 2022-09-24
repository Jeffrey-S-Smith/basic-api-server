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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSpicy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};

