import { Plus } from "lucide-react";
import { useState } from "react";

const CourseCurriculum = () => {
  const [modules, setModules] = useState([
    {
      moduleName: "",
      lessons: [{ title: "", videoUrl: "", videoDuration: 0 }],
    },
  ]);

  const addModule = () => {
    setModules([
      ...modules,
      { moduleName: "", lessons: [{ title: "", videoUrl: "" }] },
    ]);
  };

  const removeModule = (moduleIndex) => {
    const updated = modules.filter((_, idx) => idx !== moduleIndex);
    setModules(updated);
  };

  const addLesson = (moduleIndex) => {
    const updated = [...modules];
    updated[moduleIndex].lessons.push({ title: "", videoUrl: "" });
    setModules(updated);
  };

  const removeLesson = (moduleIndex, lessonIndex) => {
    const updated = [...modules];
    updated[moduleIndex].lessons = updated[moduleIndex].lessons.filter(
      (_, idx) => idx !== lessonIndex
    );
    setModules(updated);
  };
  return (
    <div className="p-5 space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-2xl text-red-500">
            Chương trình giảng dạy
          </div>
          <div className="text-gray-500">
            Tổ chức nội dung khóa học của bạn thành các chương và bài học
          </div>
        </div>
        <div className="flex gap-4">
          <div
          onClick={addModule}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-2xl font-semibold flex items-center gap-2"
        >
          <Plus size={16} />
          Thêm
        </div>
         <div className="bg-red-500 hover:bg-red-600 text-white font-semibold p-2 rounded-2xl px-5">
            Lưu
          </div>
        </div>
      </div>

      <div>
        {modules.map((module, mIndex) => (
          <div className="border border-red-200 rounded-2xl p-4 mt-6">
            <div className="flex gap-2 items-center">
              <div className="font-semibold text-sm whitespace-nowrap">
                Chương {mIndex + 1}:
              </div>
              <input
                type="text"
                className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                placeholder="Tên chương"
                name="chapterTitle"
                value={module.moduleName}
                onChange={(e) => {
                  const updated = [...modules];
                  updated[mIndex].moduleName = e.target.value;
                  setModules(updated);
                }}
              />
              <div
                onClick={() => removeModule(mIndex)}
                className="hover:bg-red-200 p-2 rounded-sm my-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="red"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18 6L6 18M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-4 pl-10 space-y-4">
              {module.lessons.map((lesson, lIndex) => (
                <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                  <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                    {lIndex + 1}.
                  </div>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="Tên bài học"
                    name="lessonTitle"
                    value={lesson.title}
                    onChange={(e) => {
                      const updated = [...modules];
                      updated[mIndex].lessons[lIndex].title = e.target.value;
                      setModules(updated);
                    }}
                  />
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="Video URL"
                    name="videoURL"
                    onChange={(e) => {
                      const updated = [...modules];
                      updated[mIndex].lessons[lIndex].videoUrl = e.target.value;
                      setModules(updated);
                    }}
                  />
                  <div
                    onClick={() => removeLesson(mIndex, lIndex)}
                    className="hover:bg-red-200 p-2 rounded-sm my-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="red"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M18 6L6 18M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              ))}

              <div
                onClick={() => addLesson(mIndex)}
                className="  text-red-500 rounded-2xl font-semibold flex items-center gap-2"
              >
                <Plus size={16} />
                Thêm bài học
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;
