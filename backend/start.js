// require enviroment variables
require('dotenv').config()


// Connect to our Database and handle any bad connections
// PostgreSQL initialization here


// Import models


// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});