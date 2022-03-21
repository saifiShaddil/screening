import React from "react"
import { connect, useSelector } from "react-redux"
import BarChart from "./Charts/BarChart"
import PieChart from "./Charts/PieChart"

const Dashboard = (props) => {
  const name = useSelector((state) => state.authReducer.name)
  return (
    <div className="w-full bgtop-0">
      <div className="p-5 ml-auto mr-auto bg-white bg-fixed">
        <h1 className="text-[#001747] text-3xl font-semibold flex justify-around items-center">
          Welcome {name && name}
        </h1>
        <hr className="my-2 rounded-lg h-1 bg-gray-400" style={{}} />
      </div>
      <div className="h-screen bg-blue-500 border-xl"></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer,
  }
}

export default connect(mapStateToProps, null)(Dashboard)
