import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-700">Login</h2>
            <p className="text-gray-600 mt-2">
              Welcome back! Please login to your account
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 h-12 focus:ring-2 focus:ring-primary-purple transition-all ease-in-out duration-300 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 h-12 focus:ring-2 focus:ring-primary-purple transition-all ease-in-out duration-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded cursor-pointer "
                />
                <p className="text-gray-600">Remember me</p>
              </div>
              <Link
                to="/forgot-password"
                className="text-primary-purple font-medium hover:underline hover:underline-offset-2"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-primary-purple text-white font-medium py-2 rounded-lg px-4 h-12 w-full text-lg"
              >
                Login
              </button>
            </div>
            <div className="w-full text-center">
              <p className="text-lg text-zinc-700">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary-purple font-medium hover:underline hover:underline-offset-2"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
