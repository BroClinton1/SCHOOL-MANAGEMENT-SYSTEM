import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getStudents } from "../../services/studentService";

import DashboardLayout from "../../components/layout/DashboardLayout";

import "./Students.css";

const Students = () => {
  const navigate = useNavigate();

  // ==========================================
  // STATE
  // ==========================================

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [classFilter, setClassFilter] =
    useState("All");

  // ==========================================
  // FETCH STUDENTS
  // ==========================================

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getStudents();

      setStudents(response.students || []);
    } catch (err) {
      console.error(
        "Failed to fetch students:",
        err
      );

      setError(
        err.response?.data?.message ||
          "Failed to load students."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD STUDENTS WHEN PAGE OPENS
  // ==========================================

  useEffect(() => {
    fetchStudents();
  }, []);

  // ==========================================
  // GET UNIQUE CLASSES
  // ==========================================

  const classes = useMemo(() => {
    const classNames = students
      .map(
        (student) =>
          student.className ||
          student.class
      )
      .filter(Boolean);

    return [
      ...new Set(classNames),
    ];
  }, [students]);

  // ==========================================
  // FILTER STUDENTS
  // ==========================================

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const fullName = `
        ${student.firstName || ""}
        ${student.lastName || ""}
      `
        .toLowerCase()
        .trim();

      const studentId = (
        student.studentId || ""
      ).toLowerCase();

      const email = (
        student.email || ""
      ).toLowerCase();

      const search = searchTerm
        .toLowerCase()
        .trim();

      const matchesSearch =
        fullName.includes(search) ||
        studentId.includes(search) ||
        email.includes(search);

    const studentStatus = (
  student.status || "active"
).toLowerCase();

const selectedStatus =
  statusFilter.toLowerCase();

const matchesStatus =
  statusFilter === "All" ||
  studentStatus === selectedStatus;
      const studentClass =
        student.className ||
        student.class ||
        "";

      const matchesClass =
        classFilter === "All" ||
        studentClass === classFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesClass
      );
    });
  }, [
    students,
    searchTerm,
    statusFilter,
    classFilter,
  ]);

  // ==========================================
  // DELETE STUDENT
  // ==========================================

  const handleDelete = async (studentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
      return;
    }

    try {
      // Delete API will be added in the next step.
      console.log(
        "Student selected for deletion:",
        studentId
      );

      alert(
        "Delete functionality will be connected in the next step."
      );
    } catch (err) {
      console.error(
        "Delete student error:",
        err
      );
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <DashboardLayout>
        <div className="students-page">

          <div className="students-loading">
            Loading students...
          </div>

        </div>
      </DashboardLayout>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error) {
    return (
      <DashboardLayout>
        <div className="students-page">

          <div className="students-error">

            <p>{error}</p>

            <button
              type="button"
              onClick={fetchStudents}
            >
              Try Again
            </button>

          </div>

        </div>
      </DashboardLayout>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <DashboardLayout>

      <div className="students-page">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="students-header">

          <div>
            <h1>
              Students
            </h1>

            <p>
              Manage students in your school.
            </p>
          </div>

          <button
            type="button"
            className="add-student-button"
            onClick={() =>
              navigate(
                "/admin/students/add"
              )
            }
          >
            + Add Student
          </button>

        </div>

        {/* =====================================
            SUMMARY
        ====================================== */}

        <div className="students-summary">

          <div className="students-count-card">

            <span>
              Total Students
            </span>

            <strong>
              {students.length}
            </strong>

          </div>

          <div className="students-count-card">

            <span>
              Active Students
            </span>

          <strong>
  {
    students.filter((student) => {
      const status = (
        student.status || "active"
      ).toLowerCase();

      return status === "active";
    }).length
  }
</strong>

          </div>

          <div className="students-count-card">

            <span>
              Showing
            </span>

            <strong>
              {filteredStudents.length}
            </strong>

          </div>

        </div>

        {/* =====================================
            FILTERS
        ====================================== */}

        <div className="students-filters">

          {/* Search */}

          <div className="student-search">

            <input
              type="text"
              placeholder="Search by name, ID or email..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
            />

          </div>

          {/* Status */}

          <div className="student-filter">

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value
                )
              }
            >
              <option value="All">
                All Statuses
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

              <option value="Suspended">
                Suspended
              </option>
            </select>

          </div>

          {/* Class */}

          <div className="student-filter">

            <select
              value={classFilter}
              onChange={(event) =>
                setClassFilter(
                  event.target.value
                )
              }
            >
              <option value="All">
                All Classes
              </option>

              {classes.map(
                (className) => (
                  <option
                    key={className}
                    value={className}
                  >
                    {className}
                  </option>
                )
              )}

            </select>

          </div>

        </div>

        {/* =====================================
            TABLE
        ====================================== */}

        <div className="students-table-container">

          {filteredStudents.length === 0 ? (

            <div className="students-empty">

              <h3>
                No students found
              </h3>

              <p>
                Try changing your search
                or filters.
              </p>

              {students.length === 0 && (
                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      "/admin/students/add"
                    )
                  }
                >
                  Add First Student
                </button>
              )}

            </div>

          ) : (

            <table className="students-table">

              <thead>

                <tr>

                  <th>
                    Student ID
                  </th>

                  <th>
                    Student
                  </th>

                  <th>
                    Gender
                  </th>

                  <th>
                    Class
                  </th>

                  <th>
                    Academic Year
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredStudents.map(
                  (student) => {

                    const status =
                      student.status ||
                      "Active";

                    return (
                      <tr
                        key={
                          student._id
                        }
                      >

                        {/* Student ID */}

                        <td>
                          {student.studentId ||
                            "—"}
                        </td>

                        {/* Student */}

                        <td>

                          <div className="student-name">

                            <div className="student-avatar">
                              {student.firstName
                                ?.charAt(0)
                                .toUpperCase() ||
                                "S"}
                            </div>

                            <div>

                              <strong>
                                {
                                  student.firstName
                                }{" "}
                                {
                                  student.lastName
                                }
                              </strong>

                              <span>
                                {
                                  student.email ||
                                  "No email"
                                }
                              </span>

                            </div>

                          </div>

                        </td>

                        {/* Gender */}

                        <td>
                          {student.gender ||
                            "—"}
                        </td>

                        {/* Class */}

                        <td>
                          {student.className ||
                            student.class ||
                            "—"}
                        </td>

                        {/* Academic Year */}

                        <td>
                          {
                            student.academicYear ||
                            "—"
                          }
                        </td>

                        {/* Status */}

                        <td>

                          <span
  className={`student-status student-status-${status
    .toLowerCase()
    .replace(
      /\s+/g,
      "-"
    )}`}
>
  {status.charAt(0).toUpperCase() +
    status.slice(1)}
</span>

                        </td>

                        {/* Actions */}

                        <td>

                          <div className="student-actions">

                            <button
                              type="button"
                              onClick={() =>
                                navigate(
                                  `/admin/students/${student._id}`
                                )
                              }
                            >
                              View
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                navigate(
                                  `/admin/students/${student._id}/edit`
                                )
                              }
                            >
                              Edit
                            </button>

                            <button
                              type="button"
                              className="delete-action"
                              onClick={() =>
                                handleDelete(
                                  student._id
                                )
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>
                    );
                  }
                )}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Students;