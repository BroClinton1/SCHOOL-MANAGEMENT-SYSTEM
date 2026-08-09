import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login form submitted:", {
      ...formData,
      rememberMe,
    });

    // Temporary navigation.
    // Real authentication will be connected later.
    navigate("/admin/dashboard");
  };

  return (
    <main className="login-page">
      <section className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-shield">
            C
          </div>
        </div>

        {/* Heading */}
        <div className="login-header">
          <h1>Welcome Back</h1>

          <p>
            Sign in to your EduSmart account
          </p>
        </div>

        {/* Login form */}
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

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

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <div className="password-input-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword((previousValue) => !previousValue)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Remember + Forgot password */}
          <div className="login-options">

            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
              />

              <span>
                Remember me
              </span>
            </label>

            <Link
              to="/forgot-password"
              className="forgot-password"
            >
              Forgot password?
            </Link>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

        </form>

        {/* Register */}
        <div className="register-prompt">

          <span>
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="register-link"
          >
            Create an account
          </Link>

        </div>

      </section>
    </main>
  );
};

export default Login;