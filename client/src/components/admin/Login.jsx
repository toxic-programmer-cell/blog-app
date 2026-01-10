import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };
  return (
    <div className="relative flex items-center justify-center h-screen">
      <FaArrowLeft
        className="absolute top-5 left-5 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="text"
                placeholder="Enter your email"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <div className="flex items-center relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your email"
                  className="border-b-2 border-gray-300 p-2 outline-none mb-6 w-full"
                />
                {showPassword ? (
                  <div className="absolute right-0 top-1/3 -translate-y-1/2">
                    <FaEye
                      className="pl-1.5 cursor-pointer"
                      size={22}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                ) : (
                  <div className="absolute right-0 top-1/3 -translate-y-1/2">
                    <FaEyeSlash
                      size={22}
                      className="pl-1.5 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg mt-4 cursor-pointer hover:bg-primary/90 transition-all duration-75"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
