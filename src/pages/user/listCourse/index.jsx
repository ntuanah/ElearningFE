import React, { useState, useEffect } from "react";
import Course from "../../../components/Course";
import { useQuery } from "@tanstack/react-query";
import * as courseService from "../../../service/courseService";

const ListCourse = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  const [selectedLevel, setSelectedLevel] = useState("Tất cả");
  const [selectedPrice, setSelectedPrice] = useState("Tất cả");

  useEffect(() => {
    setPage(0);
  }, [selectedLevel, selectedPrice]);

  const fetchCourses = async (page, size, level, price) => {
    const filters = {};
    if (level && level !== "Tất cả") filters.level = level;
    if (price && price !== "Tất cả") {
      filters.isFree = price === "Miễn phí";
    }

    const data = await courseService.getAllCourses(page, size, filters);
    return data;
  };

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses", page, size, selectedLevel, selectedPrice],
    queryFn: () => fetchCourses(page, size, selectedLevel, selectedPrice),
  });

  const courseList = courses?.data?.content || [];
  const totalPages = courses?.data?.totalPages || 1;

  if (isLoading) {
    return <p className="text-center py-10">Đang tải khóa học...</p>;
  }

  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-white py-15 border-b border-red-200">
      <div className="mx-auto px-8 grid grid-cols-12 w-5/6">
        <div className="col-span-3 bg-white rounded-xl shadow p-6 border border-red-200 h-fit mt-26">
          <div className="border-b border-red-200 pb-4 mb-6">
            <p className="font-bold text-foreground text-red-500">Danh mục</p>
            <label className="flex items-center gap-2 cursor-pointer my-2">
              <input
                type="radio"
                name="category"
                className="w-4 h-4 rounded border-gray-300 accent-red-500"
              />
              <span className="text-gray-600">Tất cả</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer my-2">
              <input
                type="radio"
                name="category"
                className="w-4 h-4 rounded border-gray-300 accent-red-500"
              />
              <span className="text-gray-600">Chim cánh cụt</span>
            </label>
          </div>

          <div className="border-b border-red-200 pb-4 mb-6">
            <p className="font-bold text-foreground text-red-500">Cấp độ</p>
            {["Tất cả", "BEGINNER", "INTERMEDIATE", "ADVANCED"].map((level) => (
              <label
                key={level}
                className="flex items-center gap-2 cursor-pointer my-2"
              >
                <input
                  type="radio"
                  name="level"
                  value={level}
                  checked={selectedLevel === level}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-4 h-4 rounded border-gray-300 accent-red-500"
                />
                <span className="text-gray-600">
                  {level === "Tất cả"
                    ? "Tất cả"
                    : level === "BEGINNER"
                    ? "Mới bắt đầu"
                    : level === "INTERMEDIATE"
                    ? "Trung bình"
                    : "Nâng cao"}
                </span>
              </label>
            ))}
          </div>

          <div>
            <p className="font-bold text-foreground text-red-500">Giá cả</p>
            {["Tất cả", "Miễn phí", "Trả phí"].map((price) => (
              <label
                key={price}
                className="flex items-center gap-2 cursor-pointer my-2"
              >
                <input
                  type="radio"
                  name="price"
                  value={price}
                  checked={selectedPrice === price}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-4 h-4 rounded border-gray-300 accent-red-500"
                />
                <span className="text-gray-600">{price}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="col-span-9 ms-5">
          <div className="max-w-7xl mx-auto ">
            <div className="flex justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-red-500">
                Các khóa học
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-8 mx-auto">
              {courseList.length > 0 ? (
                courseList.map((course) => (
                  <Course key={course.id} data={course} />
                ))
              ) : (
                <p className="text-gray-500 col-span-3 text-center">
                  Không có khóa học phù hợp.
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-1 bg-white rounded-lg shadow-sm p-1 justify-center mt-5">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="px-7 flex items-center justify-center w-10 h-10 text-gray-500 bg-gray-100 rounded-md font-medium hover:bg-red-200 transition-colors disabled:opacity-50"
            >
              Trước
            </button>

            {Array.from({ length: totalPages }, (_, index) => index)
              .filter(
                (num) =>
                  num === 0 ||
                  num === totalPages - 1 ||
                  (num >= page - 2 && num <= page + 2)
              )
              .map((num, idx, arr) => {
                const isEllipsis = idx > 0 && num !== arr[idx - 1] + 1;
                return (
                  <React.Fragment key={num}>
                    {isEllipsis && (
                      <span className="flex items-center justify-center w-10 h-10 text-gray-500">
                        ...
                      </span>
                    )}
                    <button
                      onClick={() => setPage(num)}
                      className={`flex items-center justify-center w-10 h-10 rounded-md font-medium transition-colors ${
                        page === num
                          ? "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-red-200"
                      }`}
                    >
                      {num + 1}
                    </button>
                  </React.Fragment>
                );
              })}

            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
              className="px-7 flex items-center justify-center w-10 h-10 text-gray-500 bg-gray-100 rounded-md font-medium hover:bg-red-200 transition-colors disabled:opacity-50"
            >
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
