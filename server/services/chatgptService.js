import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const HF_API_KEY = process.env.HF_API_KEY;
const MODEL_URL =
  "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1";

export const getChatGPTResponse = async (message) => {
  try {
    console.log("Sending message to HuggingFace Inference API:", message);
    const response = await axios.post(
      MODEL_URL,
      { inputs: message },
      { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
    );

    const fullOutput = response.data[0]?.generated_text || "";
    const cleanOutput = fullOutput.replace(message, "").trim();
    console.log("Cleaned response is:\n", cleanOutput);
    return cleanOutput;
  } catch (error) {
    console.error("HuggingFace API Error:", error);
    return "Sorry, I'm having trouble processing your request right now. You need to update or buy a new plan.";
  }
};
