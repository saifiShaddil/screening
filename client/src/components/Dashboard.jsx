import React from "react"
import { connect } from "react-redux"
import BarChart from "./Charts/BarChart"
import PieChart from "./Charts/PieChart"

const Dashboard = (user) => {
  return (
    <div className="w-full h-screen bg-fixed top-0 p-5 ml-auto mr-auto bg-gray-100">
      <h1 className="text-[#001747] text-3xl font-semibold flex justify-center items-center">
        Welcome {user?.name}
      </h1>
      <hr className="my-2 rounded-lg h-1 bg-gray-400" style={{}} />
      <div className="flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="flex justify-center w-[400px] md:w-[550px] text-6xl border-2 border-none rounded-xl p-6 ">
          <BarChart />
        </div>
        <div className="flex justify-center w-[400px] md:w-[550px] text-6xl border-2 border-none rounded-xl p-6">
          <PieChart />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.username,
  }
}

export default connect(mapStateToProps, null)(Dashboard)
