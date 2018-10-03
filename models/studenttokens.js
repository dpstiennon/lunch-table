'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentTokens = sequelize.define('studentTokens', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    token: {
      type: DataTypes.UUID,
      default: DataTypes.UUIDV4,
    }
  }, {});
  studentTokens.associate = function(models) {
    return studentTokens.belongsTo(models.students)
  };
  return studentTokens;
};
