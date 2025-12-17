import { useState } from "react";
import * as categoryService from "../../../../service/CategoryService";
import { useEffect } from "react";

const CourseSetting = () => {
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFree, setIsFree] = useState(false);

  const renderTreeOptions = (nodes, level = 0) => {
    return nodes.flatMap((node) => [
      <option key={node.id} value={node.id} style={{ whiteSpace: "pre" }}>
        {`${"   ".repeat(level)}${level > 0 ? "↳ " : ""}${node.name}`}
      </option>,
      ...renderTreeOptions(node.children || [], level + 1),
    ]);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const res = await categoryService.getCategoryTree();

      setCategories(res.data || []);
    };
    loadCategories();
  }, []);

  return (
    <div className="p-5 space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-2xl text-red-500">
            Cài đặt khóa học
          </div>
          <div className="text-gray-500">
            Cập nhật thông tin chi tiết và giá khóa học của bạn
          </div>
        </div>
        <div className="bg-red-500 hover:bg-red-600 text-white font-semibold p-2 rounded-2xl px-5">
          Lưu
        </div>
      </div>

      <div>
        <div>
          <div className="text-l font-bold">Ảnh</div>
          <input
            type="text"
            className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
            placeholder="URL ảnh"
            name="courseTitle"
          />
        </div>

        <div>
          <div className="text-l font-bold">Tên khoá học</div>
          <input
            type="text"
            className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
            placeholder="Tên khoá học"
            name="courseTitle"
          />
        </div>

        <div>
          <div className="text-l font-bold">Mô tả ngắn</div>
          <textarea
            rows={5}
            type="text"
            className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
            placeholder="Mô tả ngắn"
            name="shortDescription"
          />
        </div>

        <div>
          <div className="text-l font-bold">Mô tả khoá học</div>
          <textarea
            rows={5}
            type="text"
            className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
            placeholder="Mô tả khoá học"
            name="courseDescription"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <div className="text-l font-bold">Danh mục</div>
            <div className="relative">
              <div className="relative mt-2 mb-4">
                <div
                  onClick={() => setOpenCategory((prev) => !prev)}
                  className="w-full border border-red-500 rounded-xl py-3 px-4 cursor-pointer bg-white"
                >
                  {selectedCategory?.name || "Select category"}
                </div>
                {openCategory && (
                  <div className="absolute z-20 w-full bg-white border border-red-300 rounded-xl mt-2 shadow-lg max-h-64 overflow-auto">
                    {categories.map((cat) => (
                      <div key={cat.id}>
                        <div
                          className="px-4 py-2 hover:bg-red-50 cursor-pointer"
                          onClick={() => {
                            setSelectedCategory({
                              ...cat,
                              parent: null,
                            });
                            setOpenCategory(false);
                          }}
                        >
                          {cat.name}
                        </div>

                        {cat.children?.map((child) => (
                          <div
                            key={child.id}
                            className="pl-8 px-4 py-2 hover:bg-red-50 cursor-pointer text-gray-700"
                            onClick={() => {
                              setSelectedCategory({
                                ...child,
                                parent: cat,
                              });
                              setOpenCategory(false);
                            }}
                          >
                            {child.name}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 27 27"
                >
                  <path
                    fill="currentColor"
                    d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-l font-bold">Cấp độ</div>
            <div className="relative">
              <select
                className="
                        w-full
                        border
                        border-red-500
                        rounded-xl
                        py-3
                        px-4
                        mt-2
                        mb-4
                        text-black
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-400
                        appearance-none
    "
              >
                <option value="" disabled selected>
                   -- Chọn level --
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 27 27"
                >
                  <path
                    fill="currentColor"
                    d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {!isFree && (
          <div className="">
            <div className="text-l font-bold">Giá</div>
            <input
              type="text"
              className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
              placeholder="Giá khoá học"
              name="coursePrice"
            />
          </div>
        )}

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="accent-red-500"
            checked={isFree}
            onChange={(e) => setIsFree(e.target.checked)}
          />
          Miễn phí
        </label>

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="accent-red-500"
          />
          Publish khoá học
        </label>
      </div>
    </div>
  );
};

export default CourseSetting;
