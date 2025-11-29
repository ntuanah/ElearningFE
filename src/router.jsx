import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import HomePage from "./pages/user/homePage";
import LoginPage from "./pages/user/loginPage";
import RegisterPage from "./pages/user/registerPage";
import DetailCoure from "./pages/user/detailCoure";
import CartPage from "./pages/user/cart";
import ListCourse from "./pages/user/listCourse";
import ProfilePage from "./pages/user/profilePage";
import LessonPage from "./pages/user/lessonPage";
import EditProfile from "./pages/user/profilePage/editProfile";
import ChangePassword from "./pages/user/profilePage/changePassword";

import LoginAdmin from "./pages/admin/loginAdmin";
import AdminPage from "./pages/admin/admin";
import MasterLayout from "./pages/user/theme/masterLayout";

import { ROUTERS } from "./utils/router";

const RouterCustom = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role || null);
      } catch (error) {
        console.error("Invalid token:", error);
        setRole(null);
      }
    }
    setLoading(false); // đã load xong token
  }, []);

  // 🚀 Quan trọng: Đừng render router khi còn loading
  if (loading) {
    return <div>Loading...</div>;
  }

  const userRouter = (
    <MasterLayout>
      <Routes>
        <Route path={ROUTERS.USER.HOME} element={<HomePage />} />
        <Route path={ROUTERS.USER.LOGINPAGE} element={<LoginPage />} />
        <Route path={ROUTERS.USER.REGISTERPAGE} element={<RegisterPage />} />
        <Route path={ROUTERS.USER.LISTCOURSE} element={<ListCourse />} />
        <Route path={ROUTERS.USER.DETAILCOURSE} element={<DetailCoure />} />
        <Route path={ROUTERS.USER.CART} element={<CartPage />} />
        <Route path={ROUTERS.USER.PROFILEPAGE} element={<ProfilePage />} />
        <Route path={ROUTERS.USER.EDITPROFILE} element={<EditProfile />} />
        <Route
          path={ROUTERS.USER.CHANGEPASSWORD}
          element={<ChangePassword />}
        />
        <Route path={ROUTERS.USER.LESSONPAGE} element={<LessonPage />} />
      </Routes>
    </MasterLayout>
  );

  return (
    <Routes>
      <Route path="/*" element={userRouter} />

      {/* ROUTES ADMIN */}
      <Route path="/admin/login" element={<LoginAdmin />} />

      {role === "ADMIN" ? (
        <Route path="/admin" element={<AdminPage />} />
      ) : (
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
      )}
    </Routes>
  );
};

export default RouterCustom;
