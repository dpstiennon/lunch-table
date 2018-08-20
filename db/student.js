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
      type: DataTypes.STRING,
      required: true
    },
    peanuts: {
      type: DataTypes.INTEGER,
      default: 0
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, {timestamps: true});
  return Student;
};