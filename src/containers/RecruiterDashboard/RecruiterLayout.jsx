/* eslint-disable react/prop-types */
import RecruiterSidebar from "@/components/RecruiterSidebar";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const RecruiterLayout = () => {
  return (
    <div className="flex h-screen">
      <RecruiterSidebar />
      <div className="flex flex-1 flex-col">
        {/* <Header /> */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RecruiterLayout;