const mongoose = require("mongoose");
const { Schema } = mongoose;

const edgeSchema = new Schema({
  source: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  }
});

module.exports = Edge = mongoose.model("Edge", edgeSchema);