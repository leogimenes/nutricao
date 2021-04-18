const mongoose = require('mongoose');
const dbConfig = require('../config/db.config.js');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pacientes = require('../models/paciente')(mongoose);
// mongoose.connect('mongodb://localhost/nutrisystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });


module.exports = db;
