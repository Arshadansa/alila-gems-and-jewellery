import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="max-w-screen-xl  py-24 gap-6 flex flex-col md:flex-row justify-center items-center mx-auto">
      <div className="md:w-1/2 bg-black  text-white flex flex-col justify-start  items-center">
        <div className=" w-full mb-8">
          <h1 className="text-2xl font-semibold mt-4">Reset Password</h1>

          <hr className=" border border-red-400  w-20 ml-9 mt-2" />
        </div>

        <form className="w-full space-y-6">
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

          <div className="w-full flex justify-between ">
            <button
              type="submit"
              className="w-56 p-3 bg-white text-black font-bold rounded-md hover:bg-gray-300"
            >
              Submit
            </button>
            <Link to={'/account/login'}>
            <div className="hover:underline text-red-400">Cancel</div>
            </Link>
          </div>
          <div className="flex   items-center text-md gap-1 mt-4 ">
            <span className="text-white text-md underline">
              Check your email for a password reset link
            </span>
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

export default ForgotPassword;
