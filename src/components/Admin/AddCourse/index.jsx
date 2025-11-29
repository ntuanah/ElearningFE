import { Book, Clock, Plus, Users } from "lucide-react";

const AddCourse = ({ onClose }) => {
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
          <button className="font-bold text-2xl text-red-500">Add Course</button>
          <div className="bg-red-500 hover:bg-red-600 text-white font-semibold p-2 rounded-2xl">
            Save Course
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="border border-red-200 rounded-2xl p-4 space-y-4">
              <div className="font-bold text-red-500 text-2xl">
                Basic Information
              </div>
              <div>
                <div>
                  <div className="text-l font-bold">Course Title</div>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="course title"
                    name="courseTitle"
                  />
                </div>

                <div>
                  <div className="text-l font-bold">Subtitle</div>
                  <textarea
                    rows={5}
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="course subtitle"
                    name="courseSubtitle"
                  />
                </div>

                <div>
                  <div className="text-l font-bold">Course Description</div>
                  <textarea
                    rows={5}
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="course description"
                    name="courseDescription"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-l font-bold">Category</div>
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
                          Select category
                        </option>
                        <option value="web">Web Development</option>
                        <option value="react">React</option>
                        <option value="python">Python</option>
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

                  <div className="flex-1">
                    <div className="text-l font-bold">Level</div>
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
                          Beginner
                        </option>
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

                <div className="">
                  <div className="text-l font-bold">Price</div>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="course price"
                    name="coursePrice"
                  />
                </div>
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-6">
              <div className="flex justify-between items-center">
                <div className="font-bold text-red-500 text-xl">
                  Course Content
                </div>
                <div className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-2xl font-semibold flex items-center gap-2">
                  <Plus size={16} />
                  Chapter
                </div>
              </div>

              <div>
                <div className="border border-red-200 rounded-2xl p-4 mt-6">
                  <div className="flex gap-2 items-center">
                    <div className="font-semibold text-sm whitespace-nowrap">
                      Chapter 1:
                    </div>
                    <input
                      type="text"
                      className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                      placeholder="Chapter Title"
                      name="chapterTitle"
                    />
                    <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        1.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        2.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        3.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                    <div className="  text-red-500 rounded-2xl font-semibold flex items-center gap-2">
                      <Plus size={16} />
                      Add Lesson
                    </div>
                  </div>
                </div>

                <div className="border border-red-200 rounded-2xl p-4 mt-6">
                  <div className="flex gap-2 items-center">
                    <div className="font-semibold text-sm whitespace-nowrap">
                      Chapter 2:
                    </div>
                    <input
                      type="text"
                      className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                      placeholder="Chapter Title"
                      name="chapterTitle"
                    />
                    <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        1.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        2.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        3.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                    <div className="  text-red-500 rounded-2xl font-semibold flex items-center gap-2">
                      <Plus size={16} />
                      Add Lesson
                    </div>
                  </div>
                </div>

                <div className="border border-red-200 rounded-2xl p-4 mt-6">
                  <div className="flex gap-2 items-center">
                    <div className="font-semibold text-sm whitespace-nowrap">
                      Chapter 3:
                    </div>
                    <input
                      type="text"
                      className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                      placeholder="Chapter Title"
                      name="chapterTitle"
                    />
                    <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        1.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        2.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
                    <div className="flex gap-2 items-center rounded-2xl bg-red-50 p-2">
                      <div className=" text-sm whitespace-nowrap pr-5 pl-2">
                        3.
                      </div>
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Lesson Title"
                        name="lessonTitle"
                      />
                      <input
                        type="text"
                        className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                        placeholder="Video URL"
                        name="videoURL"
                      />
                      <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                    <div className="  text-red-500 rounded-2xl font-semibold flex items-center gap-2">
                      <Plus size={16} />
                      Add Lesson
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-red-200 rounded-2xl p-4 mt-6">
              <div className="flex justify-between items-center">
                <div className="font-bold text-red-500 text-xl">
                  What Students Will Learn
                </div>
                <div className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-2xl font-semibold flex items-center gap-2">
                  <Plus size={16} />
                  Add
                </div>
              </div>
              <div>
                <div className="flex gap-2 mt-5">
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="What Students Will Learn"
                    name="whatStudentsWillLearn"
                  />
                  <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                <div className="flex gap-2 mt-5">
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="What Students Will Learn"
                    name="whatStudentsWillLearn"
                  />
                  <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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

                <div className="flex gap-2 mt-5">
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="What Students Will Learn"
                    name="whatStudentsWillLearn"
                  />
                  <div className="hover:bg-red-200 p-2 rounded-sm my-auto">
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
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="border border-red-200 rounded-2xl p-4">
              <div className="font-bold text-red-500 text-xl">Course Image</div>
              <input
                type="text"
                className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                placeholder="course image URL"
                name="courseImage"
              />
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

export default AddCourse;
