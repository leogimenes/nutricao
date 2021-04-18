const express = require('express');

const pacientes = require('./paciente.controller')

const router = express.Router();

router.post('/cadastro', async (req, res) => {
  pacientes.create();
});

module.exports = app => app.use('/auth', router);
