import CompanyJobCard from "@/components/CompanyDetail/CompanyJobCard"
import { Link } from "react-router-dom"

const CompanyDetail = () => {
    return (
        <div>
            <img src="https://images02.vietnamworks.com//companyprofile/VPBANK/vi/noi_lam_viec_hanh_phuc_nhat_2019_-2-02_1_.jpg" alt="
                                                            Tìm việc làm tại Ngân Hàng TMCP Việt Nam Thịnh Vượng - VP Bank
            "></img>
            <div className="border-black border-t-2 border-b-2 py-3">
                <div className="container mx-auto px-5 grid grid-cols-12 gap-10">
                    <div className="col-span-2">
                        <img src="https://images02.vietnamworks.com//companyprofile/vpbank/en/LOGO_480-480.png?v=1731650499" alt="" />
                    </div>
                    <div className="col-span-8">
                        <div className="text-3xl">
                            {CompanyData.name}
                        </div>
                        <div className="flex mt-2 gap-5">
                            <div className="">
                                {CompanyData.location}
                            </div>
                            <div>|</div>
                            <div className="text-green-500">
                                <Link to={CompanyData.link}>{CompanyData.link}</Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            Banking
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Folow {"(" + CompanyData.folow_number + ")"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-10 text-center text-green-500">
                {CompanyData.job_number} Jobs are opening. <span className="font-semibold">View all jobs</span>
            </div>
            <div className="container mx-auto ">
                <div className="border border-solid p-10 rounded-lg">
                    <div className="mt-10 text-3xl font-semibold">
                        We Have 11 Jobs For You
                    </div>
                    <div className="mt-10">
                        <CompanyJobCard
                            img={"https://images.vietnamworks.com/pictureofcompany/89/11125541.png"}
                            job_title={"PM Dự Án (Hệ Thống Quản Lý Hồ Sơ Cứng) - Khối Vận Hành"}
                            link={"Https://tuyendung.vpbank.com.vn/"}
                            company_name={"VPBank"}
                            salary={0}
                            location={"Ha Noi"}
                            updatedAt={"20/11/2024"}
                        />
                        <CompanyJobCard
                            img={"https://images.vietnamworks.com/pictureofcompany/89/11125541.png"}
                            job_title={"PM Dự Án (Hệ Thống Quản Lý Hồ Sơ Cứng) - Khối Vận Hành"}
                            link={"Https://tuyendung.vpbank.com.vn/"}
                            company_name={"VPBank"}
                            salary={0}
                            location={"Ha Noi"}
                            updatedAt={"20/11/2024"}
                        />
                        <CompanyJobCard
                            img={"https://images.vietnamworks.com/pictureofcompany/89/11125541.png"}
                            job_title={"PM Dự Án (Hệ Thống Quản Lý Hồ Sơ Cứng) - Khối Vận Hành"}
                            link={"Https://tuyendung.vpbank.com.vn/"}
                            company_name={"VPBank"}
                            salary={0}
                            location={"Ha Noi"}
                            updatedAt={"20/11/2024"}
                        />
                        <CompanyJobCard
                            img={"https://images.vietnamworks.com/pictureofcompany/89/11125541.png"}
                            job_title={"PM Dự Án (Hệ Thống Quản Lý Hồ Sơ Cứng) - Khối Vận Hành"}
                            link={"Https://tuyendung.vpbank.com.vn/"}
                            company_name={"VPBank"}
                            salary={0}
                            location={"Ha Noi"}
                            updatedAt={"20/11/2024"}
                        />
                        <CompanyJobCard
                            img={"https://images.vietnamworks.com/pictureofcompany/89/11125541.png"}
                            job_title={"PM Dự Án (Hệ Thống Quản Lý Hồ Sơ Cứng) - Khối Vận Hành"}
                            link={"Https://tuyendung.vpbank.com.vn/"}
                            company_name={"VPBank"}
                            salary={0}
                            location={"Ha Noi"}
                            updatedAt={"20/11/2024"}
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="py-20 text-3xl text-center">
                    Our Office
                </div>
                <div className="grid grid-cols-3 gap-10 container mx-auto">
                    <img src={CompanyData.our_company_image[0]} alt="" />
                    <img src={CompanyData.our_company_image[1]} alt="" />
                    <img src={CompanyData.our_company_image[2]} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-10 container mx-auto mt-10">
                    <img src={CompanyData.our_company_image[3]} alt="" />
                    <div className="bg-green-900 p-5 text-white">
                        <div className="text-3xl">
                            ADDRESS
                        </div>
                        <div className="mt-5">
                            {CompanyData.address.map((item) => (
                                <>
                                    {item}
                                </>
                            ))}
                        </div>
                    </div>
                    <img src={CompanyData.our_company_image[4]} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-10 container mx-auto mt-10">
                    <img src={CompanyData.our_company_image[5]} alt="" />
                    <img src={CompanyData.our_company_image[5]} alt="" />
                    <img src={CompanyData.our_company_image[7]} alt="" />
                </div>
            </div>
        </div>
    )
}

const CompanyData = {
    name: "Ngân Hàng TMCP Việt Nam Thịnh Vượng - VP Bank",
    location: "Hà Nội",
    catefory: "Banking",
    link: "https://tuyendung.vpbank.com.vn/",
    folow_number: "1234",
    job_number: "11",
    address: ["Tại Hà Nội: Số 89 Láng Hạ, Đống Đa, Hà Nội", "Tại TP. Hồ Chí Minh: 1 – 1A – 2 Tôn Đức Thắng, P. Bến Nghé, Quận 1, TP. Hồ Chí Minh"],
    our_company_image: [
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
        "https://images02.vietnamworks.com//companyprofile/VPBANK/vi/1_1_.jpg",
    ]
}

export default CompanyDetail
