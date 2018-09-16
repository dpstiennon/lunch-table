module.exports = function(sequelize, DataTypes) {
  const Student = sequelize.define('student', {
    firstName: {
      type: DataTypes.STRING,
      required: true
    },
    lastName: {
      type: DataTypes.STRING,
      required: true
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      required: true,
    },
    boyOrGirl: {
      type: DataTypes.BOOLEAN,
      required: true
    },
    peanut: {
      type: DataTypes.STRING,
      required: true
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    grade: {
      type: DataTypes.INTEGER,
      default: 5,
    }
  }, {timestamps: true});
  return Student;
};