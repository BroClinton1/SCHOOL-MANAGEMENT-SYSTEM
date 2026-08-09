const Student = require("../models/Student");

// ==========================================
// CREATE STUDENT
// ==========================================

const createStudent = async (req, res) => {
  try {
    const studentData = req.body;

    // Check if Student ID already exists
    const existingStudent = await Student.findOne({
      studentId: studentData.studentId,
    });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student ID already exists.",
      });
    }

    // Create student
    const student = await Student.create(
      studentData
    );

    return res.status(201).json({
      success: true,
      message: "Student created successfully.",
      student,
    });
  } catch (error) {
    console.error(
      "Create student error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to create student.",
      error: error.message,
    });
  }
};

// ==========================================
// GET ALL STUDENTS
// ==========================================

const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error(
      "Get students error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch students.",
      error: error.message,
    });
  }
};

// ==========================================
// GET STUDENT BY ID
// ==========================================

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(
      req.params.id
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    console.error(
      "Get student error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch student.",
      error: error.message,
    });
  }
};

// ==========================================
// EXPORT CONTROLLERS
// ==========================================

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
};