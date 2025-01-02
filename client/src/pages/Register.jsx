import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-700">Register</h2>
            <p className="text-gray-600 mt-2">
              Please fill out the form to register
            </p>
          </div>
          <form action="" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 h-12 focus:ring-2 focus:ring-primary-purple transition-all ease-in-out duration-300 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 h-12 focus:ring-2 focus:ring-primary-purple transition-all ease-in-out duration-300 focus:outline-none"
                />
              </div>
            </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div>
                <label
                  htmlFor="cpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  placeholder="Enter your confirm password"
                  className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 h-12 focus:ring-2 focus:ring-primary-purple transition-all ease-in-out duration-300 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="w-5 h-5 border-gray-300 rounded cursor-pointer"
              />
              <p className="text-gray-600 text-sm">
                By creating an account, I agree to this website's{" "}
                <Link className="text-primary-purple font-medium">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link className="text-primary-purple font-medium">
                  terms of service
                </Link>
              </p>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className=" bg-primary-purple text-white font-medium py-2 rounded-lg px-4 h-12 w-full text-lg"
              >
                Create Account
              </button>
            </div>
            <div className="w-full text-center">
              <p className="text-lg text-zinc-700">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary-purple font-medium hover:underline hover:underline-offset-2"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
