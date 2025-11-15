import { addSubscriber } from "../services/subscribe.service.js";

export const subscribeController = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await addSubscriber(email);

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};