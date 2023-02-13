const express = require("express");
const EdgeSchema = require("../schema/EdgeSchema");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { boardId } = req.params;
    const edges = await EdgeSchema.find({ board: boardId });
    return res.status(200);
  } catch (error) {
    return res.status(400);
  }
});

// i found an issue with add new edge
//  the only solution i have found is develop a logic
//  in the client side to find if an edge added and send an API 
router.add("/", async (req, res) => {
  try {
    // Add new Edge
    return res.status(200);
  } catch (error) {
    return res.status(400);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const {edgeId} = req.params;
    // delete edge
    return res.status(200);
  } catch (error) {
    return res.status(400);
  }
});

module.exports = router;
