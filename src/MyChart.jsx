import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";


export default function MyChart({ data }) {
  const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a);
  const top20 = sortedData.slice(0, 20);
  console.log(top20);
  const labelsArray = [];

  for (const word of top20) {
    labelsArray.push(word[0]);
  }
  // console.log(labelsArray);

  const dataArray = [];

  for (const freq of top20) {
    dataArray.push(freq[1]);
  }

  const chartData = {
    labels: labelsArray,
    datasets: [
      {
        label: "Frequency",
        data: dataArray,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: "category", // Use the category scale type
      },
    },
  };

  

  return (
    <div>
      MyChart
      <Bar data={chartData} options={chartOptions} />
      <button>Export</button>
    </div>
  );
}
