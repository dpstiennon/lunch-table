'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friends = sequelize.define('Friends', {
    student: DataTypes.UUID,
    friend: DataTypes.UUID
  }, {timestamps: true});
  Friends.associate = function(models) {
    // associations can be defined here
  };
  return Friends;
};
