const express = require("express");
const NodeTaskSchema = require("../schema/NodeTaskSchema");

const router = express.Router();

router.add("/", async (req, res) => {
  try {
    const body = req.body;
    const newNode = NodeTaskSchema({ ...body });
    await newNode.save();
    return res.status(200);
  } catch (error) {
    return res.status(400);
  }
});
router.update("/", async(req, res) => {
  try {
    const body = req.body;
    await NodeTaskSchema.updateOne(body);

    return res.status(200);
  } catch (error) {
    return res.status(400);
  }
});
router.delete("/id", async (req, res) => {
  try {
    const { id } = req.params;
    const newNode = NodeTaskSchema.deleteOne({ id });
    return res.status(200);
  } catch (error) {
    return res.status(400);
  }
});

module.exports = router;
