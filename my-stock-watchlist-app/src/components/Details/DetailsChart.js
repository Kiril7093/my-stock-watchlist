import React, { useState, useEffect } from "react";
import { fetchHistoricalData } from "../../api/stockApi";

import { VictoryChart, VictoryCandlestick, VictoryTheme, VictoryLine } from "victory";

import  styles from "./DetailsChart.module.css"





export const DetailsChart = ({ symbol }) => {
    const [watchlistHistoricalData, setWatchlistHistoricalData] = useState(null);
    const [chartConfigKey, setChartConfigKey] = useState("1Y");
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchHistoricalData(symbol, chartConfigKey);
        setWatchlistHistoricalData(data);
      };
      fetchData();
    }, [symbol, chartConfigKey]);
  
    let chartData = null;
    if (watchlistHistoricalData) {
      const { c, h, l, o, t, v } = watchlistHistoricalData;
      const dates = t.map((timestamp) => new Date(timestamp * 1000));
      chartData = t.map((timestamp, index) => {
        return {
          x: dates[index],
          open: o[index],
          high: h[index],
          low: l[index],
          close: c[index],
          volume: v[index],
        };
      });
    }
  
    const handleTimeframeChange = (e) => {
      setChartConfigKey(e.target.value);
    };
  
    return (
      <>
 <div className={styles['chart-select-container']} style={{ float: 'left' }}>
  <select
    value={chartConfigKey}
    onChange={handleTimeframeChange}
    className={styles['chart-select']}
  >
    <option value="1D">1 Day</option>
    <option value="1W">1 Week</option>
    <option value="1M">1 Month</option>
    <option value="1Y">1 Year</option>
    <option value="1W_1H">1 Week (1 Hour)</option>
    <option value="5Y">5 Years</option>
  </select>
</div>


        {chartData && (
          <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold" }}>
            {symbol}
          </h1>
        )}
        {chartData && (
          <div className='mr-10 pr-10 ml-0 pl-0'>
            <VictoryChart
              scale={{ x: "continuous" }}
              style={{
                parent: {
                  border: "1px solid white",
                  backgroundColor: "white",
                },
              }}
            >
              {/* <VictoryLine
                style={{
                  data: {
                    stroke: "blue",
                    strokeWidth: 1,
                    strokeOpacity: 0.5,
                  },
                }}
                data={chartData}
                x="x"
                y="close"
              /> */}
              <VictoryCandlestick
                candleColors={{ positive: "#00b894", negative: "#d63031" }}
                style={{
                  data: {
                    stroke: "black",
                    strokeWidth: 0.4,
                  },
                }}
                data={chartData}
                candleWidth={3.3}
                candleRatio={0.1}
              />
            </VictoryChart>
          </div>
        )}
      </>
    );
  };
  