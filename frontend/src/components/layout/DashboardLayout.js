import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "./DashboardLayout.css";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  // ==========================================
  // GET CURRENT PAGE
  // ==========================================

  const getPageInfo = () => {
    const pathname = location.pathname;

    // Dashboard
    if (
      pathname === "/admin" ||
      pathname === "/admin/dashboard"
    ) {
      return {
        title: "Dashboard",
        subtitle: "Welcome back to EduSmart",
      };
    }

    // Students
    if (
      pathname === "/admin/students" ||
      pathname === "/admin/students/add" ||
      pathname.includes("/admin/students/")
    ) {
      return {
        title: "Students",
        subtitle: "Manage students in your school",
      };
    }

    // Teachers
    if (
      pathname === "/admin/teachers" ||
      pathname === "/admin/teachers/add" ||
      pathname.includes("/admin/teachers/")
    ) {
      return {
        title: "Teachers",
        subtitle: "Manage teachers in your school",
      };
    }

    // Classes
    if (
      pathname === "/admin/classes" ||
      pathname === "/admin/classes/add" ||
      pathname.includes("/admin/classes/")
    ) {
      return {
        title: "Classes",
        subtitle: "Manage your school classes",
      };
    }

    // Subjects
    if (
      pathname === "/admin/subjects" ||
      pathname === "/admin/subjects/add" ||
      pathname.includes("/admin/subjects/")
    ) {
      return {
        title: "Subjects",
        subtitle: "Manage subjects in your school",
      };
    }

    // Attendance
    if (
      pathname === "/admin/attendance" ||
      pathname.includes("/admin/attendance/")
    ) {
      return {
        title: "Attendance",
        subtitle: "Monitor student attendance",
      };
    }

    // Examinations
    if (
      pathname === "/admin/exams" ||
      pathname === "/admin/examinations" ||
      pathname.includes("/admin/exams/")
    ) {
      return {
        title: "Examinations",
        subtitle: "Manage school examinations",
      };
    }

    // Finance
    if (
      pathname === "/admin/finance" ||
      pathname.includes("/admin/finance/")
    ) {
      return {
        title: "Finance",
        subtitle: "Manage school finances",
      };
    }

    // Settings
    if (
      pathname === "/admin/settings" ||
      pathname.includes("/admin/settings/")
    ) {
      return {
        title: "Settings",
        subtitle: "Manage your school settings",
      };
    }

    // Default
    return {
      title: "Dashboard",
      subtitle: "Welcome back to EduSmart",
    };
  };

  const pageInfo = getPageInfo();

  return (
    <div className="dashboard-layout">

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="dashboard-main">

        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
          title={pageInfo.title}
          subtitle={pageInfo.subtitle}
        />

        <main className="dashboard-content">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;