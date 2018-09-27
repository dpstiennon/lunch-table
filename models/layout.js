module.exports = function(sequelize, DataTypes) {
  const Layout = sequelize.define('layout', {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    teacherId: {
      type: DataTypes.UUID
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, {timestamps: true});
  return Layout;
};