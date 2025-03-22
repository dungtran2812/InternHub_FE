import { Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";
import Home from "@/containers/HomeLayout/Home/Home";
import AboutUsPage from "@/containers/AboutUs/AboutUs";
import BlogPage from "@/containers/BlogPage/BlogPage";
import CompanyList from "@/containers/CompanyList/CompanyList";
import Login from "@/containers/Authentication/Login";
import SignUp from "@/containers/Authentication/SignUp";
import EmployeeProfile from "@/containers/EmployeeProfile/EmployeeProfile";
import Dashboard from "@/containers/Admin/Dashborad/Dashboard";
import AdminLayout from "@/containers/Admin/AdminLayout/AdminLayout";
import ManageUserAccount from "@/containers/Admin/ManageUserAccount/ManageUserAccount";
import RecruiterRegister from "@/containers/Authentication/RecruiterAuth/RecruiterRegister";
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
import RecruiterDetail from "@/containers/RecruiterDashboard/RecruiterDetail/RecruiterDetail";
import OAuth2RedirectHandler from "@/components/OAuth2RedirectHandler";
import CreateCV from "@/containers/CreateCV";
import JobDetail from "@/containers/JobDetail/JobDetail";
import PrivateRoleBasedRoute from "./PrivateRoleBasedRoute";
import RecruiterHome from "@/containers/RecruiterDashboard/RecruiterHome/RecruiterHome";
import RecruiterLayout from "@/containers/RecruiterDashboard/RecruiterLayout";
import RecruiterProfileSetting from "@/containers/RecruiterProfileSetting/RecruiterProfileSetting";
import JobPostPage from "@/containers/JobPostPage/JobPostPage";
import BecomePremium from "@/containers/BecomePremium/BecomePremium";
import PaymentSuccess from "@/containers/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "@/containers/PaymentFailed/PaymentFailed";
import ManageJob from "@/containers/RecruiterDashboard/ManageJob/ManageJob";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recruiter-register" element={<RecruiterRegister />} />

      {/* Home Layout Routes */}
      <Route path="/payment/" element={<HomeLayout />}>
        <Route path="success" element={<PaymentSuccess />} />
        <Route path="failed" element={<PaymentFailed />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="job-search" element={<JobSearchPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="companies" element={<CompanyList />} />
        <Route path="employee-profile" element={<EmployeeProfile />} />
        <Route path="company/:id" element={<RecruiterDetail />} />
        <Route path="job-detail/:id" element={<JobDetail />} />
        <Route path="create-cv" element={<CreateCV />} />
        <Route path="become-premium" element={<BecomePremium />} />
      </Route>

      {/* Protected Admin Routes */}
      <Route
        element={
          <PrivateRoleBasedRoute
            path="/admin"
            requiredRoles={["ADMIN"]}
            Component={AdminLayout}
          />
        }
      >
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/manage-users" element={<ManageUserAccount />} />
      </Route>

      {/* Protected Recruiter Routes */}
      <Route
        element={
          <PrivateRoleBasedRoute
            path="/recruiter"
            requiredRoles={["RECRUITER"]}
            Component={RecruiterLayout}
          />
        }
      >
        <Route path="/recruiter" element={<RecruiterHome />} />
        <Route path="/recruiter/create-job" element={<JobPostPage />} />
        <Route path="/recruiter/recruiter-profile" element={<RecruiterProfileSetting />} />
        <Route path="/recruiter/manage-applications" element={<ManageApplication />} />
        <Route path="/recruiter/manage-intern-feedbacks" element={<ManageInternFeedback />} />
        <Route path="/recruiter/manage-jobs" element={<ManageJob />} />
      </Route>

      {/* Protected University Routes */}
      <Route
        element={
          <PrivateRoleBasedRoute
            path="/university"
            requiredRoles={["UNIVERSITY"]}
            Component={UniversityLayout}
          />
        }
      >
        <Route path="/university" element={<UniversityHomePage />} />
        <Route path="/university/manage-job-post" element={<UniversityManageJobPost />} />
        <Route path="/university/evaluation" element={<InternshipEvaluation />} />
        <Route path="/university/job-post-detail" element={<JobPostDetail />} />
        <Route path="/university/feedback" element={<UniversityInternFeedback />} />
        <Route path="/university/manage-intern" element={<ManageIntern />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;