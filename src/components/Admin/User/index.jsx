import { Edit, Trash2, MoreVertical, Search } from "lucide-react";
import * as userService from "../../../service/admin/userService";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../utils/formatterDate";

const Users = () => {
  const fetchUsers = async () => {
    const data = await userService.getAllUsers();
    return data;
  };

  const { data: users = [] } = useQuery({
    queryKey: ["admin-users"],
    queryFn: fetchUsers,
  });

  console.log(users);
  return (
    <div>
      <div className=" p-4 border-b border-red-200 shadow-sm flex items-center justify-between">
        <div className="font-bold text-2xl text-red-500">All Users</div>
        <div className="flex items-center border border-red-400 rounded-full px-3 py-4 hover:bg-red-50 focus-within:!bg-white focus-within:ring-2 focus-within:ring-red-500 mx-4 cursor-pointer ">
          <Search className="text-gray-500 me-2 " size={18} />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="flex-1 outline-none text-sm"
          />
        </div>
      </div>

      <div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b border-red-200 text-red-400 text-sm">
            <tr>
              <th className="py-3 px-4">USER</th>
              <th className="py-3 px-4">EMAIL</th>
              <th className="py-3 px-4">COURSES</th>

              <th className="py-3 px-4">JOIN</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-red-200">
            {users?.data?.content.map((u) => (
              <tr key={u.id}>
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    src={u.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full border border-red-200"
                  />
                  <span className="font-bold">{u.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-500">{u.email}</td>
                <td className="py-3 px-4 font-semibold">{u.courses}</td>

                <td className="py-3 px-4">{formatDate(u.createdAt)}</td>
                <td className="py-3 px-4">
                  {u.isActive ? (
                    <span>
                      {" "}
                      <span className="px-3 py-1 rounded-full text-green-700 bg-green-100 text-xs font-medium">
                        Active
                      </span>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <span className="px-3 py-1 rounded-full text-red-700 bg-red-100 text-xs font-medium">
                        Inactive
                      </span>
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-3 text-gray-500">
                    <button className="hover:text-red-500">
                      <Edit size={18} />
                    </button>
                    <button className="hover:text-red-500">
                      <Trash2 size={18} />
                    </button>
                    <button className="hover:text-red-700">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
