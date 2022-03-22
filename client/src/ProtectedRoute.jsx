import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"

const RequireAuth = (isAuthenticated) => {
  if (isAuthenticated.isAuthenticated) {
    return <Dashboard />
  } else {
    return <Navigate replace to="/" />
  }
  // return isAuthenticated === true ? children : <Navigate to="/" />
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  }
}
export default connect(mapStateToProps, null)(RequireAuth)
