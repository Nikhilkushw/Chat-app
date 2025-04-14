import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="username" className="text-base text-white label-text">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full bg-black text-white input input-bordered h-10"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-base text-white label-text">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full bg-black text-white input input-bordered h-10"
            />
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-200 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="btn bg-black text-white btn-block btn-sm mt-2 border border-slate-700"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
