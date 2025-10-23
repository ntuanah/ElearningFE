import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Logo from "../../../../assets/user/Logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 border-b border-red-200 shadow-md shadow-red-50">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-4 py-3">
        <div className="">
          <img
            src={Logo}
            alt=""
            className="w-[160px] h-[60px] cursor-pointer"
          />
        </div>
        <div className="flex items-center w-full border border-red-400 rounded-full px-3 py-4 hover:bg-red-50 focus-within:!bg-white focus-within:ring-2 focus-within:ring-red-500 mx-4 cursor-pointer ">
          <Search className="text-gray-500 me-2 " size={18} />
          <input
            type="text"
            placeholder="Tìm kiếm nội dung bất kỳ"
            className="flex-1 outline-none text-sm"
          />
        </div>
        <div className="flex space-x-2 items-center">
          <div className="me-5 px-3 py-3 rounded-md hover:bg-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FF6367"
                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
              />
            </svg>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="font-bold px-5 py-3 border border-red-400 rounded-md text-sm hover:bg-red-50 hover:border-red-500 whitespace-nowrap cursor-pointer hover:scale-[1.05] transition-all"
          >
            Đăng nhập
          </button>
          <button
            onClick={() => navigate("/register")}
            className="font-bold px-5 py-3 bg-red-500 text-white rounded-md text-sm hover:bg-red-400 border whitespace-nowrap cursor-pointer hover:scale-[1.05] transition-all"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
