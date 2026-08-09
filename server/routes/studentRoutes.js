const express = require("express");

const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
} = require("../controllers/studentController");

// ==========================================
// CREATE STUDENT
// POST /api/students
// ==========================================

router.post("/", createStudent);

// ==========================================
// GET ALL STUDENTS
// GET /api/students
// ==========================================

router.get("/", getStudents);

// ==========================================
// GET SINGLE STUDENT
// GET /api/students/:id
// ==========================================

router.get("/:id", getStudentById);

module.exports = router;