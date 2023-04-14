import React, { useState, useEffect } from "react";
import { fetchHistoricalData } from "../../api/stockApi";
import { VictoryChart, VictoryCandlestick, VictoryTheme } from "victory";




export const OneWeekChart = ({ symbol }) => {
  const [oneWeekHistoricalData, setOneWeekHistoricalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const chartConfigKey = "1D";
      const data = await fetchHistoricalData(symbol, chartConfigKey);
      setOneWeekHistoricalData(data);
    };
    fetchData();
  }, [symbol]);

  // Extract relevant data from oneWeekHistoricalData
  let chartData = null;
  if (oneWeekHistoricalData) {
    const { c, h, l, o, t, v } = oneWeekHistoricalData;
    chartData = t.map((timestamp, index) => {
      return {
        x: new Date(timestamp * 1000),
        open: o[index],
        high: h[index],
        low: l[index],
        close: c[index],
        volume: v[index]
      };
    });
  }

  return (
    <>
      {chartData && (
 <VictoryChart
 style={{
   parent: {
     border: "1px solid white",
     backgroundColor: "white" // add background color here
   }
 }}
>
  <VictoryCandlestick
    candleColors={{ positive: "#00b894", negative: "#d63031" }}
    style={{
      data: {
        stroke: "black",
        strokeWidth: 0.4
      }
    }}
    data={chartData}
    candleWidth={3.3}
    candleRatio={0.1}
  />
</VictoryChart>
      )}
    </>
  );
};


