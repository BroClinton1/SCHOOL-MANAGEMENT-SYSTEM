import React from "react";

import "./DashboardLayout.css";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="dashboard-topbar">

      {/* Mobile menu */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      {/* Page heading */}
      <div className="topbar-heading">
        <h1>Dashboard</h1>

        <p>
          Welcome back to EduSmart
        </p>
      </div>

      {/* Right side */}
      <div className="topbar-actions">

        {/* Search */}
        <div className="topbar-search">
          <span>⌕</span>

          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Notifications"
        >
          🔔

          <span className="notification-dot"></span>
        </button>

        {/* User */}
        <button
          type="button"
          className="topbar-user"
        >
          <span className="topbar-avatar">
            A
          </span>

          <span className="topbar-user-info">
            <strong>Admin User</strong>
            <small>Administrator</small>
          </span>

          <span className="topbar-user-arrow">
            ▾
          </span>
        </button>

      </div>
    </header>
  );
};

export default Topbar;