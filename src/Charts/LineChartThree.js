import React from 'react'
import { Line } from 'react-chartjs-2'
const data = {
   labels: ['Ping'],
   datasets: [{
      label: 'Ping Numbers',
      data: [Math.round(Math.random() * 150)],
      borderColor: '#FFF',
      backgroundColor: 'transparent',
      borderWidth: 2
   }]
};

const options = {
   elements: {
      point: {
         radius: 0
      }
   },
   legend: {
      display: false
   },
   tooltips: {
      callbacks: {
         label: function (tooltipItem) {
            return tooltipItem.yLabel;
         }
      }
   },
   scales: {
      xAxes: [{
         display: false
      }],
      yAxes: [{
         display: false,
         ticks: {
            beginAtZero: true
         }
      }]
   }
}

const LineChartThree = () => {
   return (
      <div>
         <Line options={options} data={data} />
      </div>
   )
}

export default LineChartThree
