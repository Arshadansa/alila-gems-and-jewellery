import React from "react";
import { FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosChatbubbles, IoLogoInstagram } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdNaturePeople, MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer class="bg-black dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="text-white flex flex-col md:flex-row  w-full  justify-center gap-4 pb-10 ">
          <div className="flex text-center gap-2 items-center">
          <GiBigDiamondRing  size={20}/>

            <span>Crafted by Hand</span>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <IoDiamondOutline  size={20}/>
              <span>Organic Materials</span>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <IoIosChatbubbles  size={20}/>

              <span>Personalized Service</span>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <FaShoppingBag  size={20}/>

              <span>Complimentary Shipping</span>
            </div>
          </div>
        </div>
        <div class="md:flex md:justify-between">
          <div class="mb-6 flex flex-col gap-4 md:mb-0">
            <a href="" class="flex text-white text-2xl items-center">
              Alilaaa gems and jewellery
            </a>
            <div className="">
              <form action="" className="flex  pl-0 flex-col gap-3 items-start">
                <div>
                  <input
                    type="text"
                    className="w-72 border bg-black text-white border-blue-600"
                    placeholder="FullName"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-72 border bg-black text-white border-blue-600"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-4 mb-2">
                  <span className="text-white">
                    Sign up to stay updated on the latest sales, new product
                    launches, and more exciting news…
                  </span>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-2 border border-blue-600"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Our Jewelry
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Info
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                  >
                    About us
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Shipping Information
                  </a>
                </li>
                <li class="">
                  <a href="#" class="hover:underline">
                    CCPA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Returns &amp;Refunds
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Alilaaa gems and jewellery™
            </a>
            . All Rights Reserved.
          </span>

          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <div className="flex  gap-1 items-center">
              <div>
                <MdOutlineMailOutline
                  size={20}
                  className="text-white hover:text-orange-300 hover:cursor-pointer"
                />
              </div>
              <div>
                <GrFacebookOption
                  size={20}
                  className="text-white hover:text-orange-300  hover:cursor-pointer"
                />
              </div>
              <div>
                <IoLogoInstagram
                  size={20}
                  className="text-white hover:text-orange-300  hover:cursor-pointer"
                />
              </div>
              <div>
                <FaWhatsapp
                  size={20}
                  className="text-white hover:text-orange-300 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
