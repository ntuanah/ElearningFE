import { memo } from "react";

const ModalAddCategory = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-red/40 backdrop-blur-sm flex items-center justify-center py-10 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-1/2  border border-red-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="font-bold text-2xl text-red-500">
            Thêm danh mục mới
          </div>
        </div>
        <div>
          <div>
            <label className="text-l font-bold">Tên danh mục</label>
            <input
              type="text"
              className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
              placeholder="Nhập tên danh mục"
              name="courseTitle"
            />
          </div>

          <select
            name=""
            id=""
            className="border border-red-200 rounded-md py-3 px-4 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400 w-full"
          >
            <option value="1">Chọn danh mục</option>
            <option value="1">IP 16</option>
            <option value="1">IP 19</option>
            <option value="1">IP 30</option>
            <option value="1">+ Thêm mới</option>
          </select>
        </div>
        <div className="flex gap-2 justify-end mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-2xl">
            Đóng
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-2xl">
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalAddCategory);
