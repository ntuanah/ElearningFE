import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CartPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const price = 499000;

  const removeItem = () => setVisible(false);
  const clearCart = () => setVisible(false);
  const total = visible ? price : 0;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-white font-sans">
      <div className="relative py-6 px-8 border-b border-red-200 text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Giỏ hàng của bạn</h1>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-8">
        <div className="flex gap-8 items-start">
          <div className="flex-1 bg-white border border-red-200 rounded-2xl p-4 shadow-sm">
            {visible ? (
              <div className="flex items-center gap-6">
                <img
                  src="https://img-c.udemycdn.com/course/750x422/5238734_c8a8_3.jpg"
                  alt="Khóa học React Cơ Bản"
                  className="w-24 h-24 rounded-xl border object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-gray-800">
                    Khóa học React Cơ Bản
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Giảng viên: Nguyễn Văn A
                  </p>
                  <p className="text-base font-semibold mt-2 text-red-500">
                    {price.toLocaleString()} ₫
                  </p>
                </div>

                <button
                  onClick={removeItem}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Xóa
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-8 text-lg">
                Giỏ hàng trống.
              </p>
            )}
          </div>

          <div className="w-72 bg-white border border-red-200 rounded-2xl p-5 shadow-md h-fit">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Tóm tắt đơn hàng
            </h3>

            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{total.toLocaleString()} ₫</span>
              </div>

              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>

              <div className="border-t border-red-200 pt-3 mt-2 flex justify-between font-semibold text-base text-gray-900">
                <span>Tổng cộng:</span>
                <span className="text-red-600">{total.toLocaleString()} ₫</span>
              </div>
            </div>

            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold mt-5 py-2.5 rounded-lg transition">
              Thanh toán
            </button>

            <button
              onClick={clearCart}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white mt-3 py-2.5 rounded-lg transition"
            >
              Xóa toàn bộ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
