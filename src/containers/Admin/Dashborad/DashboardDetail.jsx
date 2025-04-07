"use client"
import { Bar, BarChart, CartesianGrid, Cell, Label, Legend, Pie, PieChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Dashboard() {
  // BUGFIX 1: Corrected data structure for salesTimeData
  // - Added index property for proper reference in custom renderer
  // - Fixed date format to be consistent (MM/DD)
  // - Ensured total values match the sum of package values
  const salesTimeData = [
    {
      date: "04/05",
      total: 7,
      index: 0,
      packages: [{ name: "49k", value: 7, color: "hsl(220, 70%, 50%)" }],
    },
    {
      date: "04/06",
      total: 66,
      index: 1,
      packages: [
        { name: "49k", value: 60, color: "hsl(220, 70%, 50%)" },
        { name: "99k", value: 6, color: "hsl(280, 70%, 50%)" },
      ],
    },
    {
      date: "04/07",
      total: 5,
      index: 2,
      packages: [{ name: "99k", value: 5, color: "hsl(280, 70%, 50%)" }],
    },
  ]

  // Data for pie chart - user distribution by package type
  const userDistributionData = [
    { type: "No Package", users: 253, color: "hsl(10, 80%, 60%)" },
    { type: "49k Package", users: 67, color: "hsl(150, 80%, 45%)" },
    { type: "99k Package", users: 11, color: "hsl(200, 80%, 55%)" },
  ]

  // Data for donut chart - packages sold by type
  const packageSalesData = [
    { type: "49k Package", sales: 67, color: "hsl(150, 80%, 45%)" },
    { type: "99k Package", sales: 11, color: "hsl(200, 80%, 55%)" },
  ]

  // Calculate total packages sold
  const totalPackages = packageSalesData.reduce((acc, curr) => acc + curr.sales, 0)

  // Calculate percentage of 49k packages
  const percentageOf49k = Math.round((67 / totalPackages) * 100)

  // Enhanced color scheme
  const columnChartConfig = {
    "49k": {
      label: "49k Package",
      color: "hsl(220, 70%, 50%)",
    },
    "99k": {
      label: "99k Package",
      color: "hsl(280, 70%, 50%)",
    },
    total: {
      label: "Total Sales",
      color: "hsl(250, 70%, 50%)",
    },
  }

  const userDistributionConfig = {
    users: {
      label: "Users",
    },
    "No Package": {
      label: "No Package",
      color: "hsl(10, 80%, 60%)",
    },
    "49k Package": {
      label: "49k Package",
      color: "hsl(150, 80%, 45%)",
    },
    "99k Package": {
      label: "99k Package",
      color: "hsl(200, 80%, 55%)",
    },
  }

  const packageSalesConfig = {
    sales: {
      label: "Sales",
    },
    "49k Package": {
      label: "49k Package",
      color: "hsl(150, 80%, 45%)",
    },
    "99k Package": {
      label: "99k Package",
      color: "hsl(200, 80%, 55%)",
    },
  }

  // BUGFIX 2: Improved custom stacked bar renderer with error handling and proper data access
  const renderCustomizedStackedBar = (props) => {
    // Added type safety and error handling
    if (!props || typeof props !== "object") {
      console.error("Invalid props passed to renderCustomizedStackedBar")
      return null
    }

    const { x, y, width, height, index } = props

    // Added error handling for invalid index
    if (index === undefined || !salesTimeData[index]) {
      console.error(`Invalid index ${index} or missing data`)
      return null
    }

    const packages = salesTimeData[index].packages

    // Added error handling for missing packages data
    if (!packages || !Array.isArray(packages) || packages.length === 0) {
      console.error(`No package data found for index ${index}`)
      return null
    }

    const totalHeight = height
    let currentY = y + totalHeight

    // BUGFIX 3: Improved stacking logic to ensure proper rendering
    // Sort packages to ensure consistent stacking order
    const sortedPackages = [...packages].sort((a, b) => a.name.localeCompare(b.name))

    return (
      <g>
        {sortedPackages.map((pkg, i) => {
          // Added validation to prevent division by zero
          const pkgHeight = salesTimeData[index].total > 0 ? (pkg.value / salesTimeData[index].total) * totalHeight : 0

          currentY -= pkgHeight

          return (
            <rect
              key={`rect-${index}-${i}`}
              x={x}
              y={currentY}
              width={width}
              height={pkgHeight}
              fill={pkg.color}
              // Only apply radius to top of the topmost segment
              rx={i === 0 ? 4 : 0}
              ry={i === 0 ? 4 : 0}
            />
          )
        })}
      </g>
    )
  }

  return (
    <div className="p-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Package Sales Over Time</CardTitle>
            <CardDescription>Daily sales from April 5-7</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={columnChartConfig} className="h-[300px]">
              <BarChart data={salesTimeData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                {/* BUGFIX 4: Improved tooltip with error handling */}
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (!active || !payload || !payload.length || !payload[0].payload) {
                      return null
                    }

                    const dataIndex = payload[0].payload.index
                    if (dataIndex === undefined || !salesTimeData[dataIndex]) {
                      return null
                    }

                    const data = salesTimeData[dataIndex]

                    return (
                      <div className="bg-background p-2 border rounded shadow-sm">
                        <p className="font-medium">{data.date}</p>
                        {data.packages &&
                          data.packages.map((pkg, i) => (
                            <p key={i} className="flex items-center gap-2">
                              <span
                                className="inline-block w-3 h-3 rounded-full"
                                style={{ backgroundColor: pkg.color }}
                              ></span>
                              <span>
                                {pkg.name}: {pkg.value}
                              </span>
                            </p>
                          ))}
                        <p className="font-medium mt-1 border-t pt-1">Total: {data.total}</p>
                      </div>
                    )
                  }}
                />
                {/* BUGFIX 5: Added custom legend for better clarity */}
                <Legend
                  content={({ payload }) => {
                    if (!payload || !payload.length) return null

                    // Extract unique package types from all data
                    const packageTypes = new Set()
                    salesTimeData.forEach((day) => {
                      day.packages.forEach((pkg) => {
                        packageTypes.add(pkg.name)
                      })
                    })

                    return (
                      <div className="flex justify-center gap-4 mt-2">
                        {Array.from(packageTypes).map((type, index) => {
                          const color = type === "49k" ? columnChartConfig["49k"].color : columnChartConfig["99k"].color

                          return (
                            <div key={index} className="flex items-center gap-1">
                              <span
                                className="inline-block w-3 h-3 rounded-full"
                                style={{ backgroundColor: color }}
                              ></span>
                              <span>{type} Package</span>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }}
                />
                {/* BUGFIX 6: Improved Bar component with proper data handling */}
                <Bar
                  dataKey="total"
                  name="Total Sales"
                  fill={columnChartConfig["total"].color}
                  shape={renderCustomizedStackedBar}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>User Distribution by Package Type</CardTitle>
            <CardDescription>Total users: 330</CardDescription>
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
            <CardTitle>Packages Sold by Type</CardTitle>
            <CardDescription>Total packages sold: {totalPackages}</CardDescription>
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
                              Total
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
            <CardTitle>Key Findings</CardTitle>
            <CardDescription>Summary of sales and user data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Package Sales</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Total packages sold: <span className="font-medium">{totalPackages}</span>
                </li>
                <li>
                  49k packages: <span className="font-medium">67</span> ({percentageOf49k}%)
                </li>
                <li>
                  99k packages: <span className="font-medium">11</span> ({100 - percentageOf49k}%)
                </li>
                {/* BUGFIX 7: Added 49k package information to summary */}
                <li>
                  49k packages: <span className="font-medium">67</span> (sold on April 5-6)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">User Distribution</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Total users surveyed: <span className="font-medium">330</span>
                </li>
                <li>
                  Users with packages: <span className="font-medium">77</span> (~23%)
                </li>
                <li>
                  Users without packages: <span className="font-medium">253</span> (~77%)
                </li>
              </ul>
            </div>

            <div className="bg-muted p-3 rounded-md">
              <p className="font-medium">Key Insight:</p>
              <p>The 49k package is significantly more popular, accounting for nearly 87% of total packages sold.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

