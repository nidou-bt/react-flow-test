const express = require("express");
const DataTaskSchema = require("../schema/DataTaskSchema");
const EdgeSchema = require("../schema/EdgeSchema");
const NodeTaskSchema = require("../schema/NodeTaskSchema");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { boardId } = req.params;
    const nodeTasks = await NodeTaskSchema.find({ board: boardId });
    const dataTasks = await DataTaskSchema.find({ board: boardId });
    const edges = await EdgeSchema.find({ board: boardId });
    return res.status(200).json({ nodeTasks, dataTasks, edges });
  } catch (error) {
    return res.status(400);
  }
});

module.exports = router;
