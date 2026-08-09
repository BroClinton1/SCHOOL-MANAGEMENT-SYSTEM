
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Registration submitted:", formData);

    // Temporary navigation.
    // Real registration will be connected to the backend later.
    navigate("/login");
  };

  return (
    <main className="register-page">
      <section className="register-card">

        {/* Logo */}
        <div className="register-logo">
          <div className="register-logo-shield">
            C
          </div>
        </div>

        {/* Header */}
        <div className="register-header">
          <h1>Create Your Account</h1>

          <p>
            Join EduSmart School Management System
          </p>
        </div>

        {/* Progress */}
        <div className="register-progress">

          <div
            className={`progress-step ${
              step >= 1 ? "active" : ""
            }`}
          >
            <span>1</span>
            <small>Personal</small>
          </div>

          <div
            className={`progress-line ${
              step >= 2 ? "active" : ""
            }`}
          ></div>

          <div
            className={`progress-step ${
              step >= 2 ? "active" : ""
            }`}
          >
            <span>2</span>
            <small>Account</small>
          </div>

        </div>

        {/* Step 1 */}
        {step === 1 && (
          <form
            className="register-form"
            onSubmit={handleNext}
          >
            <div className="register-step-title">
              <h2>Personal Information</h2>

              <p>
                Tell us a little about yourself.
              </p>
            </div>

            {/* First + Last Name */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="firstName">
                  First Name
                </label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </div>

            <button
              type="submit"
              className="register-button"
            >
              Continue
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form
            className="register-form"
            onSubmit={handleSubmit}
          >
            <div className="register-step-title">
              <h2>Account Information</h2>

              <p>
                Set up your account credentials.
              </p>
            </div>

            {/* Role */}
            <div className="form-group">
              <label htmlFor="role">
                Account Type
              </label>

              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="student">
                  Student
                </option>

                <option value="parent">
                  Parent
                </option>

                <option value="teacher">
                  Teacher
                </option>
              </select>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            {/* Buttons */}
            <div className="register-actions">

              <button
                type="button"
                className="back-button"
                onClick={handleBack}
              >
                Back
              </button>

              <button
                type="submit"
                className="register-button"
              >
                Create Account
              </button>

            </div>
          </form>
        )}

        {/* Login */}
        <div className="login-prompt">

          <span>
            Already have an account?
          </span>

          <Link
            to="/login"
            className="login-link"
          >
            Sign in
          </Link>

        </div>

      </section>
    </main>
  );
};

export default Register;