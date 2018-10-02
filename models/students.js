'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    lunchcode: DataTypes.STRING,
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
    // associations can be defined here
  };
  return students;
};
