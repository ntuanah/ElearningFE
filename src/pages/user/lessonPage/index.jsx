import React, { useState } from "react";
import CourseModules from "../../../components/CourseModules";
import { useQuery } from "@tanstack/react-query";
import * as profileService from "../../../service/profileService"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const CourseLessonPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get("lessonId"));

  const fetchEnrollmentContent = async () => {
    const data = await profileService.getEnrollmentContent(slug)
    return data;
  }

  const {data: courseData} = useQuery({
    queryKey: ["enrollmentContent", slug],
    queryFn: fetchEnrollmentContent,
  })

  const course = courseData?.data ?? {};
  const allLessons = course?.chapters?.flatMap((ch) => ch.lessons) ?? [];
  const currentLesson = allLessons.find((l) => l.id === lessonId);

  if (!currentLesson) {
  return <p className="p-10 text-center">Không tìm thấy bài học.</p>;
}

  

const currentIndex = allLessons.findIndex(l => l.id === lessonId);
const prevLesson = allLessons[currentIndex - 1];
const nextLesson = allLessons[currentIndex + 1];

const goToLesson = (lesson) => {
  navigate(`?lessonId=${lesson.id}`);
};


  return (
    <div className="flex gap-6 px-10 py-10 bg-gray-50 min-h-screen">
      <div className="w-1/4 bg-white rounded-xl shadow-md border border-red-100 p-4 h-fit">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Nội dung khóa học
        </h2>

        {(course?.chapters ?? []).map((chapter) => (
          <CourseModules
            key={chapter.id}
            data={chapter}
            isEnrolled={true}
            courseSlug={slug}
            currentLessonId={lessonId}
          />
        ))}
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center h-fit">
        <h1 className="text-2xl font-bold mb-5">{currentLesson.title}</h1>
        <div className="w-full h-165 rounded-lg mb-4 overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={currentLesson.videoUrl}
            title={currentLesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-between w-full mt-4 ">
          <button disabled={!prevLesson} onClick={() => prevLesson && goToLesson(prevLesson)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            ← Bài trước
          </button>
          <button disabled={!nextLesson} onClick={() => nextLesson && goToLesson(nextLesson)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Bài tiếp theo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseLessonPage;
