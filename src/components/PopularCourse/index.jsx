import React from "react";
import { Users, Star, Clock } from "lucide-react";

const PopularCourse = () => {
  return (
    <div className="w-72 rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer bg-white border border-red-200">
      <div className="p-2">
        <img
          src="https://img-c.udemycdn.com/course/750x422/5238734_c8a8_3.jpg"
          alt="Khóa học React Pro"
          className="w-full h-56 object-cover rounded-2xl"
        />
      </div>

      <div className="px-5 pb-5">
        <h3 className="text-gray-900 font-semibold text-base truncate overflow-hidden whitespace-nowrap">
          The Complete Prompt Engineering for AI Bootcamp (2025)
        </h3>
      </div>
    </div>
  );
};

export default PopularCourse;
