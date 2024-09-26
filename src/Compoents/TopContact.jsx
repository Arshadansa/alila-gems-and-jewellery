import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

function TopContact() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <section>
      <div className="max-w-screen-xl relative z-30 flex items-center justify-between px-6 py-3 mx-auto">
        <div>
          <span className="text-white">
            City Center Complex Jaipur-302001 (Raj.) Ind.
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <MdOutlineMailOutline size={20} className="text-white" />
          </div>
          <div>
            <GrFacebookOption size={20} className="text-white" />
          </div>
          <div>
            <IoLogoInstagram size={20} className="text-white" />
          </div>
          <div>
            <FaWhatsapp size={20} className="text-white" />
          </div>
        </div>
        <div>
          <span className="text-white">+91-9667949211</span>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id="dropdownHoverButton"
            className="text-white border relative z-50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center "
            type="button"
            onClick={toggleDropdown}
          >
            {selectedCurrency}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-30 bg-black/50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul
                className="py-2 mt-1 relative z-30 text-sm rounded-lg border text-white "
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100  hover:text-black "
                    onClick={() => handleCurrencyChange("THB")}
                  >
                    THB
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black  "
                    onClick={() => handleCurrencyChange("USD")}
                  >
                    USD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black  "
                    onClick={() => handleCurrencyChange("JPY")}
                  >
                    JPY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black  "
                    onClick={() => handleCurrencyChange("GBP")}
                  >
                    GBP
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TopContact;
