import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    preferredDate: {
      type: Date,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      default: "America/Toronto",
    },
    meetingType: {
      type: String,
      enum: ["consultation", "program-inquiry", "custom-workshop", "other"],
      default: "consultation",
    },
    message: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    adminNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", MeetingSchema);

