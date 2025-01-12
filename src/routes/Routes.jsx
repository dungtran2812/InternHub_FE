import {  Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";
import Home from "@/containers/HomeLayout/Home/Home";
import CompanyLayout from "@/containers/CompanyDashboard/CompanyLayout";
import CompanyHome from "@/containers/CompanyDashboard/CompanyHome/CompanyHome";
import AboutUsPage from "@/containers/AboutUs/AboutUs";
import BlogPage from "@/containers/BlogPage/BlogPage";
import Login from "@/containers/Authentication/Login";
import SignUp from "@/containers/Authentication/SignUp";

//luồng ruoting chính sẽ là component này
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route/>
        <Route/>
      </Route >
      <Route path="/company" element={<CompanyLayout />}>
        <Route path="/company" element={<CompanyHome />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;