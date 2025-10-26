import axios from "axios";

export const getAllCourses = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
  return res.data?.data?.content || [];
};

export const getCourseById = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses/${id}`);
  return res.data?.data || null;
};
