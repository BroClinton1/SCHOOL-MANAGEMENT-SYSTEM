const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    className: {
      type: String,
      required: true,
      trim: true,
    },

    academicYear: {
      type: String,
      required: true,
      trim: true,
    },

    enrollmentDate: {
      type: Date,
      required: true,
    },

    guardianName: {
      type: String,
      trim: true,
    },

    guardianPhone: {
      type: String,
      trim: true,
    },

    guardianEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },

    guardianRelationship: {
      type: String,
      trim: true,
    },

    emergencyName: {
      type: String,
      trim: true,
    },

    emergencyPhone: {
      type: String,
      trim: true,
    },

    emergencyRelationship: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model(
  "Student",
  studentSchema
);

module.exports = Student;