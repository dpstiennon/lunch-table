'use strict';
module.exports = (sequelize, DataTypes) => {
  const friends = sequelize.define('friends', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    layoutId: DataTypes.UUID,
    studentId: DataTypes.UUID,
    friendId: DataTypes.UUID
  }, {});
  friends.associate = function(models) {
    // associations can be defined here
    friends.hasOne(models.students, {foreignKey: ''})
    friends.belongsTo(models.students)
  };
  return friends;
};
