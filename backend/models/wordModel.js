const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  english: {
    type: String,
    required: [true, "An English word is required"],
    unique: true,
    trim: true,
  },
  turkish: {
    type: String,
    required: [true, "A Turkish word is required"],
    trim: true,
  },
  example: {
    type: String,
    trim: true,
  },
});

const Word = mongoose.model("Word", wordSchema);
module.exports = Word;
