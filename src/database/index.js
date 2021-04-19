const mongoose = require('mongoose');
const dbConfig = require('../config/db.config.js');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pacientes = require('../models/paciente')(mongoose);
db.nutricionista = require('../models/nutricionista.models')(mongoose);

module.exports = db;
