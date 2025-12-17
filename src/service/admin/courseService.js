import axios from "axios";
import { getToken } from "../../utils/getToken";

const token = getToken();

export const createCourse = async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/courses`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
}

export const createCourseCategory = async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/course-categories`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
}

export const getCourseById = async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
}
