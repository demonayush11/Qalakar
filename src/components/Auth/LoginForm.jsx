import React from "react";
import myimage from "../../assets/images/signup2.jpg";
import Logo from "../../assets/images/logo3.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side - Form */}
      <div className="bg-[#F8F8F8] w-full md:w-1/2 flex flex-col items-center justify-center py-10 px-6 sm:px-12 md:px-16 overflow-y-auto">
        {/* Logo + Title */}
        <div className="flex flex-col items-center w-full max-w-md mb-8">
          {/* Logo */}
          <div className="w-max mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-[#030303] tracking-[2px] text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-center">
            WELCOME BACK
          </h1>

          {/* Subtitle */}
          <p className="text-[#636364] text-xs sm:text-sm mt-3 sm:mt-4 tracking-[1.2px] font-poppins text-center px-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col w-full max-w-md">
          <form className="flex flex-col w-full mt-6 space-y-4 sm:space-y-5">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-poppins text-[#030303] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[#636364] border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black w-full"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-poppins text-[#030303] mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black w-full"
              />
            </div>

            {/* Checkbox + Forgot Password */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center mb-2 sm:mb-0">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-black"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#030303] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#d72d18] text-white rounded-lg py-2 text-sm sm:text-base font-poppins hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-[#636364] text-xs sm:text-sm mt-6 font-poppins text-center px-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#d72d18] hover:underline">
              Sign Up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto flex-shrink-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${myimage})` }}
      ></div>
    </div>
  );
};

export default LoginForm;
