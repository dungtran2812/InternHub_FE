import { BlogAndReviewCard } from "@/components/BlogAndReviewCard";
import CompanyProfileCard from "@/components/CompanyProfileCard";
import { useGetAllCompanyQuery, useGetAllReviewQuery } from '@/services/internHubApi';

const CompanyList = () => {
    const { data: companies, error: errorCompany, isLoading: isLoadingCompany } = useGetAllCompanyQuery();
    const { data: reviews, error: errorReview, isLoading: isLoadingReview } = useGetAllReviewQuery();

    if (isLoadingCompany || isLoadingReview) return <div>Loading...</div>;
    if (errorCompany || errorReview) return <div>Error loading data</div>;

    return (
        <div className="mx-3">
            <div className="mt-10 text-3xl text-center font-bold">
                DANH SÁCH CÁC CÔNG TY NỔI BẬT
            </div>
            <div className="mt-5 text-center mb-3">
                Các công ty đã được kiểm chứng về độ uy tín
            </div>
            <div className="mb-10 grid grid-cols-4 gap-10">
                {companies.map((company) => (
                    <CompanyProfileCard
                        key={company.id}
                        image={company.image}
                        numberJobAvailable={company.numberJobAvailable}
                        address={company.address}
                        name={company.name}
                        industry={company.industry}
                    />
                ))}
            </div>

            {/* Blog and Review */}
            <p className="mt-10 text-3xl font-bold text-blue-900 text-center">Blog và đánh giá</p>
            <div className="overflow-x-auto mt-10">
                <div className="w-[1280px] flex gap-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="grid grid-cols-4 gap-4 flex-shrink-0">
                            <BlogAndReviewCard
                                timeToRead={review.timeToRead}
                                description={review.description}
                                title={review.title}
                                category={review.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-10 text-center">
                <button type="button" className="text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Thêm blog và bài viết
                </button>
            </div>

            <div className="justify-items-center grid grid-cols-10 ">
                <div className="col-span-2 "></div>
                <div className="col-span-6 w-full px-10 pt-10 pb-5  text-center text-white bg-blue-800 border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="text-2xl font-bold">
                        Những điều mới sẽ luôn cập nhật thường xuyên
                    </div>
                    <div className="justify-items-center mt-5 ">
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 ps-10 p-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nhập thư của bạn..." />
                            <button type="button" className="absolute inset-y-0 end-0 pe-3 bg-blue-700 text-white font-medium text-sm rounded-r-lg px-4 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Đặt mua
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyList;