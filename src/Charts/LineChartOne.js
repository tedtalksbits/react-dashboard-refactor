import React from 'react'
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Container = styled.div`
  height: 400px;
  width: 100%;

`


const LineChartOne = ({ colorTheme, colorOutline }) => {

   const randomNums = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));

   const data = canvas => {



      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 0, 0, 450);

      gradientStroke.addColorStop(0, colorTheme);
      gradientStroke.addColorStop(0.3, colorTheme);
      gradientStroke.addColorStop(.8, "transparent");


      return {
         labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "JAN", "FEB", "MAR", "MOC", "MOC", "MOC", "MOC", "MOC", "MOC", "MOC"],
         datasets: [
            {
               label: "My First dataset",
               fill: true,
               backgroundColor: gradientStroke,
               borderColor: colorOutline,
               borderWidth: 2,
               borderDash: [],
               borderDashOffset: 0.0,
               pointBackgroundColor: colorOutline,
               pointBorderColor: "rgba(255,255,255,0)",
               pointHoverBackgroundColor: colorOutline,
               pointBorderWidth: 20,
               pointHoverRadius: 10,
               pointHoverBorderWidth: 15,
               pointRadius: 4,
               data: randomNums,
            },
         ],
      };
   };

   const options = {
      maintainAspectRatio: false,
      animation: {
         easing: 'easeInOutQuad',
         duration: 520
      },
      plugins: {

         legend: {
            display: false,
         }
      },

      tooltips: {
         backgroundColor: "#f5f5f5",
         titleFontColor: "#333",
         bodyFontColor: "#666",
         bodySpacing: 4,
         xPadding: 12,
         mode: "nearest",
         intersect: 0,
         position: "nearest",
      },
      responsive: true,
      scales: {
         yAxes: [
            {

               // barPercentage: 1.6,
               gridLines: {
                  // drawBorder: false,
                  // color: "rgba(29,140,248,0.0)",
                  // zeroLineColor: "transparent",
                  display: false,
               },
               ticks: {
                  // suggestedMin: 50,
                  // suggestedMax: 125,
                  // padding: 20,
                  // fontColor: "#9e9e9e",
                  display: false,
               },
            },
         ],

         xAxes: [
            {
               barPercentage: 1.6,
               gridLines: {
                  // drawBorder: false,
                  // color: "rgba(0,242,195,0.1)",
                  // zeroLineColor: "transparent",
                  display: false,
               },
               ticks: {
                  // padding: 20,
                  // fontColor: "#9e9e9e",
                  display: false,
               },
            },
         ],

      },
      elements: {
         line: {
            tension: 0.4
         }
      }
   }

   return (
      <Container>

         <Line
            data={data}
            options={options}
         />
      </Container>
   )
}

export default LineChartOne
