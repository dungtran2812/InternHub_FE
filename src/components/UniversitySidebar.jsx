import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import internText from "@/assets/orgLogo/interntext.png";
import internLogo from "@/assets/orgLogo/internlogoWhite.png";
import homeIcon from "@/assets/sidebarIcon/homeicon.svg";
import applicationIcon from "@/assets/sidebarIcon/appMng.svg";
import logoutIcon from "@/assets/logouticon.svg";
import feedback from "@/assets/sidebarIcon/feedback.svg";
// import review from "@/assets/sidebarIcon/review.svg";
// import salesIcon from "@/assets/sidebarIcon/sales.svg";
import internEvaluate from "@/assets/sidebarIcon/internEvaluate.svg";
const UniversitySidebar = () => {
  const sidebarItems = [
    { label: "Trang chủ", href: "/university", icon: homeIcon },
    { label: "Quản lý tin tuyển dụng", href: "/university/manage-job-post", icon: applicationIcon },
    { label: "Đánh giá thực tập sinh", href: "/university/evaluation", icon: internEvaluate },
    { label: "Phản hồi từ thực tập sinh", href: "/university/feedback", icon: feedback },
    // { label: "Mua gói", href: "/university/plans", icon: salesIcon },
    // { label: "Quản lý phản hồi của thực tập sinh", href: "/university/manage-intern-feedbacks", icon: review },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#1E34C0] text-white">
      {/* Logo Section */}
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={internLogo} alt="Intern Hub" className="w-12 h-12 object-contain" />
          <img src={internText} alt="Intern Hub Text" className="w-28 h-16 object-contain" />
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col px-2">
        {/* Main navigation items */}
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-md px-4 py-3",
                "text-sm font-medium",
                "transition-colors hover:bg-[#FFFFFF] hover:text-[#1E34C0]",
                "focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400",
                "group"
              )}
            >
              <img 
                src={item.icon} 
                alt={item.label} 
                className="h-6 w-6 [filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)_saturate(100%)_invert(11%)_sepia(82%)_saturate(3825%)_hue-rotate(232deg)_brightness(94%)_contrast(102%)]" 
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Logout button with margin-top for spacing */}
        <div className="mt-8">
          <Link
            to="/logout"
            className={cn(
              "flex items-center space-x-3 rounded-md px-4 py-3",
              "text-sm font-medium",
              "transition-colors hover:bg-[#FFFFFF] hover:text-[#1E34C0]",
              "focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400",
              "group"
            )}
          >
            <img 
              src={logoutIcon} 
              alt="Đăng xuất" 
              className="h-6 w-6 [filter:brightness(0)_invert(1)] group-hover:[filter:brightness(0)_saturate(100%)_invert(11%)_sepia(82%)_saturate(3825%)_hue-rotate(232deg)_brightness(94%)_contrast(102%)]" 
            />
            <span>Đăng xuất</span>
          </Link>
        </div>
      </nav>

      {/* Copyright */}
      <div className="p-4 text-xs text-blue-200 text-center">
        Bản quyền © Công ty TNHH KALOCS
      </div>
    </aside>
  );
};

export default UniversitySidebar;
