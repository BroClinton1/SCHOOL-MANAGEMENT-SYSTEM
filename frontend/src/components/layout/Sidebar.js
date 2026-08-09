import React from "react";
import { NavLink } from "react-router-dom";

import "./DashboardLayout.css";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: "⌂",
    },
    {
      label: "Students",
      path: "/admin/students",
      icon: "◉",
    },
    {
      label: "Teachers",
      path: "/admin/teachers",
      icon: "◈",
    },
    {
      label: "Classes",
      path: "/admin/classes",
      icon: "▦",
    },
    {
      label: "Attendance",
      path: "/admin/attendance",
      icon: "✓",
    },
    {
      label: "Examinations",
      path: "/admin/examinations",
      icon: "▤",
    },
    {
      label: "Finance",
      path: "/admin/finance",
      icon: "$",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            E
          </div>

          <div className="sidebar-brand-text">
            <h2>EduSmart</h2>
            <span>School Management</span>
          </div>

          <button
            type="button"
            className="sidebar-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-navigation">
          <p className="sidebar-section-title">
            MAIN MENU
          </p>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${
                  isActive ? "sidebar-link-active" : ""
                }`
              }
              onClick={onClose}
            >
              <span className="sidebar-link-icon">
                {item.icon}
              </span>

              <span className="sidebar-link-label">
                {item.label}
              </span>
            </NavLink>
          ))}

          <p className="sidebar-section-title sidebar-settings-title">
            SYSTEM
          </p>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `sidebar-link ${
                isActive ? "sidebar-link-active" : ""
              }`
            }
            onClick={onClose}
          >
            <span className="sidebar-link-icon">
              ⚙
            </span>

            <span className="sidebar-link-label">
              Settings
            </span>
          </NavLink>
        </nav>

        {/* Bottom */}
        <div className="sidebar-bottom">
          <button
            type="button"
            className="sidebar-logout"
            onClick={() => {
              console.log("Logout clicked");
            }}
          >
            <span className="sidebar-link-icon">
              ↪
            </span>

            <span className="sidebar-link-label">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;