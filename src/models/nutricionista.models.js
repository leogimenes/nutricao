const bcryptjs = require('bcryptjs');
module.exports = mongoose => {
  const NutricionistaSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    crn: {
      num: {
        type: Number,
        required: true,
        unique: true,
      },
      regiao: {
        type: Number,
        required: true,
      },
      provisorio: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    mail: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  );

  NutricionistaSchema.pre('save', async function(next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
  });

  const Nutricionista = mongoose.model("nutricionista", NutricionistaSchema);

  return Nutricionista;
}


