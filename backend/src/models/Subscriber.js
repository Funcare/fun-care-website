import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", SubscriberSchema);