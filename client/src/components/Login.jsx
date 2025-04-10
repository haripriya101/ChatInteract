import React, { useState } from "react";
import { loginUser } from "../api/api.js";

const Login = ({ setToken, setRole, toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginUser(username, password);
      setToken(data.token);
      setRole(data.role);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-2/5 border border-gray-200">
      <h1 className="text-3xl font-extrabold text-center text-purple-600 mb-2">
        A ChatGPT driven Chatbot!
      </h1>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Login to Your Account
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Email"
          required
          className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold w-full py-2.5 rounded-xl shadow transition-all"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          onClick={toggleForm}
          className="text-purple-500 hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;
