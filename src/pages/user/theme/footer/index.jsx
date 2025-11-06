import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-12 mb-12 text-left">
          <div>
            <h4 className="font-semibold text-white mb-4">Khóa học</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to={ROUTERS.USER.LOGINPAGE}
                  className="hover:text-white transition"
                >
                  Lập trình 1233
                </Link>
              </li>
              <li>
                <a href="/login" className="hover:text-white transition">
                  Thiết kế
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kinh doanh
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Pháp lý</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Điều khoản
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Quyền riêng tư
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          &copy; 2025 Thăng Long University.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
