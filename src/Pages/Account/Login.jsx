import React from "react";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="py-20 bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        {/* <p className="text-lg">15 Harakon st. Ramat Gan</p> */}
        <img
          src={logo}
          alt="G.ZAHAV Logo"
          className="h-16 mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">Customer Login</h1>
        <div className="h-1 bg-red-400 w-16 mx-auto mt-2"></div>
      </div>

      <form className="w-96 space-y-6">
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
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded-md border-buttonborder bg-black text-white placeholder-white"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-white text-black font-bold rounded-md hover:bg-gray-300"
        >
          Login
        </button>
        <div className="flex justify-between mt-4 text-sm text-blue-400">
          <Link to="/account/forgotpassword" className="hover:underline">
            Forgot your password?
          </Link>
          <Link to="/account/signup" className="hover:underline">
            Sign up
          </Link>
        </div>
      </form>

   
    </div>
  );
};

export default Login;
