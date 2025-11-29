import {
  Book,
  Clock,
  Plus,
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import * as courseService from "../../../service/courseService";
import { useQuery } from "@tanstack/react-query";
import { formatterVND } from "../../../utils/formatterVND";

const CourseInformation = ({ onClose, courseId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const fetchCourseDetails = async () => {
    const data = await courseService.getCourseById(courseId);
    return data;
  };

  const { data: courseDetails = [] } = useQuery({
    queryKey: ["course-details", courseId],
    queryFn: fetchCourseDetails,
  });

  const fCurrency = (n) => "₫" + n.toLocaleString("vi-VN");
  console.log(courseId);
  console.log(courseDetails);
  const data = {
    title: "Module 1: Giới thiệu React",
    totalDuration: 5,
    lessons: [
      { id: 1, title: "React là gì?", duration: 10 },
      { id: 2, title: "Cách tạo dự án React", duration: 15 },
      { id: 3, title: "Component cơ bản", duration: 20 },
    ],
  };
  return (
    <div
      className="fixed inset-0 bg-red/40 backdrop-blur-sm overflow-y-auto flex justify-center py-10 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-5/6 border border-red-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="font-bold text-2xl text-red-500">
            Course Information
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="border border-red-200 rounded-2xl p-4 space-y-4">
              <div className="font-bold text-red-500 text-2xl">
                Basic Information
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-l font-bold">Course Title</div>
                  <div className="font-bold text-2xl text-red-500">
                    {courseDetails.title}
                  </div>
                </div>

                <div>
                  <div className="text-l font-bold">Subtitle</div>
                  <div className="text-gray-600">
                    {courseDetails.shortDescription}
                  </div>
                </div>

                <div>
                  <div className="text-l font-bold">Course Description</div>
                  <div className="text-gray-600">
                    {courseDetails.description}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-l font-bold">Category</div>
                    <div className="bg-red-50 rounded-2xl text-red-500 p-2 font-semibold w-fit">
                      {courseDetails.categories}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-l font-bold">Level</div>
                    <div className="text-gray-600">{courseDetails.level}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-6 space-y-4">
              <div className="text-xl text-red-500 font-bold">Pricing</div>

              <div className="text-2xl font-bold">
                {formatterVND(courseDetails.price)}
              </div>

              <div className="bg-red-50 rounded-2xl p-3 w-full">
                <div className="font-semibold">
                  <span className="font-bold text-red-500">Discount:</span> 70%
                  OFF
                </div>
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-6">
              <div className="flex justify-between items-center">
                <div className="font-bold text-red-500 text-xl">
                  Course Content
                </div>
              </div>

              <div>
                <div className="border border-red-200 my-3 rounded-lg hover:border-red-500 transition-all">
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-red-50 transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-red-500" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {data.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {data.lessons.length} bài học
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {data.totalDuration}h
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-3">
                      {data.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex justify-between items-center py-2 border-b border-gray-100
                         hover:bg-red-50 rounded-md px-2 transition-all"
                        >
                          <span className="text-sm text-gray-700">
                            {lesson.title}
                          </span>
                          <div>
                            <span className="text-xs text-gray-500 me-2">
                              {lesson.duration}p
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-6">
              <div className="flex justify-between items-center">
                <div className="font-bold text-red-500 text-xl">
                  What Students Will Learn
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-2 mt-5 items-center">
                  <div className=" p-2 rounded-sm my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="none"
                        stroke="red"
                        strokeLinecap="square"
                        d="m1 7l4.5 4.5L14 3"
                      />
                    </svg>
                  </div>
                  <div>
                    Build 16 web development projects for your portfolio
                  </div>
                </div>

                <div className="flex gap-2 mt-5 items-center">
                  <div className=" p-2 rounded-sm my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="none"
                        stroke="red"
                        strokeLinecap="square"
                        d="m1 7l4.5 4.5L14 3"
                      />
                    </svg>
                  </div>
                  <div>
                    Learn the latest technologies, including Javascript, React,
                    Node
                  </div>
                </div>

                <div className="flex gap-2 mt-5 items-center">
                  <div className=" p-2 rounded-sm my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="none"
                        stroke="red"
                        strokeLinecap="square"
                        d="m1 7l4.5 4.5L14 3"
                      />
                    </svg>
                  </div>
                  <div>Master frontend development with React</div>
                </div>

                <div className="flex gap-2 mt-5 items-center">
                  <div className=" p-2 rounded-sm my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="none"
                        stroke="red"
                        strokeLinecap="square"
                        d="m1 7l4.5 4.5L14 3"
                      />
                    </svg>
                  </div>
                  <div>Master backend development with Node</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="border border-red-200 rounded-2xl p-4">
              <div className="font-bold text-red-500 text-xl">Course Image</div>
              <div className="w-full mt-4 flex justify-center rounded-2xl border border-red-200 ">
                {courseDetails.image}
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-3">
              <div className="font-bold text-red-500 text-xl">
                Course Status
              </div>

              <div className="font-semibold text-red-500 bg-red-200 p-2 text-center rounded-2xl w-full mt-4">
                Published
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-6 space-y-2">
              <div className="font-bold text-red-500 text-xl">Course Stats</div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Book size={16} />
                  Sections
                </div>
                <div>0</div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  Lectures
                </div>
                <div>0</div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  Duration
                </div>
                <div>-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
