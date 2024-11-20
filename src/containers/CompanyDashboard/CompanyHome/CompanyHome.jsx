import React, { useEffect, useRef } from 'react';
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
      { month: "Jan", value: 100 },
      { month: "Feb", value: 65 },
      { month: "Mar", value: 140 },
      { month: "Apr", value: 150 },
      { month: "May", value: 95 },
      { month: "Jun", value: 200 }
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
          <h1 className="text-2xl font-bold tracking-tight text-[#1a2b6d]">Recent posts</h1>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Total Interns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-[#1E34C0]">103</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Recruitment posts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-[#1E34C0]">213</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Intern&apos;s feedback</CardTitle>
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
                <CardTitle>Job Description</CardTitle>
                <Link 
                  to="/jobs" 
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  See more →
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="p-4 border rounded-lg hover:border-blue-200 transition-colors">
                    <h3 className="font-semibold">GRAPHIC DESIGN INTERNSHIP</h3>
                    <p className="text-sm text-gray-500">Quantity: 5</p>
                    <p className="text-sm text-gray-500">Suitable majors: Graphic Design, Digital Art Design</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Work with Art Director, Creative Director on art direction design direction...
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interns Summary Chart */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Interns summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
              </CardContent>
            </Card>
          </div>

          {/* Candidate Feedback Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a2b6d] mb-4">Candidate Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((feedback) => (
                <Card key={feedback} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-gray-600">
                      I had a positive experience working at Also. The friendly work environment and supportive team 
                      helped me quickly develop my skills. The company emphasizes training and encourages employees 
                      to contribute ideas.
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
