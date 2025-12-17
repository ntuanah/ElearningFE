import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();

export const getAllCourses = async (page, size, filters = {}) => {
  const params = { page, size, ...filters };

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses`, {
    params,
  });

  return res.data;
};

export const getCourseById = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data?.data || null;
};

export const deleteCourseById = async (id) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_API_URL}/courses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data?.data || null;
};

export const updateCourseById = async (id, courseData) => {
  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/courses/${id}`,
    courseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data?.data || null;
};

export const getPopularCourses = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/courses/popular`
  );
  return res.data?.content || [];
};
