import * as meetingService from "../services/meeting.service.js";
import { sendMeetingConfirmationEmail, sendAdminMeetingNotification } from "../utils/sendEmail.js";

// Create a new meeting booking
export const createMeeting = async (req, res) => {
  try {
    const meeting = await meetingService.createMeeting(req.body);
    
    // Send confirmation email to user
    // Note: Resend free tier only allows sending to verified email addresses
    // For production, verify a domain in Resend to send to any recipient
    try {
      await sendMeetingConfirmationEmail(req.body);
    } catch (emailError) {
      console.warn("User confirmation email not sent (likely Resend domain verification required):", emailError.message);
      // Don't fail the request if email fails - meeting is still saved
    }
    
    // Send notification email to admin
    try {
      await sendAdminMeetingNotification(req.body);
    } catch (emailError) {
      console.error("Failed to send admin notification email:", emailError);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({
      success: true,
      message: "Meeting booking request submitted successfully",
      data: meeting,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error creating meeting booking",
      error: error.message,
    });
  }
};

// Get all meetings (admin only)
export const getAllMeetings = async (req, res) => {
  try {
    const { status, startDate, endDate } = req.query;
    const meetings = await meetingService.getAllMeetings({
      status,
      startDate,
      endDate,
    });
    res.status(200).json({
      success: true,
      data: meetings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching meetings",
      error: error.message,
    });
  }
};

// Get meeting by ID
export const getMeetingById = async (req, res) => {
  try {
    const { id } = req.params;
    const meeting = await meetingService.getMeetingById(id);
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }
    res.status(200).json({
      success: true,
      data: meeting,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching meeting",
      error: error.message,
    });
  }
};

// Update meeting status (admin only)
export const updateMeetingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;
    const meeting = await meetingService.updateMeetingStatus(id, {
      status,
      adminNotes,
    });
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Meeting status updated successfully",
      data: meeting,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error updating meeting status",
      error: error.message,
    });
  }
};

// Delete meeting (admin only)
export const deleteMeeting = async (req, res) => {
  try {
    const { id } = req.params;
    const meeting = await meetingService.deleteMeeting(id);
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Meeting deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting meeting",
      error: error.message,
    });
  }
};

