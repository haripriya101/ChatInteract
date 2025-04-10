import React from "react";

const Profile = ({ role }) => {
  return (
    <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto mt-12 border border-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
      <p className="text-lg">
        Your current role is:{" "}
        <span className="font-semibold text-blue-600 capitalize">{role}</span>
      </p>
    </div>
  );
};

export default Profile;
