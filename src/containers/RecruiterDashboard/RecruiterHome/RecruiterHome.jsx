import  { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import CompanyProfile from '../CompanyProfile/CompanyProfile';

// Apply animated theme
am4core.useTheme(am4themes_animated);

const CompanyHome = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      { month: "Tháng 1", value: 100 },
      { month: "Tháng 2", value: 65 },
      { month: "Tháng 3", value: 140 },
      { month: "Tháng 4", value: 150 },
      { month: "Tháng 5", value: 95 },
      { month: "Tháng 6", value: 200 }
    ];
    

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "month";
    series.strokeWidth = 2;
    series.stroke = am4core.color("#1E34C0");
    series.tooltipText = "{valueY}";

    // Add bullets
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color("#1E34C0");
    bullet.circle.strokeWidth = 0;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomX";

    // Store chart instance
    chartRef.current = chart;

    // Cleanup
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#1a2b6d]">Bài viết gần đây</h1>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Tổng số thực tập sinh</CardTitle>
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

          {/* Recent Job Posts and Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Job Posts */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Mô tả công việc</CardTitle>
                <Link 
                  to="/jobs" 
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Xem thêm →
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="p-4 border rounded-lg hover:border-blue-200 transition-colors">
                    <h3 className="font-semibold">THỰC TẬP SINH DESIGN ĐỒ HỌA</h3>
                    <p className="text-sm text-gray-500">Số lượng: 5</p>
                    <p className="text-sm text-gray-500">Các ngành học phù hợp: Thiết kế đồ họa, Thiết kế nghệ thuật số</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Làm việc với Giám đốc nghệ thuật, Giám đốc sáng tạo về hướng dẫn thiết kế...
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interns Summary Chart */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Tổng quan thực tập sinh</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
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

export default CompanyHome;
