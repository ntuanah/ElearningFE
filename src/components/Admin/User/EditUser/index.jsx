const EditUser = ({onClose}) => {
    return <div className="fixed inset-0 bg-red/40 backdrop-blur-sm overflow-y-auto flex justify-center py-10 z-50"
      onClick={onClose}>
        <div className="bg-white p-6 rounded-2xl shadow-xl w-5/6 border border-red-200 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
                <div className="text-2xl text-red-500 font-bold">Chỉnh sửa thông tin người dùng</div>
                <div className="bg-red-500 py-2 px-4 font-semibold text-white rounded-2xl hover:bg-red-600">Sửa</div>
            </div>
            <div className="border border-red-200 rounded-2xl p-6 space-y-4">
                <div>
                  <label className="text-l font-bold text-red-500">Ảnh đại diện</label>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="Avatar URL"
                    name="avatar"
                  />
                </div>

                <div>
                  <label className="text-l font-bold text-red-500">Tên người dùng</label>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="Tên người dùng"
                    name="name"
                  />
                </div>

                <div>
                  <label className="text-l font-bold text-red-500">Email</label>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="email"
                    name="email"
                  />
                </div>

                <div>
                  <label className="text-l font-bold text-red-500">Số điện thoại</label>
                  <input
                    type="text"
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="Số điện thoại"
                    name="phone"
                  />
                </div>

                <div>
                  <label className="text-l font-bold text-red-500">Tiểu sử</label>
                  <textarea
                    type="text"
                    rows={3}
                    className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400"
                    placeholder="Tiểu sử"
                    name="bio"
                  />
                </div>

                <div>
                  <label className="text-l font-bold text-red-500">Trạng thái</label>
                    <select className="w-full border border-red-200 rounded-md py-3 pl-6 mt-2 mb-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-400">
                        <option value="active">Active</option>      
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
        
            </div>
        </div>
      </div>
}

export default EditUser;