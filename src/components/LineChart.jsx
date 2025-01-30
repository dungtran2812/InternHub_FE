import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4themes_animated from "@amcharts/amcharts4/themes/animated";

const LineChart = () => {
  useEffect(() => {
    // Kích hoạt theme animation
    am4core.useTheme(am4themes_animated.default);

    // Tạo chart
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    // Tạo dữ liệu
    let data = [];
    let date = new Date();
    let value = 100;
    for (let i = 0; i < 1200; i++) {
      value += Math.round(Math.random() * 10 - 5);
      data.push({ date: new Date(date), value: value });
      date.setDate(date.getDate() + 1);
    }
    chart.data = data;

    // Tạo trục X (DateAxis)
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    // Tạo trục Y (ValueAxis)
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Tạo series (Line Series)
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY}";
    series.strokeWidth = 2;

    // Tạo Scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    // Cleanup chart khi component bị unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default LineChart;
