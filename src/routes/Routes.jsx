import { Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";
import Home from "@/containers/HomeLayout/Home/Home";
import CompanyLayout from "@/containers/CompanyDashboard/CompanyLayout";
import CompanyHome from "@/containers/CompanyDashboard/CompanyHome/CompanyHome";
import AboutUsPage from "@/containers/AboutUs/AboutUs";
import BlogPage from "@/containers/BlogPage/BlogPage";
import CompanyList from "@/containers/CompanyList/CompanyList";
import Login from "@/containers/Authentication/Login";
import SignUp from "@/containers/Authentication/SignUp";
import CompanyProfile from "@/containers/CompanyProfile/CompanyProfile";
import EmployeeProfile from "@/containers/EmployeeProfile/EmployeeProfile";
import Dashboard from "@/containers/Admin/Dashborad/Dashboard";
import AdminLayout from "@/containers/Admin/AdminLayout/AdminLayout";
import ManageUserAccount from "@/containers/Admin/ManageUserAccount/ManageUserAccount";
import RecruiterRegister from "@/containers/Authentication/RecruiterAuth/RecruiterRegister";


//luồng ruoting chính sẽ là component này
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/recruiter-register" element={<RecruiterRegister />}/>
      <Route path="/" element={<HomeLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route />
        <Route />
      </Route >
      {/* Admin */}
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/manage-users" element={<ManageUserAccount />} />
      </Route>
      {/* Company */}
      <Route path="/company" element={<CompanyLayout />}>
        <Route path="/company" element={<CompanyHome />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;