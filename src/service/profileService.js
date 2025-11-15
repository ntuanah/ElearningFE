import axios from "axios";
import { getToken } from "../utils/getToken";
import { jwtDecode } from "jwt-decode";
const token = getToken();
export const getUserProfile = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateProfile = async (profileData) => {
  const decoded = jwtDecode(token);
  const userId = decoded.userId;

  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/users/profile/${userId}`,
    profileData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
