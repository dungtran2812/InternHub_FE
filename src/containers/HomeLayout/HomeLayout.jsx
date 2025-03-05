import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import { useGetUserInfoQuery } from "@/services/internHubApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAvatar, setEmail, setFullname, setRole, setUserId } from "@/features/user";
import { toast } from "@/hooks/use-toast";

const HomeLayout = () => {
	const dispatch = useDispatch()
	const { data: userInfo } = useGetUserInfoQuery();
	useEffect(() => {
    if (userInfo) {
      dispatch(setEmail(userInfo.email));
      dispatch(setAvatar(userInfo.avtUrl));
      dispatch(setRole(userInfo.role));
      dispatch(setUserId(userInfo.id));
      dispatch(setFullname(userInfo.fullName));

      toast({
        title: 'Đăng Nhập Thành Công',
        description: `Xin chào ${userInfo.fullName}, cảm ơn đã sử dụng dịch vụ của internhub`,
      });
		}}, [dispatch, userInfo])
	return (
		<>
			<Header />
			<Outlet />
			{
				!location.pathname.includes('create-cv') && <Footer />
			}
		</>
	);
};

export default HomeLayout;
