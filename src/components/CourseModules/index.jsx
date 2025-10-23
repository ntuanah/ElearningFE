import { BookOpen } from "lucide-react";

const CourseModules = () => {
  return (
    <div className="flex justify-between items-center my-3 p-4 border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-500 transition-all">
      <div className="flex items-center gap-3">
        <BookOpen className="w-5 h-5 text-red-500" />
        <div>
          <h3 className="font-semibold text-gray-800">Giới thiệu React</h3>
          <p className="text-sm text-gray-500">5 bài học</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">2h</span>
    </div>
  );
};

export default CourseModules;
