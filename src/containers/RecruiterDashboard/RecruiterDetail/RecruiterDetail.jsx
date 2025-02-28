
import CompanyJobCard from '@/components/CompanyDetail/CompanyJobCard';
import { useGetAllJobQuery, useGetCompanyByIdQuery } from '@/services/internHubApi';
import {
  FlagOutlined, ShareAltOutlined, MoneyCollectOutlined, HeartOutlined, ScheduleOutlined
} from '@ant-design/icons';
import { Carousel } from "flowbite-react";
import { useParams } from 'react-router-dom';
const RecruiterDetail = () => {
  const { id } = useParams();
  const { data: company, isLoading, isError } = useGetCompanyByIdQuery(id)
  const { data: jobs } = useGetAllJobQuery()
  const jobsFilter = jobs?.filter(item => item?.company?.id === id)
  return (
    <div className="mx-5">
      <div className="container mx-auto justify-items-center mt-5">
        <div className="border border-solid p-5 rounded-xl w-[1180px]">
          <div className="">
            <img src={company?.backgroundCompany} className='w-[1138px] h-[350px]' alt="" />
          </div>
          <div className="mt-10 grid grid-cols-12 gap-5">
            <div className="col-span-2">
              <img src={company?.logoCompany} alt="" />
            </div>
            <div className="col-span-7 flex items-center">
              <div>
                <div className="text-xl font-semibold">
                  {company?.name} - {company?.website}
                </div>
                <div className="mt-2">
                  {recruiter_detail.followers}
                </div>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <div>
                <button className="bg-orange-400 rounded-lg px-3 py-2 text-white">Theo dõi</button>
              </div>
              <div>
                <FlagOutlined className="pl-2 text-3xl " />
                <ShareAltOutlined className="pl-2 text-3xl" />
              </div>
            </div>
          </div>
          {/* Về chúng tôi */}
          <div>
            <div className="text-3xl font-semibold mt-10">
              Về chúng tôi
            </div>
            <div className="mt-10 flex gap-2">
              <span className="font-semibold">Lĩnh vực: </span>
              {
                company?.industries?.map((item) => (
                  <div key={item?.id} className="mr-2">
                    {item?.name}
                  </div>
                ))
              }
            </div>
            <div className="mt-2">
              <span className="font-semibold">Liên hệ: </span>
              {recruiter_detail.contact}
            </div>
            <div className="mt-2">
              <span className="font-semibold">Địa chỉ: </span>
              {company?.address}
            </div>
          </div>
          {/*Mô tả */}
          <div className="mt-10">
            {
              company?.description
            }
          </div>
          <div className="mt-10 justify-items-center">
            <Carousel>
              {
                recruiter_detail.company_images.map((item) => (
                  <>
                    <img className="w-[1170px]" src={item} alt="" />
                  </>
                ))
              }
            </Carousel>
          </div>
          {/* Video */}
          <div>
            {recruiter_detail.video != ""
              ? <iframe src={recruiter_detail.video}></iframe>
              : <div className="border border-solid bg-gray-200 mt-10 rounded-xl p-20 flex justify-center items-center">
                <div>
                  Công ty chưa cập nhật video giới thiệu.
                </div>
              </div>
            }
          </div>
          {/* Welfare */}
          <div className='mt-10 text-3xl font-semibold'>
            Phúc lợi
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">

            <div className="w-[377px] border border-solid bg-blue-300 p-10 rounded-xl justify-items-center h-[400px]">
              <div>
                <MoneyCollectOutlined className='text-5xl pl-2' />
                <div className='mt-10 font-semibold'>
                  Thưởng
                </div>
              </div>
              <div className='mt-10 text-center'>
                {recruiter_detail.welfare.bonus}
              </div>
            </div>
            <div className="w-[377px] border border-solid bg-blue-300 p-10 rounded-xl justify-items-center h-[400px]">
              <div>
                <HeartOutlined className='text-5xl pl-6' />
                <div className='mt-10 font-semibold'>
                  Khám sức khoẻ
                </div>
              </div>
              <div className='mt-10 text-center'>
                {recruiter_detail.welfare.health_examination}
              </div>
            </div>
            <div className="w-[377px] border border-solid bg-blue-300 p-10 rounded-xl justify-items-center h-[400px]">
              <div>
                <ScheduleOutlined className='text-5xl pl-2' />
                <div className='mt-10 font-semibold'>
                  Nghỉ phép
                </div>
              </div>
              <div className='mt-10 text-center'>
                {recruiter_detail.welfare.on_leave}
              </div>
            </div>
          </div>
          {/* Vị trí đang tuyển dụng */}
          <div className='font-semibold text-3xl my-10'>
            Vị trí đang tuyển dụng
          </div>
          {
            jobsFilter?.map((item) => (
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
  )
}

const recruiter_detail = {
  company_avatar: "https://images.vietnamworks.com/pictureofcompany/89/11125541.png",
  name: "VPBank",
  link: "Https://tuyendung.vpbank.com.vn",
  field: 'Ngân hàng',
  contact: "Khối Quản Trị Nguồn Nhân Lực",
  address: "Khối Quản Trị Nguồn Nhân Lực - 89 Láng Hạ, Quận Đống Đa, Hà Nộ",
  descriptons: [
    "Chào mừng Bạn đến với Miền Đất Nhân Tài!",
    "Trong chiến lược phát triển 5 năm lần thứ 3, VPBank xác định mục tiêu trở thành ngân hàng có vị trí vững chắc trong Top 3 Ngân hàng lớn nhất Việt Nam và đạt quy mô thuộc Top 100 ngân hàng lớn nhất châu Á, góp phần thúc đẩy sự phát triển bền vững và thịnh vượng của quốc gia và cộng đồng. Một yếu tố quan trọng để hiện thực hóa mục tiêu này chính là Con người và VPBank đã luôn tập trung vào chiến lược “Home of Talents” – xây dựng VPBank thực sự là miền đất thu hút và gắn kết các nhân tài hàng đầu trên thị trường.",
    "Trên hành trình hiện thực hóa sứ mệnh vì một Việt Nam thịnh vượng, VPBank tập trung nỗ lực xây dựng một hình mẫu VPBanker lý tưởng với 04 phương diện phát triển toàn diện gồm: Thịnh vượng Thân trí, Thịnh vượng Tinh thần, Thịnh vượng Tài chính và Thịnh vượng Cộng đồng. Đây là sự cam kết từ VPBank trong chiến lược Home of Talents - đặt Con người làm trung tâm và không ngừng nỗ lực tạo những điều kiện thuận lợi để từng nhân viên có thể phát triển tốt nhất cùng ngân hàng. Đây cũng là một phần của chiến lược bền vững đưa VPBank trở thành doanh nghiệp kiểu mẫu đáng tin cậy, xây dựng một môi trường làm việc hiệu quả, nhân văn, thu hút nhân tài và phát triển mỗi VPBanker trở thành phiên bản tốt nhất của chính mình."
  ],
  company_images: [
    "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fcompany_profile%2F86639.jpg&w=3840&q=75",
    "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fcompany_profile%2F86638.png&w=3840&q=75",
    "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fcompany_profile%2F86640.jpg&w=3840&q=75"
  ],
  video: "",
  welfare: {
    bonus: "Thu nhập hấp dẫn, lương thưởng cạnh tranh theo năng lực",
    health_examination: "Thưởng các Ngày lễ, Tết (theo chính sách ngân hàng từng thời kỳ)",
    on_leave: "Được vay ưu đãi theo chính sách ngân hàng từng thời kỳ"
  },
  followers: "1234"
}

export default RecruiterDetail
