import { askAI } from "../services/chat.service.js";

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await askAI(message);

    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};