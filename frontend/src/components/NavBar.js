import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    btnRef.current.classList.toggle("open");
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    btnRef.current.classList.remove("open");
  };

  return (
    <div className=" bg-gray-900 text-white">
      <nav className="container relative mx-auto p-6 mainNav">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="hidden text-lg items-center space-x-10 font-mukta uppercase md:flex">
            <NavLink
              to="/"
              className="tracking-widest  text-primary hover:text-secondary"
            >
              Anasayfa
            </NavLink>
            <NavLink
              to="/wordList"
              className="tracking-widest text-primary hover:text-secondary"
            >
              Listem
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              ref={btnRef}
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
              onClick={handleToggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={menuRef}
        className={`z-10 absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-primary uppercase bg-black ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className=" hover:text-secondary"
          onClick={handleMenuItemClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/wordList"
          className=" hover:text-secondary"
          onClick={handleMenuItemClick}
        >
          Listem
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
