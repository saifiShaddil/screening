import { connect } from "react-redux"
import { logoutUserManual } from "../store/actions"
import { useNavigate } from "react-router-dom"

const Header = ({ logoutUserManual }) => {
  const history = useNavigate()
  const handleLogout = () => {
    logoutUserManual(history)
  }

  return (
    <nav className="w-full flex justify-around py-5 mx-auto mb-3 shadow-sm bg-indigo-600 text-white">
      <div className="flex items-center justify-around">
        <h3 className="text-2xl md:text-3xl md font-medium">Profiler's</h3>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={handleLogout}
          className="px-6 py-3 font-semibold border-xl text-indigo-600 trans-1 hover:shadow-md bg-white hover:text-white hover:bg-indigo-500 rounded-3xl"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default connect(null, { logoutUserManual })(Header)
