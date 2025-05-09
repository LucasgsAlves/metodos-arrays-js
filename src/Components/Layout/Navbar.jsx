import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="text-white bg-[#100b4d]">
      <div className="flex justify-between items-end p-2">
        <div className="flex gap-5 ml-auto p-2 rounded-lg text-sm">
          <Link
            to="/"
            className="transition-all duration-300 transform hover:scale-110"
          >
            INICIO
          </Link>
          <Link
            to="/Alphabetic"
            className="transition-all duration-300 transform hover:scale-110"
          >
            ALPHABETIC
          </Link>
          <Link
            to="/Numeric"
            className="transition-all duration-300 transform hover:scale-110"
          >
            NUMERIC
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
