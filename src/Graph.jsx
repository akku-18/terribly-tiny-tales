import React from "react";
import { Bar } from "react-chartjs-2";
import { scaleLinear } from "d3-scale";

export default function Graph() {
  const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a);
  const top20 = sortedData.slice(0, 20);
  console.log(top20);

  const data = [
    ['apple', 5],
    ['orange', 3],
    ['banana', 2],
    ['pear', 1]
  ];
  // Create a linear scale for the y-axis
  const chartData = {
    labels: data.map((item) => item[0]), // Array of words
    datasets: [
      {
        label: "Frequency",
        data: data.map((item) => item[1]), // Array of frequencies
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes:[
        {
          type: 'category'
        }
      ],
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
