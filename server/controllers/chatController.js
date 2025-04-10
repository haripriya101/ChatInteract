import ChatSession from "../models/ChatSession.js";
import { getChatGPTResponse } from "../services/chatgptService.js";
import { getProductInfo } from "../services/inventoryService.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.id;

    let chatSession = await ChatSession.findOne({ user: userId });
    if (!chatSession) {
      chatSession = new ChatSession({ user: userId, messages: [] });
    }
    chatSession.messages.push({ sender: "user", message });

    const aiResponse = await getChatGPTResponse(message);
    const productInfo = await getProductInfo(message);

    const finalResponse = productInfo
      ? `${aiResponse}\n\nAdditional Info: ${productInfo}`
      : aiResponse;

    chatSession.messages.push({ sender: "bot", message: finalResponse });
    await chatSession.save();

    res.status(200).json({ response: finalResponse });
  } catch (error) {
    res.status(500).json({ message: "Error processing message", error });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const chatSession = await ChatSession.findOne({ user: userId });
    res.status(200).json({ messages: chatSession ? chatSession.messages : [] });
  } catch (error) {
    res.status(500).json({ message: "Error fetching chat history", error });
  }
};
