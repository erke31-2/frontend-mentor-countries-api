import { useEffect, useState } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");
  let d = document.documentElement;
  const toggleMode = () => {
    if (mode !== "light") {
      setMode("light");
      localStorage.setItem("theme", ["light"]);
    } else {
      setMode("dark");
      localStorage.setItem("theme", ["dark"]);
    }
  };
  useEffect(() => {
    switch (mode) {
      case "dark":
        d.classList.add("dark");
        break;
      case "light":
        d.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [mode, d.classList]);
  return (
    <nav className="flex justify-between px-6 py-4 max-w-[1240px] mx-auto font-Nunito800 dark:text-White text-DarkBlueLight">
      <Link to="/">
        <h1 className="text-xl font-extrabold">Where in the world?</h1>
      </Link>

      <button className="flex items-center gap-1" onClick={toggleMode}>
        {mode !== "light" ? <FaMoon /> : <FaRegMoon />}
        <p className="font-semibold">Dark Mode</p>
      </button>
    </nav>
  );
};
export default Navbar;
