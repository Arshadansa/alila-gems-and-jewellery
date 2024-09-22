import { FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosChatbubbles, IoLogoInstagram } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="text-white flex flex-col md:flex-row w-full justify-center gap-4 pb-10">
          <div className="flex text-center gap-2 items-center">
            <GiBigDiamondRing size={20} />
            <span>Crafted by Hand</span>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <IoDiamondOutline size={20} />
              <span>Organic Materials</span>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <IoIosChatbubbles size={20} />
              <span>Personalized Service</span>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <FaShoppingBag size={20} />
              <span>Complimentary Shipping</span>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-4 md:mb-0">
            <Link to="/" className="flex text-white text-2xl items-center">
              Alila gems and jewellery
            </Link>
            <div className="">
              <form action="" className="flex pl-0 flex-col gap-3 items-start">
                <div>
                  <input
                    type="text"
                    className="w-72 border bg-black text-white border-buttonborder"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-72 border bg-black text-white border-buttonborder"
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
                  className=" hover:underline text-white px-8 py-2 border border-buttonborder"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Our Jewelry
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    product_category_1
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    product_category_2
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Info
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    CCPA
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Returns &amp; Refunds
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline hover:text-primary">
              Alilaaa gems and jewellery™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <div className="flex gap-1 items-center">
              <div>
                <MdOutlineMailOutline
                  size={20}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
              <div>
                <GrFacebookOption
                  size={20}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
              <div>
                <IoLogoInstagram
                  size={20}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
              <div>
                <FaWhatsapp
                  size={20}
                  className="text-white hover:text-primary hover:cursor-pointer"
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
