import React from "react";

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
            <label htmlFor="username" className="text-gray-300">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-center"
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
