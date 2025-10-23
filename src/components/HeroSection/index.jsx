const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-white py-24 px-8 text-center border-b border-red-200">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto space-y-8 ">
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Nâng cao kỹ năng của bạn
          <span className="block bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            cùng Thăng Long University
          </span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Học từ những giáo viên hàng đầu với hàng trăm khóa học chất lượng cao.
          Bắt đầu hành trình học tập của bạn ngay hôm nay.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
