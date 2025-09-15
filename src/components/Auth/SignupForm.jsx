import React, { useState } from "react";
import myimage from "../../assets/images/signup2.jpg";
import Logo from "../../assets/images/logo3.png";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Proceed with form submission (e.g., API call)
    console.log({ role, email, password });
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side - Form */}
      <div className="bg-[#F8F8F8] w-full md:w-1/2 flex flex-col items-center justify-center py-10 px-6 sm:px-12 md:px-16 overflow-y-auto">
        {/* Logo + Title */}
        <div className="flex flex-col items-center w-full max-w-md mb-8">
          <div className="w-max mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] object-contain"
            />
          </div>
          <h1 className="text-[#030303] tracking-[2px] text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-center">
            WELCOME BACK
          </h1>
          <p className="text-[#636364] text-xs sm:text-sm mt-3 sm:mt-4 tracking-[1.2px] font-poppins text-center px-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col w-full max-w-md">
          <form className="flex flex-col w-full mt-6 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            {/* Role Dropdown */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-poppins text-[#030303] mb-2">
                Select Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base text-[#636364] focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Choose an option</option>
                <option value="artist">Artist</option>
                <option value="client">Client</option>
                <option value="coordinator">Coordinator</option>
              </select>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-poppins text-[#030303] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black w-full"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-poppins text-[#030303] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#d72d18] text-white rounded-lg py-2 text-sm sm:text-base font-poppins hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>

        
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

export default SignupForm;
