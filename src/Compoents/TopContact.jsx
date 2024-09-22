import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

function TopContact() {
  return (
    <section>
      <div className="max-w-screen-xl  relative z-30 flex items-center justify-between px-6 py-3 mx-auto ">
        <div>
          <span className="text-white">
            City Center Complex Jaipur-302001 (Raj.) Ind.
          </span>
        </div>
        <div className="flex  gap-1 items-center">
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
        <div>
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="text-white  border    relative z-30 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            GBP{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            class=" hidden  relative z-30  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 relative z-30 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ILS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  USD
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  EUR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  GBP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopContact;
