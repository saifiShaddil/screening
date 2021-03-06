import React, { useEffect, useState } from "react"
import { NavLink, useNavigate, Navigate } from "react-router-dom"
import { registerUserManual, nullError } from "../store/actions"
import { connect, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { API_ERROR } from "../store/auth/types"

const Register = (props) => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [cpass, setCPassword] = useState("")
  const [cfpass, setCFpass] = useState(false)

  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formdata.password === cpass) {
      if (error === "") {
        props.registerUserManual(formdata, history)
      } else {
        // const data = { email: formdata.email, password: formdata.password }
        // props.loginUserManual(data, history)
      }
    } else {
      setCFpass(true)
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
    if (cfpass === true) {
      toast.error("Password Does Not Match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    }
  }, [props.user.registered, cfpass])

  useEffect(() => {
    if (props.user.error !== "") {
      toast.error(props.user.error, {
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
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
          // style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);"
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center bg-[#161616] justify-center text-center md:px-16 px-0 z-0">
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
            // style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);"
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6">
              <svg
                viewBox="0 0 247 31"
                className="w-auto h-7 sm:h-8 inline-flex"
              >
                <path
                  // fill="rgba(99,102,241, .8)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                  fill="#06B6D4"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                  // fill="#000"
                ></path>
              </svg>
            </h1>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              <div className="pb-2 pt-4">
                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="cpassword"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                  Register
                </button>
              </div>

              <p className="text-center mt-3 text-sm font-bold text-uppercase">
                Already have an account?
                <NavLink
                  to="/login"
                  className="font-bold ml-2 text-sm text-indigo-600 cursor-pointer"
                >
                  Log In
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* <div className="sm:w-[550px] w-full mx-auto h-[500px] flex justify-center items-center">
        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="text-3xl font-bold text-[#001747] mb-10 flex justify-center">
            Sign Up
          </h2>
          <div className="my-3">
            <label
              className="block text-sm text-[#001747] font-bold"
              htmlFor="name"
            >
              Username
            </label>
            <input
              className="w-full bg-drabya-gray border-gray-500 border-0 border-b-2 appearance-none py-2 pl-1 font-semibold leading-tight focus:outline-none focus:shadow-outline"
              type="username"
              name="username"
              value={formdata.username}
              placeholder="Choose Username"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="my-3">
            <label
              className="block text-sm text-[#001747] font-bold"
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
          </div>
          <div className="my-3">
            <label
              className="block text-sm text-[#001747] font-bold"
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

          <div className="my-3">
            <label
              className="block text-sm text-[#001747] font-bold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full bg-drabya-gray border-gray-500 border-0 border-b-2 appearance-none p-4 pl-1 pb-1 font-semibold leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={formdata.password}
              placeholder="Confirm your Password"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="flex items-center justify-between mb-5 mt-5">
            <button
              className="bg-indigo-400 hover:bg-blue-700 font-bold w-full text-xs text-[#fff] py-3 px-6 rounded-full cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SIGN UP
            </button>
          </div>
          <p className="text-center text-sm font-bold text-uppercase">
            Already have an account?
            <NavLink
              to="/login"
              className="font-bold ml-2 text-sm text-indigo-600 cursor-pointer"
            >
              Log In
            </NavLink>
          </p>
        </form>
      </div> */}
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
  nullError,
})(Register)
