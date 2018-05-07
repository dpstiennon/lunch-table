const Sequelize = require('sequelize')
const sequelize = new Sequelize('tables', 'root', '', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: './tables.db'
});

const Layout = sequelize.define('layout', {
  name: {
    type: Sequelize.STRING,
    required: true
  },
  teacherId: {
    type: Sequelize.UUID
  },
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  }
}, {timestamps: true, force:true});
sequelize.sync()

exports = {
  sequelize: sequelize,
  Layout: Layout
}

//
// exports.database = async () => {
//   return await sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database:', err);
//     });
// }

