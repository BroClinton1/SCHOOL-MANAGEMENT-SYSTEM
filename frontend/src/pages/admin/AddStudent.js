import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";

import "./AddStudent.css";

const AddStudent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",

    studentId: "",
    className: "",
    academicYear: "",
    enrollmentDate: "",

    guardianName: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianRelationship: "",

    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender.";
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required.";
    }

    if (!formData.className) {
      newErrors.className = "Please select a class.";
    }

    if (!formData.academicYear) {
      newErrors.academicYear = "Academic year is required.";
    }

    if (!formData.enrollmentDate) {
      newErrors.enrollmentDate =
        "Enrollment date is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Student form submitted:", formData);

    /*
      Backend connection will be added later:

      POST /api/students

      The form data will be sent to Express,
      then saved to MongoDB through Mongoose.
    */

    alert("Student form is ready for backend integration.");
  };

  return (
    <DashboardLayout>

      <div className="add-student-page">

        {/* Page Header */}
        <div className="add-student-page-header">

          <div>
            <button
              type="button"
              className="back-button"
              onClick={() => navigate("/admin/students")}
            >
              ← Back to Students
            </button>

            <h2>Add Student</h2>

            <p>
              Create a new student record.
            </p>
          </div>

        </div>

        <form
          className="student-form"
          onSubmit={handleSubmit}
        >

          {/* ======================================
              PERSONAL INFORMATION
          ======================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <div>
                <h3>Personal Information</h3>

                <p>
                  Enter the student's basic personal details.
                </p>
              </div>
            </div>

            <div className="form-grid">

              {/* First Name */}
              <div className="form-group">

                <label htmlFor="firstName">
                  First Name
                  <span>*</span>
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />

                {errors.firstName && (
                  <small className="form-error">
                    {errors.firstName}
                  </small>
                )}

              </div>

              {/* Last Name */}
              <div className="form-group">

                <label htmlFor="lastName">
                  Last Name
                  <span>*</span>
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />

                {errors.lastName && (
                  <small className="form-error">
                    {errors.lastName}
                  </small>
                )}

              </div>

              {/* Date of Birth */}
              <div className="form-group">

                <label htmlFor="dateOfBirth">
                  Date of Birth
                  <span>*</span>
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />

                {errors.dateOfBirth && (
                  <small className="form-error">
                    {errors.dateOfBirth}
                  </small>
                )}

              </div>

              {/* Gender */}
              <div className="form-group">

                <label htmlFor="gender">
                  Gender
                  <span>*</span>
                </label>

                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">
                    Select gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

                {errors.gender && (
                  <small className="form-error">
                    {errors.gender}
                  </small>
                )}

              </div>

              {/* Email */}
              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@example.com"
                />

              </div>

              {/* Phone */}
              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

              </div>

              {/* Address */}
              <div className="form-group form-group-full">

                <label htmlFor="address">
                  Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter residential address"
                  rows="3"
                />

              </div>

            </div>

          </section>

          {/* ======================================
              ACADEMIC INFORMATION
          ======================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <div>
                <h3>Academic Information</h3>

                <p>
                  Assign the student to the appropriate
                  academic class.
                </p>
              </div>
            </div>

            <div className="form-grid">

              {/* Student ID */}
              <div className="form-group">

                <label htmlFor="studentId">
                  Student ID
                  <span>*</span>
                </label>

                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="Enter student ID"
                />

                {errors.studentId && (
                  <small className="form-error">
                    {errors.studentId}
                  </small>
                )}

              </div>

              {/* Class */}
              <div className="form-group">

                <label htmlFor="className">
                  Class
                  <span>*</span>
                </label>

                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                >
                  <option value="">
                    Select class
                  </option>

                  <option value="form-1">
                    Form 1
                  </option>

                  <option value="form-2">
                    Form 2
                  </option>

                  <option value="form-3">
                    Form 3
                  </option>

                  <option value="form-4">
                    Form 4
                  </option>

                  <option value="form-5">
                    Form 5
                  </option>

                  <option value="lower-sixth">
                    Lower Sixth
                  </option>

                  <option value="upper-sixth">
                    Upper Sixth
                  </option>
                </select>

                {errors.className && (
                  <small className="form-error">
                    {errors.className}
                  </small>
                )}

              </div>

              {/* Academic Year */}
              <div className="form-group">

                <label htmlFor="academicYear">
                  Academic Year
                  <span>*</span>
                </label>

                <select
                  id="academicYear"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                >
                  <option value="">
                    Select academic year
                  </option>

                  <option value="2026-2027">
                    2026 / 2027
                  </option>

                  <option value="2027-2028">
                    2027 / 2028
                  </option>
                </select>

                {errors.academicYear && (
                  <small className="form-error">
                    {errors.academicYear}
                  </small>
                )}

              </div>

              {/* Enrollment Date */}
              <div className="form-group">

                <label htmlFor="enrollmentDate">
                  Enrollment Date
                  <span>*</span>
                </label>

                <input
                  id="enrollmentDate"
                  name="enrollmentDate"
                  type="date"
                  value={formData.enrollmentDate}
                  onChange={handleChange}
                />

                {errors.enrollmentDate && (
                  <small className="form-error">
                    {errors.enrollmentDate}
                  </small>
                )}

              </div>

            </div>

          </section>

          {/* ======================================
              PARENT / GUARDIAN
          ======================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <div>
                <h3>Parent / Guardian Information</h3>

                <p>
                  Add the student's parent or guardian
                  contact information.
                </p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group">

                <label htmlFor="guardianName">
                  Full Name
                </label>

                <input
                  id="guardianName"
                  name="guardianName"
                  type="text"
                  value={formData.guardianName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />

              </div>

              <div className="form-group">

                <label htmlFor="guardianPhone">
                  Phone Number
                </label>

                <input
                  id="guardianPhone"
                  name="guardianPhone"
                  type="tel"
                  value={formData.guardianPhone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

              </div>

              <div className="form-group">

                <label htmlFor="guardianEmail">
                  Email Address
                </label>

                <input
                  id="guardianEmail"
                  name="guardianEmail"
                  type="email"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                  placeholder="guardian@example.com"
                />

              </div>

              <div className="form-group">

                <label htmlFor="guardianRelationship">
                  Relationship
                </label>

                <select
                  id="guardianRelationship"
                  name="guardianRelationship"
                  value={formData.guardianRelationship}
                  onChange={handleChange}
                >
                  <option value="">
                    Select relationship
                  </option>

                  <option value="father">
                    Father
                  </option>

                  <option value="mother">
                    Mother
                  </option>

                  <option value="guardian">
                    Guardian
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

              </div>

            </div>

          </section>

          {/* ======================================
              EMERGENCY CONTACT
          ======================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <div>
                <h3>Emergency Contact</h3>

                <p>
                  Provide a contact person for emergencies.
                </p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group">

                <label htmlFor="emergencyName">
                  Full Name
                </label>

                <input
                  id="emergencyName"
                  name="emergencyName"
                  type="text"
                  value={formData.emergencyName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />

              </div>

              <div className="form-group">

                <label htmlFor="emergencyPhone">
                  Phone Number
                </label>

                <input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

              </div>

              <div className="form-group">

                <label htmlFor="emergencyRelationship">
                  Relationship
                </label>

                <input
                  id="emergencyRelationship"
                  name="emergencyRelationship"
                  type="text"
                  value={formData.emergencyRelationship}
                  onChange={handleChange}
                  placeholder="e.g. Uncle, Aunt, Brother"
                />

              </div>

            </div>

          </section>

          {/* ======================================
              FORM ACTIONS
          ======================================= */}

          <div className="student-form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() =>
                navigate("/admin/students")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-student-button"
            >
              Save Student
            </button>

          </div>

        </form>

      </div>

    </DashboardLayout>
  );
};

export default AddStudent;