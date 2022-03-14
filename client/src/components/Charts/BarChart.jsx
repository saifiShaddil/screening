import React, { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { connect, useSelector } from "react-redux"
import { getData, postData } from "../../store/actions"

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

export const randomData = Array(3)
  .fill()
  .map(() => Math.round(Math.random() * 40))

const labels = ["India", "Oman", "US"]

const BarChart = ({ userData, getData, postData, user_id }) => {
  const [res, setRes] = useState([])

  const data = {
    labels,
    datasets: [
      {
        data: res.length > 0 ? res : randomData,
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  }

  useEffect(() => {
    if (typeof userData === "object") {
      if (userData?.length === 0) {
        setTimeout(() => {
          console.log(randomData)
          postData(randomData)
        }, 2000)
      }
    }

    getData()
  }, [user_id])

  useEffect(() => {
    if (typeof userData === "object") {
      setRes(userData)
    }
    if (typeof userData === "string") {
      let str = userData.split(",")
      setRes(str)
    }
  }, [typeof userData === "string"])

  return <Bar options={options} data={data} width={400} height={200} />
}

const mapStateToProps = (state) => {
  return {
    user_id_: state.authReducer.id,
    userData: state.dataReducer.data,
    error: state.dataReducer.error,
  }
}

export default connect(mapStateToProps, { getData, postData })(BarChart)
