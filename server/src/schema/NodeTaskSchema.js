const mongoose = require("mongoose");
const { Schema } = mongoose;

const nodeTaskSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  },
  dataTaskId: {
    type: Schema.Types.ObjectId,
    ref: "DataTask",
  },
  type: {
    enum: [
      "TTaskNode",
      "TParallelOperator",
      "TSubTaskOperator",
      "TExlusiveOperator",
    ],
    default: "TTaskNode",
  },
});

module.exports = NodeTask = mongoose.model("NodeTask", nodeTaskSchema);
