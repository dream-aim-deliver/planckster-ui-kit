// import React, { useState } from "react";
// import axios from "axios";

// interface SignUpPageProps {
//   onLoginClick: () => void; // Function to handle login click
// }

// const SignUpPage: React.FC<SignUpPageProps> = ({ onLoginClick }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = async () => {
//     try {
//       // Make a POST request to your backend for sign up
//       const response = await axios.post("/api/signup", {
//         username,
//         password,
//       });
//       // Handle successful sign up, e.g., redirect user to dashboard
//     } catch (error) {
//       console.error("Error signing up:", error);
//       // Handle sign up error, e.g., show error message to user
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-8 bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         handleSignUp();
//       }}>
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
//         >
//           Sign Up
//         </button>
//       </form>
//       <p className="text-center mt-4">
//         Already have an account? <span className="text-blue-500 cursor-pointer" onClick={onLoginClick}>Login</span>
//       </p>
//     </div>
//   );
// };

// export default SignUpPage;
import React, { useState } from "react";
import axios from "axios";

interface SignUpPageProps {
  onLoginClick: () => void; // Function to handle login click
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async () => {
    // Password complexity requirements
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long",
      );
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      // Make a POST request to your backend for sign up
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post("/api/signup", {
        username,
        password,
      });
      // Handle successful sign up, e.g., redirect user to dashboard
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle sign up error, e.g., show error message to user
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-100 dark:bg-gray-600 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">
        Sign Up
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        {passwordError && (
          <p className="text-red-500 text-sm mb-4">{passwordError}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4 dark:text-white">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={onLoginClick}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUpPage;
