import React, { useState } from "react";
import axios from "axios";
import { SignUpPage } from "../signup";
import { TopBar } from "../topbar";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend for login
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      // Handle successful login, e.g., redirect user to dashboard
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error, e.g., show error message to user
    }
  };

  return (
    <div className="dark:bg-slate-800">
      <TopBar />
      <div className="flex justify-center items-center h-screen">
        {showSignUp ? (
          <SignUpPage
            onLoginClick={() => setShowSignUp(false)} // Set showSignUp to false to show login page
          />
        ) : (
          <div className="max-w-md mx-auto p-8 bg-gray-100 dark:bg-gray-600 rounded-lg shadow-md">
            <h2
              data-testid="login-title"
              className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white"
            >
              Login
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-2 text-gray-800 dark:text-white dark:border-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2 text-gray-800 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none dark:border-gray-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-4 text-gray-800 dark:text-white">
              New user?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setShowSignUp(true)}
              >
                Create your sign up
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
