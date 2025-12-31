import { useQuery } from "@tanstack/react-query";
import * as userService from "../../service/admin/userService";

export default function TeachersSection() {
  const fetchTeachers = async () => {
    return await userService.getPopularInstructors(4);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: fetchTeachers,
  });

  if (isLoading) {
    return <p className="text-center py-10">Đang tải giảng viên...</p>;
  }

  const teachers = data?.data || [];

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-white to-red-50 border-b border-red-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-red-500">
          Giảng viên tiêu biểu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 px-5 md:px-20">
          {teachers.map((teacher) => (
            <div
              key={teacher.instructorId}
              className="bg-white border border-red-200 rounded-xl p-6 md:p-8 shadow-sm hover:-translate-y-2 transition"
            >
              <img
                src={
                  teacher.avatar ||
                  "https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg"
                }
                className="w-24 h-24 rounded-full mx-auto mb-4"
                alt={teacher.fullName}
              />

              <h3 className="font-bold text-lg">{teacher.fullName}</h3>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {teacher.bio || "Chưa có mô tả"}
              </p>

              <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                <span> {teacher.totalStudents}</span>
                <span> {teacher.averageRating}</span>
                <span> {teacher.totalCourses}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
