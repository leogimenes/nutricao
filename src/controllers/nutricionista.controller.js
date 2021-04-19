const db = require("../database/index");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const Nutricionista = db.nutricionista;

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

exports.create = async (req, res) => {
  if(!req.body.firstName) {
    res.status(400).send({ message: 'Content can not be empty! '});
    return;
  }
  const { mail } = req.body;
  try {
    if( await Nutricionista.findOne({ mail }))
      return res.status(400).send({ error: 'User already exists' });

    const nutricionista = await Nutricionista.create(req.body);

    nutricionista.password = undefined;

    return res.send({
      nutricionista,
      token: generateToken({ id: nutricionista.id }),
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Registration failed' });
  }
};

exports.authenticate = async (req, res) => {
  const { mail, password } = req.body;

  const nutricionista = await Nutricionista.findOne({ mail }).select('+password');

  if(!nutricionista)
    return res.status(400).send({ error: 'Nutricionista not found' });

  if(!await bcryptjs.compare(password, nutricionista.password))
    return res.status(400).send({ error: 'Invalid password'});

  nutricionista.password = undefined;

  res.send({
    nutricionista,
    token: generateToken({ id: nutricionista.id })
  });
}
