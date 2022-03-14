import React from "react"
import { Bar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  colors: [
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
  borderWidth: 1,
  borderColor: [
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
  plugins: {
    title: {
      display: true,
      text: "Growth",
      position: "bottom",
      font: {
        size: 25,
      },
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: false,
      grid: {
        display: false,
      },
    },
  },
  showAllTooltips: true,
  maintainAspectRatio: true,
}

const labels = ["India", "Oman", "US"]

const BarChart = () => {
  const randomData = Array(3)
    .fill()
    .map(() => Math.round(Math.random() * 40))
  const data = {
    labels,
    datasets: [
      {
        data: randomData,
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  }
  return <Bar options={options} data={data} width={400} height={200} />
}

export default BarChart
