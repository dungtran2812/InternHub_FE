import JobSearchBar from './JobSearchBar'; // Import the JobSearchBar component
import homeBannerBG from '@/assets/homePage/homeBannerBG.png'; // Import the background SVG
import home1 from '@/assets/homePage/home1.png'
import home2 from '@/assets/homePage/home2.png'

const HomeBanner = () => {
  return (
    <div 
      className="home-banner p-10 md:p-20 flex flex-col md:flex-row" 
      style={{ backgroundImage: `url(${homeBannerBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full md:w-7/12 mb-8 md:mb-0">
        <h1 className="md:text-[56px] md:leading-[1.5] sm:text-xl font-bold max-w-lg text-white">Tìm kiếm công việc ĐẦU TIÊN của bạn</h1>
        <p className="mt-4 text-sm md:text-base text-white">"Mỗi tháng, hơn 500.000 sinh viên và cựu sinh viên tìm đến Internhub để tìm kiếm các cơ hội thực tập và việc làm , nộp hơn 20.000 đơn ứng tuyển mỗi ngày và kết nối với các công ty hàng đầu trong các ngành."</p>
        
        {/* Job Search Bar */}
        <JobSearchBar />
      </div>
      
      {/* Right div for images */}
      <div className="w-full md:w-5/12 flex flex-col items-center">
        <img src={home1} alt="Talent Move" className="mb-4 w-3/4 md:w-auto" />
        <img src={home2} alt="Alibaba B2B" className="w-3/4 md:w-auto" />
      </div>
      
      {/* Other banner content */}
    </div>
  );
};

export default HomeBanner;
