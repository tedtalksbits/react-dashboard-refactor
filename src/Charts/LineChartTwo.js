import React from 'react'
import { Line } from 'react-chartjs-2';

const graphdata = [
   {
      x: "Label 1",
      y: 200
   },
   {
      x: "Label 2",
      y: 300
   },
   {
      x: "Label 3",
      y: 500
   },
   {
      x: "Label 4",
      y: 321
   },
   {
      x: "Label 5",
      y: 122
   },
   {
      x: "Label 6",
      y: 776
   },
   {
      x: "Label 7",
      y: 545
   },

]
const options = {
   legend: {
      display: false,
   },
   hover: {
      intersect: false
   },
   elements: {
      line: {
         tension: 0
      },
      point: {
         radius: 0,
      },
   },
   maintainAspectRatio: false,
   tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
      },
   },
   scales: {
      xAxes: [
         {
            type: "time",
            time: {
               format: "MM/DD/YY",
               tooltipFormat: "ll",
            },
            ticks: {
               display: false,
            }
         },
      ],
      yAxes: [{

         gridLines: {
            color: "rgba(0, 0, 0, 0)",
         }
      }
      ],
   },
};
const data = {
   datasets: [
      {
         fill: false,
         lineTension: 0.1,
         backgroundColor: 'black',
         borderColor: 'rgba(75,192,192,1)',
         borderCapStyle: 'butt',
         borderDash: [],
         borderDashOffset: 0.0,
         borderJoinStyle: 'miter',
         pointBorderColor: 'rgba(75,192,192,1)',
         pointBackgroundColor: '#fff',
         pointBorderWidth: 1,
         pointHoverRadius: 5,
         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
         pointHoverBorderColor: 'rgba(220,220,220,1)',
         pointHoverBorderWidth: 2,
         pointRadius: 1,
         pointHitRadius: 10,
         data: graphdata,
      }
   ]
};

const LineChartTwo = () => {
   return (
      <div>
         <Line data={data} options={options} className="chartjs" />
      </div>
   )
}

export default LineChartTwo
