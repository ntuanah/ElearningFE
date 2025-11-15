import { memo } from "react";
import { useState, useEffect } from "react";
import Course from "../../Course";

const OrderHistory = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Khóa học ReactJS từ cơ bản đến nâng cao",
      instructorName: "Nguyễn Văn A",
      thumbnail: "https://i.imgur.com/eY0nZQh.jpeg",
      totalDuration: 12,
      price: 0,
      isFree: true,
    },
    {
      id: 2,
      title: "NextJS Masterclass 2024",
      instructorName: "Trần Thị B",
      thumbnail: "https://i.imgur.com/j7kVbUw.jpeg",
      totalDuration: 20,
      price: 499000,
      isFree: false,
    },
    {
      id: 1,
      title: "Khóa học ReactJS từ cơ bản đến nâng cao",
      instructorName: "Nguyễn Văn A",
      thumbnail: "https://i.imgur.com/eY0nZQh.jpeg",
      totalDuration: 12,
      price: 0,
      isFree: true,
    },
    {
      id: 2,
      title: "NextJS Masterclass 2024",
      instructorName: "Trần Thị B",
      thumbnail: "https://i.imgur.com/j7kVbUw.jpeg",
      totalDuration: 20,
      price: 499000,
      isFree: false,
    },
    {
      id: 1,
      title: "Khóa học ReactJS từ cơ bản đến nâng cao",
      instructorName: "Nguyễn Văn A",
      thumbnail: "https://i.imgur.com/eY0nZQh.jpeg",
      totalDuration: 12,
      price: 0,
      isFree: true,
    },
    {
      id: 2,
      title: "NextJS Masterclass 2024",
      instructorName: "Trần Thị B",
      thumbnail: "https://i.imgur.com/j7kVbUw.jpeg",
      totalDuration: 20,
      price: 499000,
      isFree: false,
    },
  ]);

  return (
    <div className="p-6">
      <div className="text-2xl text-red-500 font-bold">Lịch sử mua </div>

      {courses.length === 0 && (
        <div className="mt-6 flex flex-col items-center justify-center p-10">
          <div>Bạn chưa mua khoá học nào</div>
        </div>
      )}

      {courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {courses.map((course) => (
            <Course key={course.id} data={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(OrderHistory);
