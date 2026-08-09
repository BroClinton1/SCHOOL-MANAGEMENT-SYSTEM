import React from "react";
import "./Splash.css";

const Splash = () => {
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