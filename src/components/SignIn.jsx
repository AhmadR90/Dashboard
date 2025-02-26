import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import Image from "../assets/image1.png"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate =useNavigate()
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
      <div className="w-3/5 flex bg-gray-950 rounded-lg overflow-hidden shadow-lg">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="flex mb-6">
            <img src={Logo} alt="Logo" className="h-16" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Sign in</h2>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <div className="relative">
              <input type="email" placeholder="Enter your email address" className="w-full  p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <hr  className="bg-white"/>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <hr />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className=" text-sm text-gray-600">Forgot Password?</a>
          </div>
          <button onClick={()=>{navigate("/dashboard")}} className="w-full bg-orange-400 text-white p-3 rounded-4xl hover:bg-orange-500">Login</button>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 bg-black flex items-center justify-center m-3">
          <div className="text-center">
            {/* <p className="text-white text-xl font-semibold">Be The One you aspire to be</p> */}
            <img src={Image} alt="Inspiration" className="mt-4 w-735px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
