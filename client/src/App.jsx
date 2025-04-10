import React, { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import Profile from "./components/Profile.jsx";
import Settings from "./components/Settings.jsx";
import NavBar from "./components/Navbar.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";

const App = () => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("chat");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");
    if (savedToken && savedRole) {
      setToken(savedToken);
      setRole(savedRole);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (token && role) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    }
  }, [token, role]);

  const handleLogout = () => {
    setToken(null);
    setRole(null);
    setIsRegistering(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "chat":
        return <ChatWindow token={token} role={role} />;
      case "profile":
        return <Profile token={token} role={role} />;
      case "settings":
        return <Settings token={token} />;
      case "admin":
        return role === "admin" ? (
          <AdminDashboard token={token} />
        ) : (
          <ChatWindow token={token} role={role} />
        );
      default:
        return <ChatWindow token={token} role={role} />;
    }
  };

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4 ">
      {!token ? (
        <div className="flex items-center justify-center h-screen">
          {isRegistering ? (
            <Register
              setToken={setToken}
              setRole={setRole}
              toggleForm={() => setIsRegistering(false)}
            />
          ) : (
            <Login
              setToken={setToken}
              setRole={setRole}
              toggleForm={() => setIsRegistering(true)}
            />
          )}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto py-6">
          <div className="flex justify-between items-center mb-4">
            <NavBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              role={role}
            />
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full shadow-md transition-all"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="p-6">{renderPage()}</div>
        </div>
      )}
    </div>
  );
};

export default App;
