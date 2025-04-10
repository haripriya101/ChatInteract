import React from "react";

const NavBar = ({ currentPage, setCurrentPage, role }) => {
  const tabs = ["chat", "profile", "settings"];
  if (role === "admin") {
    tabs.push("admin");
  }

  return (
    <div className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            currentPage === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          }`}
          onClick={() => setCurrentPage(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
