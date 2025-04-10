import User from "../models/User.js";

export const updateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const updateData = {};
    if (username) updateData.username = username;
    if (password) updateData.password = password;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (username) user.username = username;
    if (password) user.password = password;

    await user.save();
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
};
