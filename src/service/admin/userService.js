import axios from "axios";
import { getToken } from "../../utils/getToken";

const token = getToken();

export const getAllUsers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
