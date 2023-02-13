const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataTaskSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  },
  nodeId: {
    type: Schema.Types.ObjectId,
    ref: "NodeTask",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = DataTask = mongoose.model("DataTask", dataTaskSchema);
