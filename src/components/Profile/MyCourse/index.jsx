import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Course from "../../Course";

const MyCourse = () => {
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
      <div className="font-bold text-2xl text-red-500">
        Các khoá học của tôi
      </div>

      {courses.length === 0 && (
        <div className="mt-6 flex flex-col items-center justify-center p-10">
          <div>Chưa có khoá học nào</div>
          <Link
            to="/courses"
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-red-600"
          >
            Khám phá các khoá học ngay
          </Link>
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

export default MyCourse;
