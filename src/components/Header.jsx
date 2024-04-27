import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

function Header() {
  return (
    <header className="border-b mx-3 px-2 flex justify-between py-3 items-center">
      <div className="flex gap-2 drop-shadow-md">
        <img src={logo} className="w-7" />
        <h2 className="text-xl font-medium text-blue-400 ">Xuitter</h2>
      </div>
      <nav className="flex gap-4 text-md font-medium">
        <Link to={"/login"}>Log in</Link>
        <Link to={"/register"}>Registrar</Link>
      </nav>
    </header>
  );
}

export default Header;
