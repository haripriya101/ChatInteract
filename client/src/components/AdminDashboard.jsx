import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUserById } from "../api/api.js";

const AdminDashboard = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers(token);
      setUsers(data.users);
    } catch (err) {
      setError("Failed to fetch users.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUserById(token, id);
      setUsers(users.filter((user) => user._id !== id));
    } catch {
      alert("Error deleting user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  return (
    <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-6xl mx-auto mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-6 text-left border-b">Username</th>
              <th className="py-3 px-6 text-left border-b">Role</th>
              <th className="py-3 px-6 text-center border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="py-3 px-6 border-b">{user.username}</td>
                  <td className="py-3 px-6 border-b capitalize">{user.role}</td>
                  <td className="py-3 px-6 text-center border-b">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
