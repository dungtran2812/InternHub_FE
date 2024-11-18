import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../containers/HomeLayout/HomeLayout";

//luồng ruoting chính sẽ là component này
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {/* <Route/>
        <Route/>
        <Route/> */}
      </Route>
    </Routes>
  )
}

export default AppRoutes;