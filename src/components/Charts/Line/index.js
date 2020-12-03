import React, { useEffect, useRef, useState } from "react";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import Skeleton from "@material-ui/lab/Skeleton";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

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
  //const cData = [];
  const [chartData, setChartData] = useState([]);
  //Rough testing
  let visits = 10;
  // for (let i = 1; i < 366; i++) {
  //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  //   cData.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
  // }
  const cData = [{
    "date": new Date(2018, 0, 1),
    "gcp": 6.5,
    "aws": 2.2,
    "azure": 2.4
  }, {
    "date": new Date(2018, 2, 2),
    "gcp": 12.3,
    "aws": 4.9,
    "azure": 2.4
  }, {
    "date": new Date(2018, 3, 3),
    "gcp": 12.3,
    "aws": 5.1,
    "azure": 3.4
  }, {
    "date": new Date(2018, 4, 4),
    "gcp": 2.9,
    "aws": 5.1,
    "azure": 2.4
  }, {
    "date": new Date(2018, 5, 5),
    "gcp": 2.9,
    "aws": 8.3,
    "azure": 2.4
  }];
  
  


  console.log("cccccc", cData)
  if (chartData.length === 0) {
    setChartData(cData);
  }
// End Rough testing
  useEffect(() => {
    let amchart = am4core.create("minMaxQuotes", am4charts.XYChart);
    amchart.data = chartData;
    var dateAxis = amchart.xAxes.push(new am4charts.DateAxis());
    dateAxis.title.text = "Months";
    var valueAxis = amchart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Cost";

    var series = amchart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    //series.dataFields.refNo = "value";
    series.dataFields.valueY = "gcp";
    //series.dataFields.value = "gValue";
    series.tooltipText = "{valueY}";
    // series.sequencedInterpolation = true;
    // series.fill = series.stroke;
    // series.fillOpacity = 0.3;
    // series.defaultState.transitionDuration = 1000;
    // series.tensionX = 0.8;

    var series2 = amchart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    //series2.dataFields.refNo = "refNo";
    series2.dataFields.valueY = "aws";
    //series2.dataFields.value = "awValue";
    //series2.sequencedInterpolation = true;
    //series2.defaultState.transitionDuration = 1500;
    //series2.stroke = amchart.colors.getIndex(6);
    series2.tooltipText = "{valueY}"; 
    //series2.fill = series2.stroke;
    //series2.tensionX = 0.8;


    var series3 = amchart.series.push(new am4charts.LineSeries());
    series3.dataFields.dateX = "date";
    //series2.dataFields.refNo = "refNo";
    series3.dataFields.valueY = "azure";
    //series3.dataFields.value = "azValue";
    //series2.sequencedInterpolation = true;
    //series2.defaultState.transitionDuration = 1500;
    //series2.stroke = amchart.colors.getIndex(6);
    series3.tooltipText = "{valueY}"; 


    amchart.cursor = new am4charts.XYCursor();
    amchart.cursor.xAxis = dateAxis;
    amchart.scrollbarX = new am4core.Scrollbar();

    // amchart.legend = new am4charts.Legend();
    return () => {
      amchart.dispose();
    };
  }, [chartData]);
  // const tokens = location.state?.signIn;
  // useEffect(() => {
  // 	let amchart = am4core.create("minMaxQuotes", am4charts.XYChart);
  // 	if (chartData.length === 0) {
  // 		getminQuotevsmaxQuote(
  // 			{
  // 				startDate: props.startDate,
  // 				EndData: props.endDate,
  // 			},
  // 			tokens,
  // 		).then((response) => {
  // 			const data = response.data.data.assessment_Quote_max_vs_minData;
  // 			const fdata = [];
  // 			let cnt = 0;
  // 			let maxValue = 0;
  // 				const counts = [];
  // 				map(data, (dt) => {
  // 					cnt++;
  // 					const quotesNo = dt.uniqueid;
  // 					maxValue = dt.totalamount > maxValue ? dt.totalamount : maxValue;
  // 					const target = find(counts, (m) => m.refNo === quotesNo);
  // 					if (target) {
  // 						if (dt.totalamount > target.maxAmount && dt.totalamount !== 0) {
  // 							target.maxAmount = dt.totalamount;
  // 						}
  // 						if (dt.totalamount < target.minAmount && dt.totalamount !== 0) {
  // 							target.minAmount = dt.totalamount;
  // 						}
  // 					} else {
  // 						if (dt.totalamount !== 0) {
  // 							counts.push({
  // 								uniqueid: cnt,
  // 								refNo: dt.uniqueid,
  // 								maxAmount: dt.totalamount,
  // 								minAmount: dt.totalamount,
  // 							});
  // 						}
  // 					}
  // 				});
  // 			setChartData(counts);
  // 		});
  // 	}
  // 	if (chartData.length) {
  // 		amchart.data = chartData;
  // 		var dateAxis = amchart.xAxes.push(new am4charts.DateAxis());
  // 		dateAxis.title.text = "Ref Numbers";
  // 		var valueAxis = amchart.yAxes.push(new am4charts.ValueAxis());
  // 		valueAxis.tooltip.disabled = true;
  // 		valueAxis.title.text = "Min an Max values";

  // 		var series = amchart.series.push(new am4charts.LineSeries());
  // 		series.dataFields.dateX = "uniqueid";
  // 		series.dataFields.refNo = "refNo";
  // 		series.dataFields.valueY = "maxAmount";
  // 		series.tooltipText = "Max: {valueY.value}\nRef No : {refNo}";
  // 		series.sequencedInterpolation = true;
  // 		series.fill = series.stroke;
  // 		series.fillOpacity = 0.3;
  // 		series.defaultState.transitionDuration = 1000;
  // 		series.tensionX = 0.8;

  // 		var series2 = amchart.series.push(new am4charts.LineSeries());
  // 		series2.dataFields.dateX = "uniqueid";
  // 		series2.dataFields.refNo = "refNo";
  // 		series2.dataFields.valueY = "minAmount";
  // 		series2.sequencedInterpolation = true;
  // 		series2.defaultState.transitionDuration = 1500;
  // 		series2.stroke = amchart.colors.getIndex(6);
  // 		series2.tooltipText = "minAmount: {valueY.value}\nRef No : {refNo}";
  // 		series2.fill = series2.stroke;
  // 		series2.tensionX = 0.8;

  // 		amchart.cursor = new am4charts.XYCursor();
  // 		amchart.cursor.xAxis = dateAxis;
  // 		amchart.scrollbarX = new am4core.Scrollbar();

  // 		// amchart.legend = new am4charts.Legend();
  // 	}

  // 	return () => {
  // 		amchart.dispose();
  // 	};
  // }, [chartData, props.startDate, props.endDate]);

  const styleDimensions =
    chartData.length > 0
      ? { width: "95%", height: "500px" }
      : { width: "0", height: "0px" };
  return (
   
          <Card>
            <div id="minMaxQuotes" style={styleDimensions}></div>
            <Skeleton
              variant="rect"
              width={chartData.length > 0 ? 0 : "100%"}
              height={chartData.length > 0 ? 0 : "500px"}
            ></Skeleton>
          </Card>
       
  );
}
export default MinMaxQuotes;
