import React from "react";
import { Users, Star, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import * as courseService from "../../service/courseService";

const PopularCourse = () => {
  const fetchPopolarCourse = async () => {
    const data = await courseService.getPopularCourses();
    return data;
  };

  const { data: popularCourses = [] } = useQuery({
    queryKey: ["popularCourses"],
    queryFn: fetchPopolarCourse,
  });

  const course = popularCourses[0] || {};

  return (
    <div className="w-72 rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer bg-white border border-red-200">
      <div className="p-2">
        <img
          src={
            course.thumbnail ||
            "https://placehold.co/400x400?text=No+Thumbnail&font=roboto"
          }
          alt={course.title || "Course"}
          className="w-full h-56 object-cover rounded-2xl"
        />
      </div>

      <div className="px-5 pb-5">
        <h3 className="object-cover text-gray-900 font-semibold text-base truncate overflow-hidden whitespace-nowrap">
          {course.title || "Tên khóa học"}
        </h3>
      </div>
    </div>
  );
};

export default PopularCourse;
