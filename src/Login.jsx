import React, { useState } from "react";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Walidacja danych
    console.log("Login: ", loginData.username);
    console.log("Hasło: ", loginData.password);
    props.onHandleHideLogIn();
    props.onLoginSuccess(loginData.username, loginData.password);
  };

  const hideLogIn = () => {
    props.onHandleHideLogIn();
  };

  return (
    <>
      <div className="fixed  inset-0  z-10 overflow-y-auto">
        <div
          className="fixed  inset-0 w-full h-full bg-black opacity-40"
          onClick={hideLogIn}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="fixed left-0 right-0 flex flex-col w-80  sm:w-full h-100 max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg ">
            <div className="mt-3  sm:flex mx-auto ">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className=" text-lg font-medium text-gray-800">Login</h4>
              </div>
            </div>
            <form className="mt-1">
              <div className="mb-2">
                <label
                  htmlFor="text"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={loginData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
              <a href="#" className="text-xs text-purple-600 hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>

            <div className="items-end gap-2 mt-3 flex flex-grow  ">
              <button
                className="w-full mt-2 p-2.5 flex-1 text-gray-200 bg-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2  "
                onClick={hideLogIn}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
