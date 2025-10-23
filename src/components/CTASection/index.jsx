const CTASection = () => {
  return (
    <div className="w-full bg-red-100 py-15 flex justify-center">
      <div className="py-20 bg-gradient-to-r from-red-500 to-red-400 text-center text-white rounded-3xl w-5/6">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-6">Sẵn sàng bắt đầu?</h2>
          <p className="text-lg text-white/90 mb-10">
            Tham gia hàng nghìn học viên đang phát triển kỹ năng của họ trên
            Thăng Long University.
          </p>
          <button className="px-10 py-4 bg-white text-red-500 font-semibold rounded-lg hover:bg-red-100 transition-all shadow-lg hover:shadow-xl">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
