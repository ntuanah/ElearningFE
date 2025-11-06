import { jwtDecode } from "jwt-decode";

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    const exp = decoded.exp * 1000;
    if (Date.now() > exp) {
      localStorage.removeItem("accessToken");
      return null;
    }

    return token;
  } catch (err) {
    console.error("Invalid token:", err);
    localStorage.removeItem("accessToken");
    return null;
  }
};
