import { Star, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/detailCourse")}
      className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl hover:scale-[1.03] transition-all cursor-pointer border border-red-200"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://img-c.udemycdn.com/course/750x422/5238734_c8a8_3.jpg"
          alt="Khóa học React Pro"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-bold text-lg text-gray-900 leading-tight">
          Khóa học React Pro từ cơ bản đến nâng cao
        </h3>
        <p className="text-sm text-gray-500">Nguyễn Văn A</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-semibold text-sm">4.8</span>
          </div>
          <span className="text-xs text-gray-500">(12,345)</span>
        </div>

        <div className="flex items-center gap-5 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>12h học</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-red-200">
          <p className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            499.000đ
          </p>
          <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-400 text-white px-4 py-2 rounded-md text-sm font-semibold hover:shadow-md transition">
            Xem <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
