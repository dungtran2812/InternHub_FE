import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import CompanyProfile from '../CompanyProfile/CompanyProfile';

const RecruiterHome = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#1a2b6d]">Bài viết gần đây</h1>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Tổng số đơn ứng tuyển</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-[#1E34C0]">103</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Bài đăng tuyển dụng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-[#1E34C0]">213</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Phản hồi của thực tập sinh</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-[#1E34C0]">79</p>
              </CardContent>
            </Card>
          </div>

          {/* Candidate Feedback Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a2b6d] mb-4">Phản hồi của ứng viên</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((feedback) => (
                <Card key={feedback} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-gray-600">
                      Tôi có một trải nghiệm tích cực khi làm việc tại Also. Môi trường làm việc thân thiện và đội ngũ hỗ trợ 
                      đã giúp tôi phát triển kỹ năng nhanh chóng. Công ty chú trọng đào tạo và khuyến khích nhân viên đóng góp ý tưởng.
                    </p>
                    <div className="flex items-center mt-4 space-x-2">
                      <div className="flex -space-x-1">
                        {[1, 2, 3].map((star) => (
                          <span key={star} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <span className="font-medium">AAAAAA</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CompanyProfile />
    </div>
  );
};

export default RecruiterHome;
