module.exports = app => {
  const pacientes = require('../controllers/paciente.controller');

  var router = require('express').Router();

  // Register a new Paciente
  router.post("/cadastro", pacientes.create);

  // Retrieve all Tutorials
  router.get("/", pacientes.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", pacientes.findOne);

  // Update a Tutorial with id
  router.put("/:id", pacientes.update);

  // Delete a Tutorial with id
  router.delete("/:id", pacientes.delete);

  // Create a new Tutorial
  router.delete("/", pacientes.deleteAll);

  app.use('/pacientes', router);
}
