const db = require('../database');
const Paciente = db.pacientes;

//Create and save a new Paciente
exports.create = async (req, res) => {
  if(!req.body.firstName) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  try {
    const paciente = await Paciente.create(req.body);

    return res.send({ paciente });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Registration failed' });
  }
};

//Retrieve all Pacientes from the database
exports.findAll = async (req, res) => {
  const firstName = req.query.name;
  var condition = firstName ? { firstName: {$regex: new RegExp(firstName), $options: "i"} } : {};
  try {
    const paciente = await Paciente.find(condition);

    return res.send({ paciente });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: 'Collection not found' })
  }
};

//Find a single Paciente with an id
exports.findOne = async (req, res) => {
  const { id } = req.params.id;
  try {
    const paciente = await Paciente.find({ id });

    if(!paciente)
      res.status(404).send({ message: `Paciente ${ id } not found.`})

    return res.send({ paciente });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: `Error retrieving Paciente with id= ${ id }` })
  }
};

//Update a Paciente by the id in the request
exports.update = async (req, res) => {
  try {
    const paciente = await Paciente.update(req.body);

    return res.send({ paciente });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: 'Could not update' })
  }
};

//Delete a Paciente with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const paciente = await Paciente.delete(req.body);

    return res.send({ paciente });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: 'Could not delete paciente' })
  }
};

//Delete all Pacientes from the database
exports.deleteAll = async (req, res) => {
  try {
    const paciente = await Paciente.findAll(req.body);

    return res.send({ paciente });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: 'Could not delete pacientes' })
  }
};
