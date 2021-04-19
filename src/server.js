const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./database');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  })

require('./routes/paciente.routes')(app);
require('./routes/nutricionista.routes')(app);

app.get("/", (req, res) => {
  res.json({ message: "Hello"})
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Servidor rodando na porta 3000'))
