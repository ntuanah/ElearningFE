import CourseModules from "../../../components/CourseModules";
import { useState } from "react";
import {
  ArrowLeft,
  Star,
  Users,
  Clock,
  Heart,
  Share2,
  CheckCircle,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as courseService from "../../../service/courseService";

const DetailCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchCourseDetail = async () => {
    const data = await courseService.getCourseById(id);
    return data;
  };

  const { data: courseDetail, isLoading } = useQuery({
    queryKey: ["courseDetail", id],
    queryFn: fetchCourseDetail,
  });

  if (isLoading) {
    return <p className="text-center py-10">Đang tải chi tiết khóa học...</p>;
  }

  if (!courseDetail) {
    return <p className="text-center py-10">Khóa học không tồn tại.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="bg-white border-b border-red-200">
        <div className="px-8 py-4">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 cursor-pointer transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-100 via-white to-red-50 py-16 border-b border-red-200">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{courseDetail.title}</h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              {courseDetail.shortDescription}
            </p>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-lg">
                  {courseDetail.averageRating}
                </span>
                <span className="text-sm text-gray-500">
                  ({courseDetail.reviewCount} đánh giá)
                </span>
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
                <Users className="w-5 h-5 text-red-500" />
                <span>{courseDetail.enrollmentCount} học viên</span>
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-red-500" />
                <span>{courseDetail.totalDuration} giờ học</span>
              </div>
            </div>

            <div className="pt-4 border-t border-red-200">
              <p className="text-sm text-gray-500 mb-1">Giảng viên</p>
              <p className="font-semibold text-gray-800">
                {courseDetail.instructorName}
              </p>
              <p className="text-sm text-gray-600">
                {courseDetail.instructorBio}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold rounded-lg hover:scale-[1.02] transition-all shadow-lg">
                Đăng ký khóa học
              </button>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="px-6 py-3 border border-red-400 text-red-500 rounded-lg flex items-center gap-2 hover:bg-red-50 hover:border-red-500 transition-all"
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-red-500" : ""}`}
                />
                Yêu thích
              </button>

              <button className="px-6 py-3 border border-red-400 text-red-500 rounded-lg flex items-center gap-2 hover:bg-red-50 hover:border-red-500 transition-all">
                <Share2 className="w-5 h-5" />
                Chia sẻ
              </button>
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={
                courseDetail.thumbnail ||
                "https://via.placeholder.com/600x400?text=No+Thumbnail"
              }
              alt={courseDetail.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Về khóa học này</h2>
            <p className="text-gray-600 leading-relaxed">
              {courseDetail.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Bạn sẽ học được gì</h2>
            <div className="space-y-3">
              {courseDetail.objectives?.split(",").map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-200"
                >
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nội dung khóa học</h2>
            {courseDetail.chapters?.map((ch) => (
              <CourseModules key={ch.id} data={ch} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailCourse;
