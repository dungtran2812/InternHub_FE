import CompanyJobCard from "@/components/CompanyDetail/CompanyJobCard";
import VARIABLE from "@/consts/variable";
import { useGetAllJobQuery, useGetJobByIdQuery } from "@/services/internHubApi";
import { CheckOutlined, FieldTimeOutlined, HeartOutlined, DollarOutlined, ScanOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const { data: job, isLoading, isError } = useGetJobByIdQuery(id)
  const { data: jobs } = useGetAllJobQuery("", "", job?.industry?.id, "", "")
  const jobFilterByIndustry = jobs?.filter(item => item?.industry?.id === job?.industry?.id);
  console.log("job: ", job)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-600"></div>
    </div>
  );
  return (
    <div className="mx-">
      <div className="container mx-auto mt-10 justify-items-center">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="border border-solid rounded-xl p-5 w-[800px]">
              <div className="text-2xl font-semibold">
                {job?.jobTitle} <CheckOutlined className="text-blue-600 text-xl" />
              </div>
              <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="flex gap-5">
                  <DollarOutlined className="text-3xl text-blue-600 pb-2" />
                  <div>
                    <div>
                      Mức lương
                    </div>
                    <div>
                      {job?.salary === "0" ?
                        <div className="font-semibold">Thoả thuận</div>
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <svg className="size-9 text-blue-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <div>
                      Địa điểm
                    </div>
                    <div>
                      <div className="font-semibold">{job?.location}</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FieldTimeOutlined className="text-3xl text-blue-600 pb-2" />
                  <div>
                    <div>
                      Kinh nghiệm
                    </div>
                    <div>
                      {job?.exp === "0" ?
                        <div className="font-semibold">{job?.exp}</div>
                        : <div className="font-semibold">2 năm</div>}
                    </div>
                  </div>
                </div>
              </div>
              {/* Ứng tuyển ngay */}
              <div className="grid grid-cols-12 gap-5 mt-5 ">
                <div className="col-span-8">
                  <button className="text-white bg-blue-500 text-lg text-center p-1 w-full rounded-xl">
                    Ứng tuyển ngay
                  </button>
                </div>
                <div className="col-span-4 border border-blue-600 p-1 w-full rounded-xl justify-items-center text-blue-600">
                  <div className="flex gap-5 ">
                    <HeartOutlined />    Đã lưu
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="border boder-solid p-5 rounded-xl w-[800px]">
                <div className="font-semibold text-xl">
                  Chi tiết tin tuyển dụng
                </div>
                {/* Mô tả công việc */}
                <div>
                  <div className="mt-5 font-semibold ">
                    Mô tả công việc
                  </div>
                  <div className="mt-2">
                    {
                      job?.description
                    }
                  </div>
                </div>
                {/* Yêu cầu ứng viên */}
                <div>
                  <div className="mt-5 font-semibold ">
                    Yêu cầu ứng viên
                  </div>
                  <div className="mt-2">
                    {
                      job?.requirement
                    }
                  </div>
                </div>
                {/* Địa điểm làm việc */}
                <div>
                  <div className="mt-5 font-semibold ">
                    Địa điểm làm việc
                  </div>
                  <div className="mt-2">
                    {
                      job?.location
                    }
                  </div>
                </div>
                {/* Cách thức ứng tuyển */}
                <div>
                  <div className="mt-5 font-semibold ">
                    Cách thức ứng tuyển
                  </div>
                  <div className="mt-2">
                    Ứng viên nộp hồ sơ trực tuyến bằng cách bấm <span className="font-semibold">Ứng tuyển</span> ngay dưới đây.
                  </div>
                </div>
                {/* Hạn nộp hồ sơ:*/}
                <div>
                  <div className="mt-5 font-semibold ">
                    Hạn nộp hồ sơ: 06/03/2025
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 w-[350px] mt-5">
                  <div className="">
                    <button className="text-white bg-blue-500 text-lg text-center p-1 w-full rounded-lg">
                      Ứng tuyển ngay
                    </button>
                  </div>
                  <div className=" border border-blue-600 p-1 w-full rounded-lg justify-items-center text-blue-600">
                    <div className="flex gap-5 ">
                      <HeartOutlined />    Đã lưu
                    </div>
                  </div>
                </div>
                {/* Việc làm liên quan */}
                <div>
                  <div className="my-5 text-xl font-semibold">
                    Việc làm liên quan
                  </div>
                  {
                    jobFilterByIndustry?.map((item) => (
                      <div key={item.id}>
                        <CompanyJobCard
                          company_name={item?.company?.name}
                          link={item?.company?.website}
                          location={item?.location}
                          salary={item?.salary === "0" ? <div className="text-blue-600">Thoả thuận</div> : ""}
                          img={item?.company?.logoCompany}
                          job_title={item?.jobTitle}
                          updatedAt={"Cập nhật 5 giờ trước"}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="border border-solid p-5 rounded-xl">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4">
                  <img className="w-[90px] border border-solid rounded-lg" src={job?.company?.logoCompany === "" ? VARIABLE.FPT_IMAGE : job?.company?.logoCompany} alt="" />
                </div>
                <div className="col-span-8">
                  <div>
                    {job?.company?.name}
                  </div>
                </div>
              </div>
              {/* Lĩnh vực */}
              <div className="mt-2.5">
                <div className="flex ">
                  <span>Lĩnh vực: </span>
                  {job?.company?.industries?.length > 0
                    ? job.company.industries.map((item, index) => (
                      <div key={item?.id} className="">
                        {index === 0 ? <div className="ml-2"> {item?.name}</div> : <>, {item?.name}</>}
                      </div>
                    ))
                    : job?.industry?.name && (
                      <div className="ml-1">
                        {job?.industry?.name}
                      </div>
                    )}

                </div>
              </div>
              <div className="mt-2">
                <div className="flex gap-2">
                  <span>Địa điểm: </span>
                  {
                    job?.company?.address
                  }
                </div>
              </div>
              <div className="text-center mt-5">
                <Link to={`/company/${job?.company?.id}`} className="  text-blue-600 ">
                  Xem trang công ty
                </Link>
              </div>
            </div>
            {/* Thông tin chung */}
            <div className="mt-5">
              <div className="border border-solid p-5 rounded-xl">
                <div className="text-xl font-semibold">
                  Thông tin chung
                </div>
                {/* Cấp bậc */}
                <div className="mt-5 flex gap-5">
                  <ScanOutlined className="text-3xl text-blue-600" />
                  <div>
                    <div>
                      Cấp bậc
                    </div>
                    <div className="font-semibold">
                      Nhân viên
                    </div>
                  </div>
                </div>
                {/* Học vấn */}
                <div className="mt-5 flex gap-5">
                  <ScanOutlined className="text-3xl text-blue-600" />
                  <div>
                    <div>
                      Học vấn
                    </div>
                    <div className="font-semibold">
                      Đại Học trở lên
                    </div>
                  </div>
                </div>
                {/* Số lượng tuyển */}
                <div className="mt-5 flex gap-5">
                  <UsergroupAddOutlined className="text-3xl text-blue-600" />
                  <div>
                    <div>
                      Số lượng tuyển
                    </div>
                    <div className="font-semibold">
                      {job?.quantity} người
                    </div>
                  </div>
                </div>
                {/* Hình thức làm việc */}
                <div className="mt-5 flex gap-5">
                  <FieldTimeOutlined className="text-3xl text-blue-600" />
                  <div>
                    <div>
                      Hình thức làm việc
                    </div>
                    <div className="font-semibold">
                      Toàn thời gian
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
