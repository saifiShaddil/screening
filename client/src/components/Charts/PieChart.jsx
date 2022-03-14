import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Loss",
      font: {
        size: 25,
      },
      position: "bottom",
    },
  },
}

const PieChart = () => {
  const randomData = Array(3)
    .fill()
    .map(() => Math.round(Math.random() * 60))
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: randomData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <Pie
      data={data}
      options={options}
      style={{ objectFit: "contain", with: "100%", height: "contain" }}
    />
  )
}

export default PieChart
