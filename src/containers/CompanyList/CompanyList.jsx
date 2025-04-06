import CompanyProfileCard from "@/components/CompanyProfileCard";
import Review from "@/components/Review";
import { useGetAllCompanyQuery, useGetAllReviewQuery } from '@/services/internHubApi';
import { Link } from "react-router-dom";

// Mock data for reviews with Vietnamese comments
const mockReviews = [
    {
      id: 1,
      author: "Nguyễn Văn An",
      rating: 4,
      content: "Môi trường làm việc rất tốt, nhiều cơ hội phát triển bản thân!",
      date: "2025-03-15",
      avtUrl: "https://ui-avatars.com/api/?name=Nguyễn+Văn+An",
    },
    {
      id: 2,
      author: "Trần Thị Bình",
      rating: 5,
      content: "Công ty tuyệt vời, chế độ đãi ngộ hấp dẫn và văn hóa doanh nghiệp chuyên nghiệp.",
      date: "2025-03-20",
      avtUrl: "https://ui-avatars.com/api/?name=Trần+Thị+Bình",
    },
    {
      id: 3,
      author: "Lê Minh Châu",
      rating: 3,
      content: "Giao diện còn nhiều lỗi, cần cải thiện hơn nữa. Nhưng nhìn chung là ổn.",
      date: "2025-03-25",
      avtUrl: "https://ui-avatars.com/api/?name=Lê+Minh+Châu",
    },
    {
      id: 4,
      author: "Phạm Quốc Duy",
      rating: 5,
      content: "Đội ngũ nhân viên thân thiện, sếp hỗ trợ nhiệt tình!",
      date: "2025-03-28",
      avtUrl: "https://ui-avatars.com/api/?name=Phạm+Quốc+Duy",
    },
    {
      id: 5,
      author: "Hoàng Thị Mai",
      rating: 4,
      content: "Lương thưởng cạnh tranh, môi trường năng động phù hợp với người trẻ.",
      date: "2025-04-01",
      avtUrl: "https://ui-avatars.com/api/?name=Hoàng+Thị+Mai",
    },
    {
      id: 6,
      author: "Vũ Văn Hùng",
      rating: 3,
      content: "Công ty tốt nhưng áp lực công việc khá cao vào cuối tháng.",
      date: "2025-04-03",
      avtUrl: "https://ui-avatars.com/api/?name=Vũ+Văn+Hùng",
    },
  ];
  

const CompanyList = () => {
  const { data: companies, error: errorCompany, isLoading: isLoadingCompany } = useGetAllCompanyQuery();
  // Using mock data for reviews instead of API
  const reviews = mockReviews;
  const isLoadingReview = false;
  const errorReview = null;

  if (isLoadingCompany || isLoadingReview) return <div>Loading...</div>;
  if (errorCompany || errorReview) return <div>Error loading data</div>;
  
  console.log("companies: ", companies);
  console.log("reviews: ", reviews);

  return (
    <div className="mx-20 ">
      <div className="container mx-auto justify-items-center">
        <div className="mt-10 text-3xl text-center font-bold">
          DANH SÁCH CÁC CÔNG TY NỔI BẬT
        </div>
        <div className="mt-5 text-center mb-3">
          Các công ty đã được kiểm chứng về độ uy tín
        </div>
        <div className="mb-10 grid grid-cols-4 gap-10">
          {companies.map((company) => (
            <Link to={`/company/${company.id}`}>
              <CompanyProfileCard
                key={company.id}
                image={company.logoCompany}
                numberJobAvailable={company.numberJobAvailable}
                address={company.address}
                name={company.name}
                industry={company.industry}
              />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-3xl font-bold text-blue-900 text-center">Đánh giá</p>
        <Review reviews={reviews} />
        <div className="my-10 text-center">
          <button
            type="button"
            className="text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Xem thêm
          </button>
        </div>

        <div className="justify-items-center grid grid-cols-10 ">
          <div className="col-span-2 "></div>
          <div className="col-span-6 w-full px-10 pt-10 pb-5 text-center text-white bg-blue-800 border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-2xl font-bold">
              Những điều mới sẽ luôn cập nhật thường xuyên
            </div>
            <div className="justify-items-center mt-5 ">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 ps-10 p-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nhập thư của bạn..."
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 pe-3 bg-blue-700 text-white font-medium text-sm rounded-r-lg px-4 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Đặt mua
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;