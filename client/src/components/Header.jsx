const Header = () => {
  return (
    <header className="w-100 h-32 flex shadow-sm justify-center items-center bg-[#9ae98d65]">
      <nav className="w-100 align-baseline text-white">
        <h1
          className="text-4xl font-bold"
          style={{ letterSpacing: "3.2px", transform: "skew(-15deg, 0deg)" }}
        >
          ARNOWA
        </h1>
        <p
          className="font-bold text-[#2c472865] text-xs ml-8"
          style={{ wordSpacing: "6.2px" }}
        >
          Smart <span className="text-red-400 mb-0 text-xs">Efficient</span>{" "}
          Effective
        </p>
      </nav>
    </header>
  )
}

export default Header
