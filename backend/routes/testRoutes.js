const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("SkillSwap API running");
});

router.get("/test-db", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send("MongoDB is working");
  } catch (error) {
    res.status(500).send("MongoDB is not working");
  }
});

module.exports = router;