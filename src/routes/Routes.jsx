import { Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";
import Home from "@/containers/HomeLayout/Home/Home";
import CompanyLayout from "@/containers/RecruiterDashboard/CompanyLayout";
import CompanyHome from "@/containers/RecruiterDashboard/RecruiterHome/RecruiterHome";
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
// import ManageApplication from "@/containers/CompanyDashboard/ManagaApplication/ManagaApplication";
// import ManageInternFeedback from "@/containers/CompanyDashboard/ManageInternFeedback/ManageInternFeedback";
import UniversityLayout from "@/containers/University/UniversityLayout/UniversityLayout";
import UniversityHomePage from "@/containers/University/Home/Home";
import ManageApplication from "@/containers/RecruiterDashboard/ManagaApplication/ManagaApplication";
import ManageInternFeedback from "@/containers/RecruiterDashboard/ManageInternFeedback/ManageInternFeedback";
import UniversityManageJobPost from "@/containers/University/ManageJobPost/ManageJobPost";
import InternshipEvaluation from "@/containers/University/InternshipEvaluation/InternshipEvaluation";
import JobPostDetail from "@/containers/University/JobPostDetail/JobPostDetail";
import UniversityInternFeedback from "@/containers/University/InternFeedback/InternFeedback";
import ManageIntern from "@/containers/University/ManageIntern/ManageIntern";
import JobSearchPage from "@/containers/JobSearchPage/JobSearchPage";
import CompanyDetail from "@/containers/CompanyDetail/CompanyDetail";
import RecruiterDetail from "@/containers/RecruiterDashboard/RecruiterDetail/RecruiterDetail";
import OAuth2RedirectHandler from "@/components/OAuth2RedirectHandler";
import CreateCV from "@/containers/CreateCV";
import JobDetail from "@/containers/JobDetail/JobDetail";
//luồng ruoting chính sẽ là component này
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recruiter-register" element={<RecruiterRegister />} />
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/job-search" element={<JobSearchPage />}/>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        {/* <Route path="/job-detail" element={<CompanyProfile />} /> */}
        <Route path="/company-detail" element={<RecruiterDetail />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/create-cv" element={<CreateCV />} />
        <Route />
        <Route />
      </Route >
      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="manage-users" element={<ManageUserAccount />} />

      </Route>
      {/* Recruiter */}
      <Route path="/recruiter" element={<CompanyLayout />}>
        <Route path="/recruiter" element={<CompanyHome />} />
        <Route path="/recruiter/manage-applications" element={<ManageApplication />} />
        <Route path="/recruiter/manage-intern-feedbacks" element={<ManageInternFeedback />} />
       
      </Route>
      <Route path="/university" element={<UniversityLayout />}>
        <Route path="/university" element={<UniversityHomePage />} />
        <Route path="/university/manage-job-post" element={<UniversityManageJobPost />} />
        <Route path="/university/evaluation" element={<InternshipEvaluation />} />
        <Route path="/university/job-post-detail" element={<JobPostDetail />} />
        <Route path="/university/feedback" element={<UniversityInternFeedback />} />
        <Route path="/university/manage-intern" element={<ManageIntern />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;