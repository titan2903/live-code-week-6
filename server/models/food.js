'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Food extends Model { }

  Food.init({
    title: { type: DataTypes.STRING },
    price: DataTypes.INTEGER,
    ingredients: DataTypes.STRING,
    tag: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, { sequelize })
  // const Food = sequelize.define('Food', {
  // }, {});
  Food.associate = function (models) {
    // associations can be defined here
  };
  return Food;
};