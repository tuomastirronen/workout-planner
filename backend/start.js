// require enviroment variables
require('dotenv').config()
const Sequelize = require('sequelize')


// Connect to our Database and handle any bad connections
// PostgreSQL initialization here

// const db = new Sequelize(
//   process.env.DATABASE_NAME,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   })

// // test PostgreSQL connection via sequelize

// try {
//   const dbConnection = db.authenticate()
//   console.log('Connection has been established successfully.')
// } catch(err) {
//   console.error('Unable to connect to the database:', err)
// }

// Import models
require('./server/models/index')
//require('./models/Routine')


// Start our app!
const app = require('./app')

app.set('port', process.env.PORT || 3001)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})