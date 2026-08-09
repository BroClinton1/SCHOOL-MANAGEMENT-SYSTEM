import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "../pages/auth/Splash";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";
import Students from "../pages/admin/Students";
import AddStudent from "../pages/admin/AddStudent";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Teacher */}
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

      {/* Student */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />

      {/* Parent */}
      <Route path="/parent/dashboard" element={<ParentDashboard />} />

      <Route path="/admin/students" element={<Students />} />
      <Route
  path="/admin/students/add"
  element={<AddStudent />}
/>
    </Routes>
  );
};

export default AppRoutes;
