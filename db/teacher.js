module.exports = function(sequelize, DataTypes) {
  const Teacher = sequelize.define('teacher', {
    firstName: {
      type: DataTypes.STRING,
      required: true
    },
    lastName: {
      type: DataTypes.STRING,
      required: true
    },
    username: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, {timestamps: true, force: true});
  return Teacher;
};