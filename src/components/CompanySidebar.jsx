import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import internText from "@/assets/interntext.png";
import internLogo from "@/assets/internlogo.png";
import homeIcon from "@/assets/homeicon.svg";
import applicationIcon from "@/assets/appMng.svg";
import internEvaluate from "@/assets/internEvaluate.svg";
import salesIcon from "@/assets/sales.svg";
import feedbackIcon from "@/assets/feedback.svg";
import postInternship from "@/assets/postinternship.svg";
import logouticon from "@/assets/logouticon.svg";
const CompanySidebar = () => {
  const sidebarItems = [
    { label: "Home", href: "/", icon: homeIcon },
    { label: "Post internship recruitment", href: "/post-recruitment", icon: postInternship },
    { label: "Manage applications", href: "/manage-applications", icon: applicationIcon },
    { label: "Internship Evaluation", href: "/evaluation", icon: internEvaluate },
    { label: "Interns Feedback", href: "/feedback", icon: feedbackIcon },
    { label: "Buy Plan", href: "/plans", icon: salesIcon },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#1E34C0] text-white">
      {/* Logo Section */}
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-[44px] w-[44px]">
            <img src={internLogo} alt="Intern Logo" className="h-full w-full object-contain" />
          </div>
          <div className="h-[65px] w-[107px]">
            <img src={internText} alt="Intern Text" className="h-full w-full object-contain" />
          </div>
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
                "transition-colors hover:bg-white hover:text-[#1E34C0] group",
                "focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              )}
            >
              <img 
                src={item.icon} 
                alt={item.label} 
                className="h-6 w-6 [filter:brightness(1)] group-hover:[filter:brightness(0)_saturate(100%)_invert(12%)_sepia(88%)_saturate(4907%)_hue-rotate(235deg)_brightness(86%)_contrast(94%)]" 
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
              "flex items-center space-x-3 rounded-md px-4 py-3 group",
              "text-sm font-medium",
              "transition-colors hover:bg-white hover:text-[#1E34C0]",
              "focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            )}
          >
            <img 
              src={logouticon} 
              alt="Logout" 
              className="h-6 w-6 [filter:brightness(1)] group-hover:[filter:brightness(0)_saturate(100%)_invert(12%)_sepia(88%)_saturate(4907%)_hue-rotate(235deg)_brightness(86%)_contrast(94%)]"
            />
            <span>Log out</span>
          </Link>
        </div>
      </nav>

      {/* Copyright */}
      <div className="mt-auto p-4 text-xs text-blue-200 text-center">
        Copyright © Limited Liability Company KALOCS
      </div>
    </aside>
  );
};

export default CompanySidebar;