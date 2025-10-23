import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Logo from "../../../assets/user/Logo.svg";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Đăng nhập thành công!");
    }, 1000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-300 via-white to-red-100 relative px-4">
      {/* Nút quay lại */}
      <div
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-red-600 transition-all"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Quay lại</span>
      </div>

      {/* Form login */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-red-200">
        {/* Logo + tiêu đề */}
        <div className="text-center mb-8">
          <img
            src={Logo}
            alt=""
            className="w-[160px] h-[60px] cursor-pointer mx-auto"
          />
          <p className="text-gray-500 text-sm">
            Nền tảng học tập trực tuyến hàng đầu
          </p>
        </div>

        {/* Tiêu đề form */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Đăng nhập Admin
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-1"
            >
              Email
            </label>
            <div className="relative ">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 " />
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Mật khẩu */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-medium mb-1"
            >
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-10 py-2.5 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 accent-red-500"
              />
              <span className="text-gray-600">Nhớ tôi</span>
            </label>
            <div
              href="#"
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Quên mật khẩu?
            </div>
          </div>

          {/* Nút đăng nhập */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
