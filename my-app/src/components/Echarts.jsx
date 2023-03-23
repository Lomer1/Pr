import React from 'react';
import ReactECharts from 'echarts-for-react';


export default function Echarts() {
  const option = {
    color: ["#ba8ed1"],
    title: {
      text: 'Line Chart Example',
      textAlign: "auto",
      textStyle: {
        fontSize: 24,
        color: "rgb(56 56 56)"
      },
    },
    tooltip: {},
    legend: {
      data:['Label']
    },
    xAxis: {
      data: ['New York', 'Los Angeles', 'Singepore', 'Bangladesh', 'Saigon', 'Dallas'],
      axisLine: {
        lineStyle: {
          color: "#d5d5d5"
        }
      }
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "#d5d5d5"
        }
      },
      splitLine: {
        lineStyle: {
            // Dark and light colors will be used in turns
            color: ['#d5d5d5']
        }
    }
    },
    series: [{
      name: 'City',
      type: 'bar',
      data: [7890000, 6903000, 9039600, 14300000, 13230000, 6400000]
    }]
  };

  return (

    <ReactECharts
      option={option}
      style={{ height: 400 }}
      // opts={{ locale: 'FR' }}
    />

  )
}