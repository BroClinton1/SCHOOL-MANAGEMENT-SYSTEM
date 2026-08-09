import API from "./api";

// ==========================================
// CREATE STUDENT
// ==========================================

export const createStudent = async (studentData) => {
  const response = await API.post(
    "/students",
    studentData
  );

  return response.data;
};

// ==========================================
// GET ALL STUDENTS
// ==========================================

export const getStudents = async () => {
  const response = await API.get(
    "/students"
  );

  return response.data;
};

// ==========================================
// GET SINGLE STUDENT
// ==========================================

export const getStudentById = async (id) => {
  const response = await API.get(
    `/students/${id}`
  );

  return response.data;
};