import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import { ROUTERS } from "./utils/router";
import MasterLaypout from "./pages/user/theme/masterLayout";
import LoginPage from "./pages/user/loginPage";
import RegisterPage from "./pages/user/registerPage";
import DetailCoure from "./pages/user/detailCoure";

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
      path: ROUTERS.USER.DETAILCOURSE,
      component: <DetailCoure />,
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
