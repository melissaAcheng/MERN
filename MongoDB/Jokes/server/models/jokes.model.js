// Create a JokeSchema and export the mongoose.model("joke", JokeSchema)
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
    },
    punchline: {
      type: String,
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
