'use strict';
module.exports = (sequelize, DataTypes) => {
  var booksdb = sequelize.define('booksdb', {
    author: DataTypes.STRING,
    bookid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return booksdb;
};