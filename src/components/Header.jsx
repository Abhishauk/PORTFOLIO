import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 text-gradient shadow-md py-2 z-50 shadow-slate-800">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center">
          {/* Responsive navigation menu for smaller screens */}
          <div className="sm:hidden ">
            <button
              className="text-white cursor-pointer focus:outline-none"
              onClick={handleMenuToggle}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isMenuOpen &&
              <div className="absolute top-10 left-0 bg-black text-white p-5 shadow-md px-10">
                <div className="flex flex-col space-y-2">
                  <Link
                    to="home"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-200}
                    onClick={handleMenuToggle}
                  >
                    HOME
                  </Link>
                  <Link
                    to="about"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    onClick={handleMenuToggle}
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="my-skills"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    onClick={handleMenuToggle}
                  >
                    SKILLS
                  </Link>

                  <Link
                    to="work"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    onClick={handleMenuToggle}
                  >
                    WORK
                  </Link>
                  <Link
                    to="contact"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    onClick={handleMenuToggle}
                  >
                    CONTACT
                  </Link>
                </div>
              </div>}
          </div>

          {/* Navigation for larger screens */}
          <div className="hidden sm:flex space-x-4 justify-between items-center">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer text-white font-secondary text-sm"
            >
              HOME
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer text-white font-secondary text-sm"
            >
              ABOUT
            </Link>
            <Link
              to="my-skills"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer flex items-center justify-center text-white font-secondary text-sm"
            >
              SKILLS
            </Link>

            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer flex items-center justify-center text-white font-secondary text-sm"
            >
              WORK
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer flex items-center justify-center text-white font-secondary text-sm"
            >
              CONTACT
            </Link>
          </div>

          {/* Spacer for larger screens */}
          <div className="hidden sm:block w-8" />

          {/* Button for larger screens */}
          <button className="hidden sm:block btn btn-sm text-white hover:text-white border border-pink-500 hover:bg-pink-500 focus:bg-pink-500 focus:text-white focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-pink-500 dark:text-white dark:focus:text-white">
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              onClick={handleMenuToggle}
            >
              WORK WITH ME
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
