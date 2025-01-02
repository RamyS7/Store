import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form className="space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:text-blue-600">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            autoFocus
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
