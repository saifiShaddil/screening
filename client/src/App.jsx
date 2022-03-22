import { Header } from "./components"
import { Navigate, Route, Routes } from "react-router-dom"
import RequireAuth from "./ProtectedRoute"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/dashboard" element={<RequireAuth />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
