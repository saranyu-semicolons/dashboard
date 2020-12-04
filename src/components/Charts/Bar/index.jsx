import React, { useEffect, useRef, useState } from "react";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import Skeleton from "@material-ui/lab/Skeleton";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Grid, Card } from "@material-ui/core";

am4core.useTheme(am4themes_animated);

function Bar(props) {
  const [chartData, setChartData] = useState([]);
//   "totalPriceArray":[
//     {
//        "month":1,
//        "totalPrice":25.48893258
//     },
//     {
//        "month":2,
//        "totalPrice":50.97786516
//     },
//     {
//        "month":3,
//        "totalPrice":76.46679774
//     },
//     {
//        "month":4,
//        "totalPrice":101.95573032
//     },
//     {
//        "month":5,
//        "totalPrice":127.44466290000001
//     },
//     {
//        "month":6,
//        "totalPrice":152.93359548
//     },
//     {
//        "month":7,
//        "totalPrice":178.42252806
//     },
//     {
//        "month":8,
//        "totalPrice":203.91146064
//     },
//     {
//        "month":9,
//        "totalPrice":229.40039322
//     },
//     {
//        "month":10,
//        "totalPrice":254.88932580000002
//     },
//     {
//        "month":11,
//        "totalPrice":280.37825838
//     },
//     {
//        "month":12,
//        "totalPrice":305.86719096
//     },
//     {
//        "month":13,
//        "totalPrice":331.35612354
//     },
//     {
//        "month":14,
//        "totalPrice":356.84505612
//     },
//     {
//        "month":15,
//        "totalPrice":382.33398869999996
//     },
//     {
//        "month":16,
//        "totalPrice":407.82292128
//     },
//     {
//        "month":17,
//        "totalPrice":433.31185386000004
//     },
//     {
//        "month":18,
//        "totalPrice":458.80078644
//     },
//     {
//        "month":19,
//        "totalPrice":484.28971902
//     },
//     {
//        "month":20,
//        "totalPrice":509.77865160000005
//     },
//     {
//        "month":21,
//        "totalPrice":535.26758418
//     },
//     {
//        "month":22,
//        "totalPrice":560.75651676
//     },
//     {
//        "month":23,
//        "totalPrice":586.24544934
//     },
//     {
//        "month":24,
//        "totalPrice":611.73438192
//     },
//     {
//        "month":25,
//        "totalPrice":637.2233145
//     },
//     {
//        "month":26,
//        "totalPrice":662.71224708
//     },
//     {
//        "month":27,
//        "totalPrice":688.20117966
//     },
//     {
//        "month":28,
//        "totalPrice":713.69011224
//     },
//     {
//        "month":29,
//        "totalPrice":739.17904482
//     },
//     {
//        "month":30,
//        "totalPrice":764.6679773999999
//     },
//     {
//        "month":31,
//        "totalPrice":790.15690998
//     },
//     {
//        "month":32,
//        "totalPrice":815.64584256
//     },
//     {
//        "month":33,
//        "totalPrice":841.13477514
//     },
//     {
//        "month":34,
//        "totalPrice":866.6237077200001
//     },
//     {
//        "month":35,
//        "totalPrice":892.1126403000001
//     },
//     {
//        "month":36,
//        "totalPrice":917.60157288
//     }
//  ]
  const cData = [
    {
      category: "Month 1",
      first: 25.4,
      second: 55,
      third: 60,
    },
    {
      category: "Month 2",
      first: 30,
      second: 50.9,
      third: 69,
    },
    {
      category: "Month 3",
      first: 27,
      second: 40,
      third: 45,
    },
    {
      category: "Month 4",
      first: 50,
      second: 33,
      third: 22,
    },
  ];
  if (chartData.length === 0) {
    setChartData(cData);
  }

  useEffect(() => {
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = chartData;
    chart.colors.step = 2;

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

    createSeries("first", "The First");
    createSeries("second", "The Second");
    createSeries("third", "The Third");

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
    <Card>
      <div id="chartdiv" style={styleDimensions}></div>
      <Skeleton
        variant="rect"
        width={chartData.length > 0 ? 0 : "100%"}
        height={chartData.length > 0 ? 0 : "500px"}
      ></Skeleton>
    </Card>
  );
}

export default Bar;
