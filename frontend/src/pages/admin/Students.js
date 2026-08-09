import React from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";

import "./Students.css";

const Students = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>

      <div className="students-page">

        {/* Page Header */}
        <div className="students-page-header">

          <div>
            <h2>Students</h2>

            <p>
              Manage student records and information.
            </p>
          </div>

          <button
            type="button"
            className="students-add-button"
            onClick={() => navigate("/admin/students/add")}
          >
            <span>+</span>
            Add Student
          </button>

        </div>

        {/* Students Content */}
        <section className="students-card">

          {/* Toolbar */}
          <div className="students-toolbar">

            <div className="students-search">

              <span className="students-search-icon">
                ⌕
              </span>

              <input
                type="search"
                placeholder="Search students..."
                aria-label="Search students"
              />

            </div>

            <div className="students-filters">

              <select
                defaultValue=""
                aria-label="Filter by class"
              >
                <option value="" disabled>
                  Filter by class
                </option>

                <option value="all">
                  All Classes
                </option>
              </select>

              <select
                defaultValue=""
                aria-label="Filter by status"
              >
                <option value="" disabled>
                  Filter by status
                </option>

                <option value="all">
                  All Status
                </option>

                <option value="active">
                  Active
                </option>

                <option value="inactive">
                  Inactive
                </option>
              </select>

            </div>

          </div>

          {/* Table */}
          <div className="students-table-container">

            <table className="students-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Student ID</th>
                  <th>Class</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* 
                  Student records will be loaded from MongoDB
                  when the backend API is connected.
                */}
              </tbody>

            </table>

            {/* Empty State */}
            <div className="students-empty-state">

              <div className="students-empty-icon">
                ◉
              </div>

              <h3>No students found</h3>

              <p>
                There are currently no student records.
                Add your first student to get started.
              </p>

              <button
                type="button"
                className="students-empty-button"
                onClick={() =>
                  navigate("/admin/students/add")
                }
              >
                + Add Student
              </button>

            </div>

          </div>

        </section>

      </div>

    </DashboardLayout>
  );
};

export default Students;