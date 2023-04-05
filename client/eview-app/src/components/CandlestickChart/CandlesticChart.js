import React from "react";
import {
  VictoryChart,
  VictoryCandlestick,
  VictoryZoomContainer,
} from "victory";

const data = [
  { x: new Date(2016, 6, 1), open: 9, close: 30, high: 56, low: 7 },
  { x: new Date(2016, 6, 2), open: 80, close: 40, high: 120, low: 10 },
  { x: new Date(2016, 6, 3), open: 50, close: 80, high: 90, low: 20 },
  { x: new Date(2016, 6, 4), open: 70, close: 22, high: 70, low: 5 },
  { x: new Date(2016, 6, 5), open: 20, close: 35, high: 50, low: 10 },
];

export const CandlestickChart = () => {
  return (
    <VictoryChart
      width={600}
      height={400}
      containerComponent={
        <VictoryZoomContainer
          zoomDomain={{ x: [new Date(2016, 6, 1), new Date(2016, 6, 5)] }}
        />
      }
      scale={{
        x: {
          type: "time",
          domain: [new Date(2016, 6, 1), new Date(2016, 6, 5)],
        },
        y: {
          type: "linear",
          domain: [-150, 300],
        },
      }}
    >
      <VictoryCandlestick
        data={data}
        candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
      />
    </VictoryChart>
  );
};
