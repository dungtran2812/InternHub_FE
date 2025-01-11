import {  Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";
import Home from "@/containers/HomeLayout/Home/Home";
import CompanyLayout from "@/containers/CompanyDashboard/CompanyLayout";
import CompanyHome from "@/containers/CompanyDashboard/CompanyHome/CompanyHome";
import AboutUsPage from "@/containers/AboutUs/AboutUs";
import BlogPage from "@/containers/BlogPage/BlogPage";
import CompanyList from "@/containers/CompanyList/CompanyList";
import Login from "@/containers/Authentication/Login";

//luồng ruoting chính sẽ là component này
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/company-list" element={<CompanyList />}/>
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