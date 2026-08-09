import React from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <DashboardLayout>

      <div className="admin-dashboard">

        {/* Page Header */}
        <div className="dashboard-page-header">
          <div>
            <h2>Overview</h2>

            <p>
              Here's what's happening in your school today.
            </p>
          </div>

          <button
            type="button"
            className="dashboard-primary-button"
          >
            + Add Student
          </button>
        </div>

        {/* Statistics */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-card-top">
              <span>Total Students</span>

              <span className="stat-icon">
                ◉
              </span>
            </div>

            <h3>0</h3>

            <p>
              Students registered
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span>Total Teachers</span>

              <span className="stat-icon">
                ◈
              </span>
            </div>

            <h3>0</h3>

            <p>
              Active teachers
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span>Total Classes</span>

              <span className="stat-icon">
                ▦
              </span>
            </div>

            <h3>0</h3>

            <p>
              Active classes
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span>Attendance</span>

              <span className="stat-icon">
                ✓
              </span>
            </div>

            <h3>0%</h3>

            <p>
              Today's attendance
            </p>
          </div>

        </div>

        {/* Lower Section */}
        <div className="dashboard-grid">

          <section className="dashboard-panel">

            <div className="panel-header">
              <div>
                <h3>Recent Students</h3>

                <p>
                  Recently registered students
                </p>
              </div>

              <button
                type="button"
                className="panel-link"
              >
                View All
              </button>
            </div>

            <div className="empty-state">
              <div className="empty-state-icon">
                ◉
              </div>

              <h4>No students yet</h4>

              <p>
                Student records will appear here
                once they are added.
              </p>
            </div>

          </section>

          <section className="dashboard-panel">

            <div className="panel-header">
              <div>
                <h3>Today's Attendance</h3>

                <p>
                  Attendance overview
                </p>
              </div>

              <button
                type="button"
                className="panel-link"
              >
                View Details
              </button>
            </div>

            <div className="empty-state">
              <div className="empty-state-icon">
                ✓
              </div>

              <h4>No attendance records</h4>

              <p>
                Today's attendance data will
                appear here.
              </p>
            </div>

          </section>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default AdminDashboard;