import { Header, Form, Dashboard } from "./components"
import { Navigate, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form title="Log in" />} />
        <Route exact path="/signup" element={<Form title="Sign Up" />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
