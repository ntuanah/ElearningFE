import { memo } from "react";

const ModalUpdateCategory = ({onClose}) => {
    return <div
      className="fixed inset-0 bg-red/40 backdrop-blur-sm flex items-center justify-center py-10 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-1/2  border border-red-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="font-bold text-2xl text-red-500 whitespace-nowrap">
            Cập nhật danh mục
          </div>
        </div>
        <div>
          <div>
            <label className="text-l font-bold">Tên danh mục</label>
            <input
              type="text"
              
              className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
              placeholder="Nhập tên danh mục cha"
              name="parentCategoryName"
            />
          </div>

          <div className="ms-5">
            <input
              type="text"
              
              className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
              placeholder="Nhập tên danh mục con"
              name="subcategoryName"
            />
            <input
              type="text"
              
              className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
              placeholder="Nhập tên danh mục con"
              name="subcategoryName"
            />
          </div>

        </div>
        <div className="flex gap-2 justify-end mt-6">
          <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-2xl">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
};

export default memo(ModalUpdateCategory);