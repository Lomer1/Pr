import React from 'react';
import ReactECharts from 'echarts-for-react';


export default function Echarts() {
  const option = {
    title: {
      text: 'Line Chart Example'
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {}
        }
    },
    tooltip: {},
    legend: {
      data:['Label']
    },
    xAxis: {
      data: ['New York', 'Los Angeles', 'Singepore', 'Bangladesh', 'Saigon', 'Dallas']
    },
    yAxis: {},
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