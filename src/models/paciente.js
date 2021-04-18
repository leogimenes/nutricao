module.exports = mongoose => {
  const Paciente = mongoose.model( "pacientes", mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    mail: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    bloodType: {
      type: String,
      required: false,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      num: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
        uppercase: true,
      },
      zip: {
        type: Number,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  ));

  return Paciente;
}
