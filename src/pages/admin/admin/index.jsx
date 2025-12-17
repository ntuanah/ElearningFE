import { useState } from "react";
import TabSelect from "../../../components/Admin/TabSelect";
import InfoUser from "../../../components/Profile/InfoUser";
import OrderHistory from "../../../components/Profile/OrderHistory";
import MyCourse from "../../../components/Profile/MyCourse";
import Dashboard from "../../../components/Admin/Dashboard";
import Courses from "../../../components/Admin/Courses";
import Users from "../../../components/Admin/User";
import Orders from "../../../components/Admin/Orders";
import Analytics from "../../../components/Admin/Analytics";
import Categories from "../../../components/Admin/Categories";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleOnTabChange = (tab) => {
    setActiveTab(tab);
  };

  const userProfile = {
    data: {
      fullName: "Nguyễn Tuấn Anh",
      email: "ntuanah15@gmail.com",
      phone: "0912345678",
      bio: "Học viên chăm chỉ",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 bg-gradient-to-br from-red-300 via-white to-red-100">
      <div className="w-6/7 mx-auto flex gap-x-[10px]">
        <div className="min-w-[300px] bg-white p-4 rounded-xl shadow-md border border-red-200">
          <div className="my-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4 border border-red-200"
              src={userProfile.data.avatar}
              alt="avatar"
            />
            <div className="text-xl font-bold">{userProfile.data.fullName}</div>
            <div className="text-gray-500">{userProfile.data.email}</div>
          </div>

          <TabSelect
            activeTab={activeTab}
            handleOnTabChange={handleOnTabChange}
          />
        </div>

        <div className="w-full bg-white  rounded-xl shadow-md border border-red-200">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "courses" && <Courses />}
          {activeTab === "users" && <Users />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "categories" && <Categories />}
        </div>
      </div>
    </div>
  );
}
