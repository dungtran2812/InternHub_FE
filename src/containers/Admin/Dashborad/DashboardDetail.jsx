"use client"
import { Bar, BarChart, CartesianGrid, Cell, Label, Legend, Pie, PieChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Dashboard() {
  // Data for column chart - package sales over time (now including 49k package)
  const salesTimeData = [
    { date: "05/04", "49k": 7, "99k": 0 },
    { date: "06/04", "49k": 60, "99k": 6 },
    { date: "07/04", "49k": 0, "99k": 4 },
  ]

  // Data for pie chart - user distribution by package type
  const userDistributionData = [
    { type: "Không gói", users: 253, color: "hsl(var(--chart-1))" },
    { type: "Gói 39k", users: 67, color: "hsl(var(--chart-2))" },
    { type: "Gói 99k", users: 10, color: "hsl(var(--chart-3))" },
  ]

  // Data for donut chart - packages sold by type
  const packageSalesData = [
    { type: "Gói 39k", sales: 67, color: "hsl(var(--chart-4))" },
    { type: "Gói 99k", sales: 10, color: "hsl(var(--chart-5))" },
  ]

  // Calculate total packages sold
  const totalPackages = packageSalesData.reduce((acc, curr) => acc + curr.sales, 0)

  // Calculate percentage of 39k packasges
  const percentageOf39k = Math.round((67 / totalPackages) * 100)

  // Enhanced color scheme
  const columnChartConfig = {
    "49k": {
      label: "Gói 49k",
      color: "hsl(220, 70%, 50%)",
    },
    "99k": {
      label: "Gói 99k",
      color: "hsl(280, 70%, 50%)",
    },
  }

  const userDistributionConfig = {
    users: {
      label: "Người dùng",
    },
    "Không gói": {
      label: "Không gói",
      color: "hsl(10, 70%, 55%)",
    },
    "Gói 39k": {
      label: "Gói 39k",
      color: "hsl(150, 70%, 40%)",
    },
    "Gói 99k": {
      label: "Gói 99k",
      color: "hsl(200, 70%, 50%)",
    },
  }

  const packageSalesConfig = {
    sales: {
      label: "Doanh số",
    },
    "Gói 39k": {
      label: "Gói 39k",
      color: "hsl(150, 70%, 40%)",
    },
    "Gói 99k": {
      label: "Gói 99k",
      color: "hsl(200, 70%, 50%)",
    },
  }

  return (
    <div className="p-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Doanh Số Gói Theo Thời Gian</CardTitle>
            <CardDescription>Doanh số hàng ngày từ 5-7 tháng 4</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={columnChartConfig} className="h-[300px]">
              <BarChart data={salesTimeData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="49k" fill={columnChartConfig["49k"].color} radius={[4, 4, 0, 0]} />
                <Bar dataKey="99k" fill={columnChartConfig["99k"].color} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Phân Bố Người Dùng Theo Loại Gói</CardTitle>
            <CardDescription>Tổng số người dùng: 330</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={userDistributionConfig} className="h-[300px]">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Pie
                  data={userDistributionData}
                  dataKey="users"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Donut Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Gói Đã Bán Theo Loại</CardTitle>
            <CardDescription>Tổng số gói đã bán: {totalPackages}</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={packageSalesConfig} className="h-[300px]">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Pie
                  data={packageSalesData}
                  dataKey="sales"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {packageSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                            <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-2xl font-bold">
                              {totalPackages}
                            </tspan>
                            <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 20} className="fill-muted-foreground text-xs">
                              Tổng
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Text Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Phát Hiện Chính</CardTitle>
            <CardDescription>Tóm tắt dữ liệu doanh số và người dùng</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Doanh Số Gói</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Tổng số gói đã bán: <span className="font-medium">{totalPackages}</span>
                </li>
                <li>
                  Gói 39k: <span className="font-medium">67</span> ({percentageOf39k}%)
                </li>
                <li>
                  Gói 99k: <span className="font-medium">10</span> ({100 - percentageOf39k}%)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Phân Bố Người Dùng</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Tổng số người dùng khảo sát: <span className="font-medium">330</span>
                </li>
                <li>
                  Người dùng có gói: <span className="font-medium">77</span> (~23%)
                </li>
                <li>
                  Người dùng không có gói: <span className="font-medium">253</span> (~77%)
                </li>
              </ul>
            </div>

            <div className="bg-muted p-3 rounded-md">
              <p className="font-medium">Nhận Xét Quan Trọng:</p>
              <p>Gói 39k phổ biến hơn đáng kể, chiếm gần 87% tổng số gói đã bán.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

