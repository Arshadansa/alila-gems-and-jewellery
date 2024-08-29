import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import logo from "../Assets/Images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

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

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex h-32 flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Logo" className="object-cover w-60 h-24" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <CiSearch size={24} className="text-white" />
              <span className="text-white">Search</span>
            </div>
            <div className="flex flex-col items-center">
              <MdAccountCircle size={24} className="text-white" />
              <span className="text-white">Login</span>
            </div>
            <div className="flex flex-col items-center">
              <AiFillShopping size={24} className="text-white" />
              <span className="text-white">Cart</span>
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 hover:text-primary md:p-0 text-white rounded md:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-0 hover:text-primary text-white rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
                  Our Jewelry
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
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                  </div>
                </motion.div>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 hover:text-primary px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
