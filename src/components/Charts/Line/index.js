import React, { useEffect, useRef, useState } from "react";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import Skeleton from "@material-ui/lab/Skeleton";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {lineTransformation} from "../../../transformation/lineTransformation";

import { Grid, Card } from "@material-ui/core";

am4core.useTheme(am4themes_animated);

const isIgnored = (data) => {
  const ignores = [
    "image",
    "bbox",
    "Cost",
    "vinDisc",
    "uniqueid",
    "assessmenttime",
    "scan_id",
    "created_at",
    "license_disc",
    "updated_at",
  ];
  for (let i = 0; i <= ignores.length; i++) {
    if (data.indexOf(ignores[i]) >= 0) {
      return true;
    }
  }
  return false;
};

function MinMaxQuotes(props) {
  const chart = useRef(null);
  const {totalPriceArray} = props;
  const [chartData, setChartData] = useState([]);
  // const cData= [];
  console.log("totalPriceArray line",totalPriceArray);
  const cData = lineTransformation(totalPriceArray);
  //Rough testing
  console.log("cData=====", cData)
  // const cData = [{
  //   "category": "Month 1",
  //   "gcp": 6.5,
  //   "aws": 2.2,
  //   "azure": 2.4
  // }, {
  //   "category": "Month 2",
  //   "gcp": 12.3,
  //   "aws": 4.9,
  //   "azure": 2.4
  // }, {
  //   "category": "Month 3",
  //   "gcp": 12.3,
  //   "aws": 5.1,
  //   "azure": 3.4
  // }, {
  //   "category": "Month 4",
  //   "gcp": 2.9,
  //   "aws": 5.1,
  //   "azure": 2.4
  // }, {
  //   "category": "Month 5",
  //   "gcp": 2.9,
  //   "aws": 8.3,
  //   "azure": 2.4
  // }];
  
  
  useEffect(() => {
    if (chartData.length === 0) {
      setChartData(cData);
    }
  },[cData]);
// End Rough testing
  useEffect(() => {
    let amchart = am4core.create("minMaxQuotes", am4charts.XYChart);
    amchart.colors.list = [
      am4core.color("#ED7D31"),
      am4core.color("#4472C7"),
    ];
    amchart.data = chartData;
    var categoryAxis = amchart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.title.text = "Months";
    categoryAxis.dataFields.category = "category";
    var valueAxis = amchart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Cost";

    var series = amchart.series.push(new am4charts.LineSeries());
    series.dataFields.categoryX = "category";
    //series.dataFields.refNo = "value";
    series.dataFields.valueY = "gcp";
    //series.dataFields.value = "gValue";
    series.tooltipText = "GCP - {valueY}";
    // series.sequencedInterpolation = true;
    // series.fill = series.stroke;
    // series.fillOpacity = 0.3;
    // series.defaultState.transitionDuration = 1000;
    // series.tensionX = 0.8;

    var series2 = amchart.series.push(new am4charts.LineSeries());
    // series2.dataFields.dateX = "date";
    series2.dataFields.categoryX = "category";
    series2.stroke = amchart.colors.getIndex(6);
    
    //series2.dataFields.refNo = "refNo";
    series2.dataFields.valueY = "aws";
    //series2.dataFields.value = "awValue";
    //series2.sequencedInterpolation = true;
    //series2.defaultState.transitionDuration = 1500;
    //series2.stroke = amchart.colors.getIndex(6);
    series2.tooltipText = "AWS - {valueY}"; 
    //series2.fill = series2.stroke;
    //series2.tensionX = 0.8;
    
    /*
    var series3 = amchart.series.push(new am4charts.LineSeries());
    // series3.dataFields.dateX = "date";
    series3.dataFields.categoryX = "category";

    //series2.dataFields.refNo = "refNo";
    series3.dataFields.valueY = "azure";
    //series3.dataFields.value = "azValue";
    //series2.sequencedInterpolation = true;
    //series2.defaultState.transitionDuration = 1500;
    //series2.stroke = amchart.colors.getIndex(6);
    series3.tooltipText = "{valueY}";  */

    amchart.strokeWidth = 5
    amchart.cursor = new am4charts.XYCursor();
    amchart.cursor.xAxis = categoryAxis;
    amchart.scrollbarX = new am4core.Scrollbar();

    // amchart.legend = new am4charts.Legend();
    return () => {
      amchart.dispose();
    };
  }, [chartData]);
  

  const styleDimensions =
    chartData.length > 0
      ? { width: "95%", height: "500px" }
      : { width: "0", height: "0px" };
  return (
   
          <>
            <div id="minMaxQuotes" style={styleDimensions}></div>
            <Skeleton
              variant="rect"
              width={chartData.length > 0 ? 0 : "100%"}
              height={chartData.length > 0 ? 0 : "500px"}
            ></Skeleton>
          </>
       
  );
}
export default MinMaxQuotes;
