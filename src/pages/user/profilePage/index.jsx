import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../../service/authService";

export default function Profile() {
  const fetchProfile = async () => {
    const data = await getUserProfile();
    return data;
  };

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 bg-gradient-to-br from-red-300 via-white to-red-100">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-8 border border-red-200">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-2xl font-bold">{userProfile.fullName}</h1>
            <p className="text-gray-600">{userProfile.email}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <p>
            <span className="font-medium">Số điện thoại:</span>{" "}
            {userProfile.phone}
          </p>
          <p>
            <span className="font-medium">Tiểu sử:</span>{" "}
            {userProfile.bio || "Chưa có mô tả"}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link
            to="/profile/edit"
            className="block text-center py-2.5 rounded-lg border border-red-200 hover:bg-red-200"
          >
            Chỉnh sửa hồ sơ
          </Link>
          <Link
            to="/profile/change-password"
            className="block text-center py-2.5 rounded-lg border border-red-200 hover:bg-red-200"
          >
            Đổi mật khẩu
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl md:text-2xl font-bold text-foreground mb-4 text-red-500">
            Các khóa học của tôi
          </h2>
        </div>
      </div>
    </div>
  );
}
