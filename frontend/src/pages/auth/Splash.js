import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <main className="splash-page">
      <div className="splash-content">

        {/* Logo */}
        <div className="splash-logo">
          <div className="splash-logo-shield">
            C
          </div>
        </div>

        {/* Application name */}
        <h1 className="splash-title">
          Clinstack
        </h1>

        <p className="splash-subtitle">
          School Management System
        </p>

        {/* Loading indicator */}
        <div className="splash-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </main>
  );
};

export default Splash;