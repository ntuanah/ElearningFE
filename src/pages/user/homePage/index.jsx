import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Scrollbar, Autoplay } from "swiper/modules";
import PopularCourse from "../../../components/PopularCourse";
import HeroSection from "../../../components/HeroSection";
import StatsSection from "../../../components/StatsSection";
import CTASection from "../../../components/CTASection";
import Course from "../../../components/Course";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import * as courseService from "../../../service/courseService";

const HomePage = () => {
  const fetechCourses = async () => {
    const data = await courseService.getAllCourses();
    return data;
  };

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: fetechCourses,
  });

  if (isLoading) {
    return <p className="text-center py-10">Đang tải khóa học...</p>;
  }

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <div className="py-20 bg-white border-b border-red-200">
        <div className="w-5/6 mx-auto px-8">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div className="col-span-1 space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Khóa học nổi bật
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cập nhật các khóa học được quan tâm nhất, giúp bạn nhanh chóng
                nâng cao kỹ năng và phát triển sự nghiệp trong thời đại số.
              </p>
            </div>
            <div className="col-span-2">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
                <SwiperSlide>
                  <PopularCourse />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="py-15 border-b border-red-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Khám phá các khóa học khác
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Chọn từ hàng trăm khóa học được thiết kế bởi các chuyên gia hàng
              đầu trong ngành
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            <button className="font-bold px-5 py-3 border border-red-400 rounded-md text-red-500 text-sm hover:bg-red-100 hover:border-red-500 hover:scale-[1.1]">
              Tất cả
            </button>
            <button className="font-bold px-5 py-3 border border-gray-400 rounded-md text-sm hover:bg-red-100 hover:border-red-500 hover:scale-[1.1]">
              Lập trình
            </button>
            <button className="font-bold px-5 py-3 border border-gray-400 rounded-md text-sm hover:bg-red-100 hover:border-red-500 hover:scale-[1.1]">
              Thiết kế
            </button>
            <button className="font-bold px-5 py-3 border border-gray-400 rounded-md text-sm hover:bg-red-100 hover:border-red-500 hover:scale-[1.1]">
              Marketing
            </button>
            <button className="font-bold px-5 py-3 border border-gray-400 rounded-md text-sm hover:bg-red-100 hover:border-red-500 hover:scale-[1.1]">
              Cloud
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 mx-auto">
            {courses.map((course) => (
              <Course key={course._id || course.id} data={course} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-400 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-700 transition-all duration-300">
            Xem tất cả khóa học
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default memo(HomePage);
