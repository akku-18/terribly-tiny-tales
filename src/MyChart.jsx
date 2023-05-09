import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";

export default function MyChart({ data }) {
  const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a);
  const top20 = sortedData.slice(0, 20);

  // Create arrays for labels and data
  const labelsArray = [];
  const dataArray = [];
  for (const [label, data] of top20) {
    labelsArray.push(label);
    dataArray.push(data);
  }

  const chartData = {
    labels: labelsArray,
    datasets: [
      {
        label: "Frequency",
        data: dataArray,
        backgroundColor: "blueviolet",
        borderColor: "#7952B3",
        borderWidth: 1,
        borderRadius: 10, // set the border radius
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 16, // set font size for y-axis ticks
            weight: "bold",
          },
        },
      },
      x: {
        type: "category", // Use the category scale type
        ticks: {
          font: {
            size: 16, // set font size for y-axis ticks
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16, // set font size for legend
            weight: "bold",
          },
          padding: 20, // set padding for the label
          borderRadius: 10, // set border radius for the label
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "4%",
        background: "#E1E8EB",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <Bar data={chartData} options={chartOptions} />
      <button
        style={{
          backgroundColor: "#FFC107",
          border: "None",
          padding: "7px 12px",
          borderRadius: "5px",
          marginTop: "15px",
          cursor: "pointer",
        }}
      >
        Export
      </button>
    </div>
  );
}
