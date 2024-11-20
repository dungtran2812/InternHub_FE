/* eslint-disable react/prop-types */
import CompanySidebar from "@/components/CompanySidebar";
import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const CompanyLayout = () => {
  return (
    <div className="flex h-screen">
      <CompanySidebar />
      <div className="flex flex-1 flex-col">
        {/* <Header /> */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CompanyLayout;