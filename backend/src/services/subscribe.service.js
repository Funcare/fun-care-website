import Subscriber from "../models/Subscriber.js";
import { sendWelcomeEmail } from "../utils/sendEmail.js";

export const addSubscriber = async (email) => {
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email");
  }

  // Check if email already exists
  let existing = await Subscriber.findOne({ email });
  if (existing) {
    return { message: "Already subscribed" };
  }

  // Save to MongoDB
  await Subscriber.create({ email });

  // Send welcome email
  await sendWelcomeEmail(email);

  return { message: "Subscribed successfully" };
};