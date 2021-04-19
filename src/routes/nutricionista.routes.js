module.exports = app => {
  const nutricionista = require('../controllers/nutricionista.controller');

  var router = require('express').Router();

  //Create a new Nutricionista
  router.post("/register", nutricionista.create);

  router.post("/authenticate", nutricionista.authenticate);

  app.use("/nutricionista", router);
}
