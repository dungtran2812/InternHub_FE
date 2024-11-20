import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";
import Home from "@/containers/HomeLayout/Home/Home";
import CompanyLayout from "@/containers/CompanyDashboard/CompanyLayout";
import CompanyHome from "@/containers/CompanyDashboard/CompanyHome/CompanyHome";

//luồng ruoting chính sẽ là component này
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />}/>
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