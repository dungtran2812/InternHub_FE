import freeFeature from '../assets/planCard/freeFeature.svg';

const FreePlanCard = () => {
  const features = [
    'Xem thông tin cơ bản về các công ty và vị trí thực tập.',
    'Tìm kiếm cơ bản theo ngành nghề, địa điểm.',
    'Tạo và lưu 2 hồ sơ cơ bản.',
    'Xem tối đa 3 đánh giá từ các thực tập sinh trước.',
    'Nhận thông báo công việc mỗi tuần một lần.',
    'Nhận lời khuyên cơ bản từ chatbot về CV và đơn ứng tuyển.'
  ];

  return (
    <div className="flex flex-col  max-w-sm mx-auto w-[500px] p-5 lg:p-8
                    justify-center items-start gap-6 md:gap-8
                    rounded-[10px] border border-[#9699DB]
                    bg-gradient-to-b from-[#EDEEFF] to-[#CACCFF]
                    shadow-[0px_4px_50px_0px_rgba(0,0,0,0.08)]">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#372ECE]">Gói Miễn Phí</h2>
      
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={freeFeature}
              alt="Kiểm tra tính năng"
              className="w-4 sm:w-5 h-4 sm:h-5 mt-1 flex-shrink-0"
            />
            <span className="text-sm sm:text-base text-[#372ECE]/80 leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreePlanCard;
