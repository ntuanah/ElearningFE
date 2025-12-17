import { Plus } from "lucide-react";
import { useState } from "react";

const WhatStudentsWillLearn = () => {
  const [willLearn, setWillLearn] = useState([{ text: "" }]);

  const addWillLearn = () => {
    setWillLearn([...willLearn, { text: "" }]);
  };

  const removeWillLearn = (index) => {
    setWillLearn(willLearn.filter((_, idx) => idx !== index));
  };
  return (
    <div className="p-5 space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-2xl text-red-500">
            Học viên sẽ học được
          </div>
          <div className="text-gray-500">
            Danh sách các kết quả học tập chính và các kỹ năng mà học sinh sẽ
            đạt được
          </div>
        </div>
        <div className="flex gap-4">
          <div
          onClick={addWillLearn}
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
        {willLearn.map((item, index) => (
          <div className="flex gap-2 mt-5">
            <input
              type="text"
              className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
              placeholder="Học viên sẽ học được"
              name="whatStudentsWillLearn"
              value={item.text}
              onChange={(e) => {
                const updated = [...willLearn];
                updated[index].text = e.target.value;
                setWillLearn(updated);
              }}
            />
            <div
              onClick={() => removeWillLearn(index)}
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
      </div>
    </div>
  );
};

export default WhatStudentsWillLearn;
