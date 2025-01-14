import { Button } from "@/components/ui/button";
import premiumFeature from '../assets/planCard/premiumFeature.svg';

const PremiumSubCard = () => {
  const features = [
    'Truy cập thông tin chi tiết về môi trường làm việc và cơ hội phát triển.',
    'Tùy chọn lọc nâng cao cho mức lương và cơ hội phát triển.',
    'Tạo và lưu vô hạn hồ sơ cá nhân.',
    'Xem tất cả các đánh giá và phản hồi chi tiết về công ty.',
    'Nhận thông báo ưu tiên hàng ngày về các bài đăng việc làm phù hợp.',
    'Tư vấn nghề nghiệp cá nhân từ các chuyên gia dựa trên hồ sơ và mục tiêu của bạn.',
    'Truy cập không giới hạn tài liệu học tập và mẫu CV.'
  ];

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto min-h-[500px] p-5 lg:p-10
                    justify-center items-start gap-6 md:gap-8
                    rounded-lg bg-gradient-to-b from-[#112396] to-[#3B53EC] shadow-lg">
      <h2 className="text-2xl font-semibold text-white">Gói Cao Cấp</h2>

      <p className="text-3xl font-medium text-[#FFE492]">
        49k/tháng
      </p>

      <div className="flex flex-col gap-5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={premiumFeature}
              alt="check"
              className="w-5 h-5 mt-1 flex-shrink-0"
            />
            <span className="text-white text-sm leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        className="bg-[#FFE492] text-[#112396] hover:bg-[#FFE492]/90 mt-4"
      >
        Bắt đầu ngay
      </Button>
    </div>
  );
};

export default PremiumSubCard;
