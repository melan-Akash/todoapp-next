const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Fix: use mongoose.models to avoid overwrite issues
const Todomodel = mongoose.models.todo || mongoose.model('todo', Schema);

// Fix: correct export syntax for CommonJS
module.exports = Todomodel;
