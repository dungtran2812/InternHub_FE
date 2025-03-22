import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import { useDashboardDataQuery } from "@/services/internHubApi";

// CustomCard component for background images
const CustomCard = ({ backgroundImage, children, ...props }) => (
  <Card
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    {...props}
  >
    <div className="bg-white bg-opacity-80 p-4">{children}</div>
  </Card>
);

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date().getTime(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).getTime(),
  });

  const { data, isLoading, isError, refetch } = useDashboardDataQuery(dateRange);
  const dashboardData = data || {
    jobCount: 0,
    applicationCount: 0,
    studentCount: 0,
    recruiterCount: 0,
    subscriptionCount: 0,
    totalRevenue: 0,
  };

  const handleDateRangeChange = (range) => {
    setDateRange({
      startDate: new Date(range[0]).getTime() || new Date().getTime(),
      endDate: new Date(range[1]).getTime() || new Date().getTime(),
    });
  };

  const handleRefetch = () => {
    refetch({
      startDate: dateRange.startDate ? dateRange.startDate.getTime() : undefined,
      endDate: dateRange.endDate ? dateRange.endDate.getTime() : undefined,
    });
  };

  if (isLoading)
    return (
      <div className="flex justify-center py-4">
        <div className="animate-spin rounded-full h-56 w-56 border-b-2 border-primary" />
      </div>
    );
  if (isError)
    return (
      <div className="p-4 text-center text-red-500">
        Error loading dashboard data.{" "}
        <Button variant="link" onClick={() => refetch(dateRange)}>
          Retry
        </Button>
      </div>
    );

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header with Date Range Filter */}
      <div className="flex justify-between items-center">
        <RangePicker onChange={handleDateRangeChange} />
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CustomCard
          backgroundImage="https://blog.verifirst.com/hubfs/Blog_Images/Employment%2C%20Hiring%20and%20Background%20Screening%20Trends%20for%202022.jpg"
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold text-gray-700">
              Tổng Số Công Việc
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-blue-600">
              {dashboardData.jobCount}
            </p>
          </CardContent>
        </CustomCard>

        <CustomCard
          backgroundImage="https://images.ctfassets.net/pdf29us7flmy/2Uw7TkS7XvJG2MDeMATlfA/14f825b7aef2746abe4d4376a022c8b4/resized.png"
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold text-gray-700">
              Số Đơn Ứng tuyển
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-green-600">
              {dashboardData.applicationCount}
            </p>
          </CardContent>
        </CustomCard>

        <CustomCard
          backgroundImage="https://www.pace.edu.vn/uploads/news/2023/07/6-cau-hoi-thuong-gap-ve-intern.jpg"
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold text-gray-700">
              Tổng Số Sinh Viên
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-purple-600">
              {dashboardData.studentCount}
            </p>
          </CardContent>
        </CustomCard>

        <CustomCard
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQ3rX10AMKdU4s4JYlny2kr1SzQdT7gExJw&s"
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold text-gray-700">
            Tổng Số Nhà Tuyển Dụng
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-orange-600">
              {dashboardData.recruiterCount}
            </p>
          </CardContent>
        </CustomCard>

        <CustomCard
          backgroundImage="https://khokhoahoc.org/wp-content/uploads/2023/12/Thiet-ke-chua-co-ten.png"
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold text-gray-700">
            Tổng Số Người Đã Mua Gói Premium
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-teal-600">
              {dashboardData.subscriptionCount}
            </p>
          </CardContent>
        </CustomCard>

        <CustomCard
          backgroundImage="https://mercury.com/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F73xfpczb%2Fproduction%2Fd88b2b0786ba1bb93f02e3ab1c9548484b51b8eb-5912x2640.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75"
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold text-gray-700">
              Tổng Doanh Thu
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-red-600">
              {dashboardData.totalRevenue.toLocaleString("vi-VN")} VND
            </p>
          </CardContent>
        </CustomCard>
      </div>
    </div>
  );
};

export default Dashboard;