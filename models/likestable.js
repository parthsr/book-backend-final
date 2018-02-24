

module.exports = (sequelize, DataTypes) => {
  let likestable = sequelize.define('likestable', {
    bookid: DataTypes.INTEGER,
    likestatus: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return likestable;
};
