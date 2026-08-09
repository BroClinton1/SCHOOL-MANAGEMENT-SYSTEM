import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    console.log("Password reset requested for:", email);

    // Temporary frontend state.
    // Real password reset will be connected to the backend later.
    setSubmitted(true);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <main className="forgot-password-page">
      <section className="forgot-password-card">

        {/* Logo */}
        <div className="forgot-password-logo">
          <div className="forgot-password-logo-shield">
            C
          </div>
        </div>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="forgot-password-header">
              <h1>Forgot Password?</h1>

              <p>
                Don't worry. Enter your email address and
                we'll help you reset your password.
              </p>
            </div>

            {/* Form */}
            <form
              className="forgot-password-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="reset-email">
                  Email Address
                </label>

                <input
                  id="reset-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  autoComplete="email"
                  required
                />
              </div>

              <button
                type="submit"
                className="reset-button"
              >
                Send Reset Link
              </button>
            </form>

            {/* Back to Login */}
            <Link
              to="/login"
              className="back-login-link"
            >
              ← Back to Login
            </Link>
          </>
        ) : (
          <>
            {/* Success icon */}
            <div className="reset-success-icon">
              ✓
            </div>

            {/* Success header */}
            <div className="forgot-password-header">
              <h1>Check Your Email</h1>

              <p>
                If an account exists for{" "}
                <strong>{email}</strong>, we've sent
                instructions to reset your password.
              </p>
            </div>

            {/* Email notice */}
            <div className="email-notice">
              <p>
                Didn't receive the email?
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="try-again-button"
              >
                Try another email
              </button>
            </div>

            {/* Login */}
            <button
              type="button"
              className="reset-button"
              onClick={handleBackToLogin}
            >
              Back to Login
            </button>
          </>
        )}

      </section>
    </main>
  );
};

export default ForgotPassword;