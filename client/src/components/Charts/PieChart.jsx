import React, { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import { connect } from "react-redux"
import { PieChartGet, postPieChart } from "../../store/actions"

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
export const randomData = Array(3)
  .fill()
  .map(() => Math.round(Math.random() * 60))

const PieChart = ({ userData, PieChartGet, postPieChart, user_id }) => {
  const [res, setRes] = useState([])

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: res.length > 0 ? res : randomData,
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
  useEffect(() => {
    if (typeof userData === "object") {
      if (userData?.length === 0) {
        setTimeout(() => {
          postPieChart(randomData)
        }, 2000)
      }
    }

    PieChartGet()
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

  return (
    <Pie
      data={data}
      options={options}
      style={{ objectFit: "contain", with: "100%", height: "contain" }}
    />
  )
}
const mapStateToProps = (state) => {
  return {
    user_id_: state.authReducer.id,
    userData: state.dataReducer.data1,
    error: state.dataReducer.error,
  }
}
export default connect(mapStateToProps, { PieChartGet, postPieChart })(PieChart)
