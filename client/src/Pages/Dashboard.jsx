import React, { useState, useEffect } from "react"
import { connect, useSelector } from "react-redux"
import { toast } from "react-toastify"

import { ToastContainer } from "react-toastify"
import { Header } from "../components"
import { update_data, getData } from "../store/actions"

const Dashboard = ({ update_data, getData }) => {
  const user = useSelector((state) => state.authReducer)

  const [formdata, setFormData] = useState({
    username: user.name,
    email: user.email,
    age: user.age,
    dob: user.dob,
    gender: user.gender,
    mobile: user.mobile,
  })

  const handleInput = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    getData()
    e.preventDefault()
    const { age, dob, mobile, gender, username, email } = formdata
    if (gender === "") {
      toast.warn("Please Select Gender", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
      return
    }
    if (dob === "") {
      toast.warn("Date of Birth must be specified", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
      return
    }
    if (age === "") {
      toast.warn("Age must not be Empty", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
      return
    }
    if (mobile === "") {
      toast.warn("Plaese Provide the Mobile", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
      return
    }

    update_data(formdata)
  }

  useEffect(() => {
    if (user.updated === true) {
      toast.success("Updated Successfully!!!", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    }
  }, [user.updated])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (typeof user.id === "string") {
      setFormData({
        username: user.name,
        email: user.email,
        age: user.age,
        dob: user.dob,
        gender: user.gender,
        mobile: user.mobile,
      })
    }
  }, [user.fetched])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      <Header />
      <div className="mt-10 sm:mt-0 w-full">
        <div
          className="md:grid md:grid-cols-2 md:gap-6"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={(e) => handleUpdate(e)}>
              <div className="shadow-2xl overflow-hidden sm:rounded-md">
                <h1 className="text-2xl my-3 ml-6 inline-block font-semibold text-indigo-700 underline">
                  Update your Profile
                </h1>
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Username
                      </label>
                      <input
                        onChange={(e) => handleInput(e)}
                        value={formdata.username}
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username-name"
                        className="mt-1 p-3 font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        onChange={(e) => handleInput(e)}
                        value={formdata.email}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 p-3 font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Gender
                      </label>
                      <select
                        onChange={(e) => handleInput(e)}
                        value={formdata.gender}
                        id="gender"
                        name="gender"
                        autoComplete="gender"
                        className="mt-1 p-3 block font-semibold w-full border-none border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        {formdata.gender === "" && (
                          <option defaultValue="Select Gender">
                            Select Gender
                          </option>
                        )}
                        <option>Select Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Transgender</option>
                        <option>Non-binary</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <input
                        onChange={(e) => handleInput(e)}
                        value={formdata.dob}
                        type="date"
                        name="dob"
                        id="dob"
                        autoComplete="dob"
                        className="mt-1 p-3 font-semibold focus:ring-indigo-500 focus:border-indigo-500 outline-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2 ">
                      <label
                        htmlFor="age"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        onChange={(e) => handleInput(e)}
                        value={formdata.age}
                        type="number"
                        name="age"
                        id="age"
                        autoComplete="age"
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2 ">
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Mobile
                      </label>
                      <input
                        onChange={(e) => handleInput(e)}
                        value={formdata.mobile}
                        type="number"
                        name="mobile"
                        id="mobile"
                        autoComplete="mobile-number"
                        className="mt-1 p-3 font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex text-md trans-1 justify-center py-3 px-6 border border-transparent shadow-md font-semibold rounded-3xl text-white bg-indigo-600 hover:bg-white hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer,
  }
}

export default connect(mapStateToProps, { update_data, getData })(Dashboard)
