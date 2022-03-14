import React, { useEffect, useState } from "react"
import { NavLink, useNavigate, Navigate } from "react-router-dom"
import Header from "./Header"
import {
  registerUserManual,
  loginUserManual,
  nullError,
} from "../store/actions"
import { connect, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { API_ERROR } from "../store/auth/types"

const Form = (props) => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error === "") {
      if (props.title === "Sign Up") {
        props.registerUserManual(formdata, history)
      } else {
        const data = { email: formdata.email, password: formdata.password }
        props.loginUserManual(data, history)
      }
    }
  }
  const handleInput = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (props.user.registered === true) {
      toast.success("Registered Successfully. Please Login Now", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    }
  }, [props.user.registered])

  useEffect(() => {
    if (props.user.error !== "") {
      toast.success(props.user.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    }
    props.nullError()
  }, [props.user.error])

  useEffect(() => {
    if (props.user.isAuthenticated) {
      toast.success("Logged In Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    }
  }, [props.user.isAuthenticated])

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      <div className="sm:w-[550px] w-full mx-auto h-[500px] flex justify-center items-center">
        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="text-3xl font-bold text-[#001747] mb-10 flex justify-center">
            {props.title}
          </h2>
          <div className="mb-4">
            <label
              className="block text-sm text-[#001747] font-bold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-drabya-gray font-semibold border-gray-500 pl-1 pb-1 border-0 border-b-2 appearance-none p-4 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formdata.email}
              placeholder="mike@gmail.com"
              onChange={(e) => handleInput(e)}
            />
            <NavLink
              className="inline-block float-right align-baseline font-semibold text-sm text-indigo-600 hover:text-indigo-500"
              to="/"
            >
              Forgot Password?
            </NavLink>
          </div>
          {props.title === "Sign Up" && (
            <div className="mb-4">
              <label
                className="block text-sm text-[#001747] font-bold mb-1"
                htmlFor="name"
              >
                Username
              </label>

              <input
                className="w-full bg-drabya-gray border-gray-500 border-0 border-b-2 appearance-none p-4 pl-1 pb-1 font-semibold leading-tight focus:outline-none focus:shadow-outline"
                type="username"
                name="username"
                value={formdata.username}
                placeholder="Choose Username"
                onChange={(e) => handleInput(e)}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-sm text-[#001747] font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="w-full bg-drabya-gray border-gray-500 border-0 border-b-2 appearance-none p-4 pl-1 pb-1 font-semibold leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={formdata.password}
              placeholder=" Enter your Password"
              onChange={(e) => handleInput(e)}
            />
          </div>

          <div className="flex items-center justify-between mb-5 mt-5">
            <button
              className="bg-indigo-400 hover:bg-blue-700 font-bold w-full text-xs text-[#fff] py-3 px-6 rounded-full cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {props.title == "Sign Up" ? "SIGN UP" : "LOGIN"}
            </button>
          </div>
          <p className="text-center text-sm font-bold text-uppercase">
            {props.title == "Sign Up"
              ? "Already have an account?"
              : "Don't have an account?"}
            <NavLink
              to={props.title === "Sign Up" ? "/" : "/signup"}
              className="font-bold ml-2 text-sm text-indigo-600 cursor-pointer"
            >
              {props.title === "Sign Up" ? "Log in" : "Sign Up"}
            </NavLink>
          </p>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer,
  }
}

export default connect(mapStateToProps, {
  registerUserManual,
  loginUserManual,
  nullError,
})(Form)
