import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`bg-secondary/80 py-3 text-lightPrimary sticky top-0 backdrop-blur-lg z-[1000] ${className}`}
      >
        <div className="container px-8 md:px-0 mx-auto flex items-center justify-between w-full">
          <div>
            <h1 className="text-xl text-lightPrimary">
              <Link to="/">Conectar Igualdad</Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-9 text-lightPrimary   cursor-pointer">
              <li className="hover:opacity-100  transition-all duration-100 opacity-75">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:opacity-100  transition-all duration-100 opacity-75">
                <Link to="/netbook">Netbook</Link>
              </li>
              <li className="hover:opacity-100  transition-all duration-100 opacity-75">
                <Link to="/register">Soporte Técnico</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="hidden md:block bg-primary py-1 px-3 rounded-[5px] hover:bg-opacity-75 cursor-pointer ">
              <Link to="/login">Ingresar</Link>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden   py-0 px-3 rounded-[5px] hover:bg-opacity-75 cursor-pointer "
            >
              <IoMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ visibility: !isMenuOpen ? "hidden" : "visible" }}
        className="top-0 left-0 bg-darkPrimary/60 backdrop-blur-sm w-full h-full z-[150] fixed "
      ></div>
      <div
        className={`fixed bg-secondary top-[55px] right-0 z-[200] translate-x-[100%] h-full w-[50%] p-4 border-[1px] border-primary ${
          isMenuOpen ? "animate-fade-left animate-duration-300" : " "
        }`}
      >
        <div className="flex justify-between gap-3 mb-5">
          <button className="block flex-1  text-lightPrimary bg-darkPrimary bg-opacity-75   py-1 px-3 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100 ">
            <Link to="/register" onClick={closeMenu}>
              Registrate
            </Link>
          </button>
          <button className="block flex-1 bg-primary py-1 px-3 rounded-[5px] hover:bg-opacity-75 cursor-pointer ">
            <Link to="/login" onClick={closeMenu}>
              Ingresar
            </Link>
          </button>
        </div>

        <ul className="flex flex-col gap-9 text-lightPrimary   cursor-pointer">
          <li className="hover:opacity-100  transition-all duration-100 opacity-75">
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="hover:opacity-100  transition-all duration-100 opacity-75">
            <Link to="/notebook" onClick={closeMenu}>
              Notebook
            </Link>
          </li>
          <li className="hover:opacity-100  transition-all duration-100 opacity-75">
            <Link to="/register" onClick={closeMenu}>
              Soporte Técnico
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
