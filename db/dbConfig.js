const Sequelize = require('sequelize')
const sequelize = new Sequelize('tables', '', '', {
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


exports.database = async () => {
  let result = ''
  await sequelize
    .authenticate()
    .then(() => {
      result = 'dude, it worked!'
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  return result
}

