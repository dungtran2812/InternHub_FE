import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
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
