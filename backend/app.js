const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/testRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const swapRequestRoutes = require("./routes/swapRequestRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", testRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/swaps", swapRequestRoutes);

module.exports = app;