import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="max-w-screen-xl py-20 gap-10 flex flex-col md:flex-row mx-auto">
      <div className="md:w-1/2 bg-black  text-white flex flex-col justify-start  items-center">
        <div className="text-center mb-8">
          {/* <p className="text-lg">15 Harakon st. Ramat Gan</p> */}
          {/* <img src={logo} alt="G.ZAHAV Logo" className="h-16 mx-auto" /> */}
          <h1 className="text-2xl font-semibold mt-4">Create an Account</h1>
          <div className="h-1 bg-red-400 w-16 mx-auto mt-2"></div>
        </div>

        <form className="w-full space-y-6">
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="first-name"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full p-3 rounded-md bg-black border-buttonborder text-white placeholder-white"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email address*
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md border-buttonborder bg-black text-white placeholder-white"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md border-buttonborder bg-black text-white placeholder-white"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex justify-between ">
            <button
              type="submit"
              className="w-56 p-3 bg-white text-black font-bold rounded-md hover:bg-gray-300"
            >
              SignUp
            </button>
            <div className="hover:underline text-red-400">
              * Indicates a required field
            </div>
          </div>
          <div className="flex   items-center text-md gap-1 mt-4 ">
            <span className="text-white text-md underline">
              Already Registered?
            </span>
            <Link to="/account/login" className="hover:underline text-blue-400">
              Log In
            </Link>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 flex items-center">
        <img
          src="//www.gzahav.com/cdn/shop/files/DSC08366-Edit-2_f3226a2b-391c-43d7-ad8e-a5e9e3fec7ed_2000x.jpg?v=1685803294"
          className=" object-cover h-[85%] "
          alt=""
        />
      </div>
    </section>
  );
}

export default SignUp;
