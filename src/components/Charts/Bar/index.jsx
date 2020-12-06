import React, { useEffect, useRef, useState } from "react";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import Skeleton from "@material-ui/lab/Skeleton";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {barTransformation} from "../../../transformation/barTransformation";


am4core.useTheme(am4themes_animated);

function Bar(props) {
  const {totalPriceArray} = props;
  const [chartData, setChartData] = useState([]);
  const cData = barTransformation(totalPriceArray);
// const cData=[];
//   const cData = [
//     {
//       category: "Month 1",
//       first: 25.4, //aws.totalprice
//       second: 55, //azure.totalPrice
//       third: 60, // gcp.totalPrice
//     },
//     {
//       category: "Month 2",
//       first: 30,
//       second: 50.9,
//       third: 69,
//     },
//     {
//       category: "Month 3",
//       first: 27,
//       second: 40,
//       third: 45,
//     },
//     {
//       category: "Month 4",
//       first: 50,
//       second: 33,
//       third: 22,
//     },
//   ];
  if (chartData.length === 0) {
    setChartData(cData);
  }
  useEffect(() => {
    console.log("totalPriceArray",totalPriceArray);
    //   const cData = barTransformation(totalPriceArray);
  },[totalPriceArray]);
  useEffect(() => {
   
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = chartData;
    chart.colors.step = 2;
    chart.colors.list = [
      am4core.color("#ED7D31"),
      am4core.color("#4472C7"),
    ];
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;
    
    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      var bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    createSeries("first", "AWS");
    createSeries("second", "GCP");
    // createSeries("third", "The Third");

    function arrangeColumns() {
      var series = chart.series.getIndex(0);

      var w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        var delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          var middle = chart.series.length / 2;

          var newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          var visibleCount = newIndex;
          var newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            var trueIndex = chart.series.indexOf(series);
            var newIndex = series.dummyData;

            var dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }
  }, [chartData]);

  const styleDimensions =
    chartData.length > 0
      ? { width: "95%", height: "500px" }
      : { width: "0", height: "0px" };
  return (
    <>
      <div id="chartdiv" style={styleDimensions}></div>
      <Skeleton
        variant="rect"
        width={chartData.length > 0 ? 0 : "100%"}
        height={chartData.length > 0 ? 0 : "500px"}
      ></Skeleton>
    </>
  );
}

export default Bar;
