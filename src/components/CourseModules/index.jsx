import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const CourseModules = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-red-200  my-3 rounded-lg hover:border-red-500 transition-all">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-red-50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-red-500" />
          <div>
            <h3 className="font-semibold text-gray-800">{data.title}</h3>
            <p className="text-sm text-gray-500">
              {data.lessons?.length || 0} bài học
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {data.totalDuration || 0}h
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
          {data.lessons?.map((lesson) => (
            <div
              onClick={() => lesson.onClick && lesson.onClick()}
              key={lesson.id}
              className="flex justify-between items-center py-2 border-b border-gray-100 hover:bg-red-50 rounded-md px-2 transition-all"
            >
              <span className="text-sm text-gray-700">{lesson.title}</span>
              <span className="text-xs text-gray-500">{lesson.duration}p</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseModules;
