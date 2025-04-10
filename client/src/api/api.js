import axios from "axios";

const API_BASE_URL = "https://chatinteract.onrender.com/api";
// const API_BASE_URL = "http://localhost:5005/api";

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    username,
    password,
  });
  return response.data;
};

export const registerUser = async (username, password, role) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, {
    username,
    password,
    role,
  });
  return response.data;
};

export const sendChatMessage = async (token, message) => {
  const response = await axios.post(
    `${API_BASE_URL}/chat/send`,
    { message },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const fetchChatHistory = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/chat/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllUsers = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteUserById = async (token, id) => {
  const res = await axios.delete(`${API_BASE_URL}/admin/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateUserDetails = async (token, data) => {
  const res = await axios.put(`${API_BASE_URL}/users/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
