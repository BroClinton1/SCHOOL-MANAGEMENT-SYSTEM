const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// ==========================================
// DATABASE
// ==========================================

connectDB();

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "School Management System API is running.",
  });
});

// ==========================================
// STUDENT API
// ==========================================

app.use(
  "/api/students",
  studentRoutes
);

// ==========================================
// 404 HANDLER
// ==========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});