import Meeting from "../models/Meeting.js";

export const createMeeting = async (meetingData) => {
  const meeting = new Meeting(meetingData);
  return await meeting.save();
};

export const getAllMeetings = async (filters = {}) => {
  const query = {};
  
  if (filters.status) {
    query.status = filters.status;
  }
  
  if (filters.startDate || filters.endDate) {
    query.preferredDate = {};
    if (filters.startDate) {
      query.preferredDate.$gte = new Date(filters.startDate);
    }
    if (filters.endDate) {
      query.preferredDate.$lte = new Date(filters.endDate);
    }
  }
  
  return await Meeting.find(query).sort({ preferredDate: 1, createdAt: -1 });
};

export const getMeetingById = async (id) => {
  return await Meeting.findById(id);
};

export const updateMeetingStatus = async (id, updateData) => {
  return await Meeting.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  );
};

export const deleteMeeting = async (id) => {
  return await Meeting.findByIdAndDelete(id);
};

