import React, { useState } from "react";
import { updateUserDetails } from "../api/api.js";

const Settings = ({ token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!username && !password) {
      setMessage("Please enter a new username or password.");
      return;
    }

    try {
      await updateUserDetails(token, { username, password });
      setMessage("Account updated successfully.");
      setUsername("");
      setPassword("");
    } catch {
      setMessage("Failed to update account.");
    }
  };

  return (
    <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl max-w-xl mx-auto mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Account Settings</h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-sm">New Username</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter new username"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-sm">New Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Update Account
        </button>
      </form>
      {message && (
        <p className="mt-6 text-center text-sm text-blue-600">{message}</p>
      )}
    </div>
  );
};

export default Settings;
