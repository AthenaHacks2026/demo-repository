const express = require("express");
const router = express.Router();

const {
  createSwapRequest,
  getAllSwapRequests,
  getSwapRequestById,
  updateSwapRequest,
  deleteSwapRequest,
} = require("../controllers/swapRequestController");

router.post("/", createSwapRequest);
router.get("/", getAllSwapRequests);
router.get("/:id", getSwapRequestById);
router.put("/:id", updateSwapRequest);
router.delete("/:id", deleteSwapRequest);

module.exports = router;