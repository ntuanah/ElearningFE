import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import { ROUTERS } from "./utils/router";
import MasterLaypout from "./pages/user/theme/masterLayout";
import LoginPage from "./pages/user/loginPage";
import RegisterPage from "./pages/user/registerPage";
import DetailCoure from "./pages/user/detailCoure";
import CartPage from "./pages/user/cart";
import ListCourse from "./pages/user/listCourse";
import ProfilePage from "./pages/user/profilePage";
import LessonPage from "./pages/user/lessonPage";
import EditProfile from "./pages/user/profilePage/editProfile";
import ChangePassword from "./pages/user/profilePage/changePassword";

const renderRouterUser = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.LOGINPAGE,
      component: <LoginPage />,
    },
    {
      path: ROUTERS.USER.REGISTERPAGE,
      component: <RegisterPage />,
    },
    {
      path: ROUTERS.USER.LISTCOURSE,
      component: <ListCourse />,
    },
    {
      path: ROUTERS.USER.DETAILCOURSE,
      component: <DetailCoure />,
    },
    {
      path: ROUTERS.USER.CART,
      component: <CartPage />,
    },
    {
      path: ROUTERS.USER.PROFILEPAGE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.EDITPROFILE,
      component: <EditProfile />,
    },
    {
      path: ROUTERS.USER.CHANGEPASSWORD,
      component: <ChangePassword />,
    },
    {
      path: ROUTERS.USER.LESSONPAGE,
      component: <LessonPage />,
    },
  ];

  return (
    <MasterLaypout>
      <Routes>
        {userRouter.map((item, key) => {
          return <Route key={key} path={item.path} element={item.component} />;
        })}
      </Routes>
    </MasterLaypout>
  );
};

const RouterCustom = () => {
  return renderRouterUser();
};

export default RouterCustom;
