'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    lunchCode: DataTypes.STRING,
    boyOrGirl: DataTypes.BOOLEAN,
    peanut: DataTypes.STRING,
    grade: DataTypes.INTEGER,
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, {});
  students.associate = function(models) {
    return students.hasMany(models.studentTokens)
  };
  return students;
};
