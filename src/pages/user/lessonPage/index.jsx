import React, { useState } from "react";
import CourseModules from "../../../components/CourseModules";

const CourseLessonPage = () => {
  const currentLessonTitle = "Cài đặt môi trường";

  return (
    <div className="flex gap-6 px-10 py-10 bg-gray-50 min-h-screen">
      <div className="w-1/4 bg-white rounded-xl shadow-md border border-red-100 p-4 h-fit">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Nội dung khóa học
        </h2>

        <CourseModules
          data={{
            id: 101,
            title: "Giới thiệu về React",
            lessons: [
              { id: 1, title: "Cài đặt môi trường" },
              { id: 2, title: "Tạo project React đầu tiên" },
            ],
          }}
        />
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center h-fit">
        <div className="w-full h-165 bg-black rounded-lg mb-4 flex items-center justify-center text-white font-semibold text-xl">
          {currentLessonTitle}
        </div>

        <div className="flex justify-between w-full mt-4 ">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            ← Bài trước
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Bài tiếp theo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseLessonPage;
