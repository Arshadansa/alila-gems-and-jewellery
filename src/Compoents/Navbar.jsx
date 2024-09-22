import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import logo from "../Assets/Images/logo.png";

import { useCart } from "../Context/cartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const { itemCount } = useCart();
  console.log(itemCount);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Adjust delay as needed
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-10 transition-opacity duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-40 top-0 transition-all  duration-500 ease-in-out"
          : "bg-black md:top-11 transition-all duration-500 ease-in-out"
      }`}
    >
      <div className="max-w-screen-xl flex md:pr-8 lg:pr-14  pr-2 flex-wrap items-center justify-between mx-auto ">
        <Link to="/" className="flex items-center   rtl:space-x-reverse">
          <img src={logo} alt="Logo" className="object-cover w-32 md:w-full  " />
        </Link>

        <div className="flex    items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-3 items-end md:items-center md:justify-center ">
            <div className="md:flex flex-col hidden  items-center group hover:cursor-pointer">
              <CiSearch
                size={24}
                className="text-white group-hover:text-primary transition-colors duration-300"
              />
              <span className="text-white group-hover:text-primary transition-colors duration-300">
                Search
              </span>
            </div>
            <Link to={"/account/login"}>
              <div className="flex flex-col items-center group">
                <MdAccountCircle
                  size={24}
                  className="text-white group-hover:text-primary transition-colors duration-300"
                />
                <span className="text-white text-sm group-hover:text-primary transition-colors duration-300">
                  Login
                </span>
              </div>
            </Link>

            <Link to={"/cart"}>
              <div className="flex relative flex-col justify-center items-center group">
                <AiFillShopping
                  size={24}
                  className="text-white group-hover:text-primary transition-colors duration-300"
                />
                <span className="text-white rounded-full px-1.5 bottom-8 text-xs left-4 bg-red-600 absolute ">
                  {itemCount}
                </span>
                <span className="text-white text-sm group-hover:text-primary transition-colors duration-300">
                  Cart
                </span>
              </div>
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

        </div>
          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 ${
                    location.pathname === "/"
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  } md:p-0  rounded md:bg-transparent`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 ${
                    location.pathname === "/about"
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  } md:p-0 rounded md:bg-transparent`}
                >
                  About
                </Link>
              </li>

              <li>
                <div
                  className="relative inline-block text-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-white hover:text-primary font-medium rounded-lg text-center inline-flex items-center"
                    type="button"
                  >
                    Our Jewellery
                    <IoIosArrowDown
                      className={`ml-2 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : +40 }}
                    transition={{ duration: 0.8 }}
                    className={`z-10 bg-white divide-y mt-12 h-96 divide-gray-100 rounded-lg shadow border w-[60rem] dark:bg-gray-700 absolute -left-[500px] ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="grid text-black grid-cols-4">
                      <Link to="/collections/rings">
                        <div>Product-1</div>
                      </Link>
                      <Link to="/collections/rings">
                        <div>Product-2</div>
                      </Link>
                      <Link to="/collections/rings">
                        <div>Product-3</div>
                      </Link>
                      <Link to="/collections/rings">
                        <div>Product-4</div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-3 ${
                    location.pathname === "/contact"
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  } md:p-0  rounded md:bg-transparent`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
