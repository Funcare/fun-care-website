const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

export const fetchPrograms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/programs`);
    if (!response.ok) {
      throw new Error("Failed to fetch programs");
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
};

export const fetchProgramBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/programs/slug/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch program");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching program:", error);
    return null;
  }
};

export const fetchCourses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses`);
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const fetchCourseBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/slug/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch course");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

// Admin API functions
const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("adminToken");
  }
  return null;
};

const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Admin Authentication
export const adminLogin = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    if (data.success && data.data.token) {
      if (typeof window !== "undefined") {
        localStorage.setItem("adminToken", data.data.token);
        localStorage.setItem("adminUser", JSON.stringify(data.data.admin));
      }
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const adminLogout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
  }
};

export const adminVerify = async () => {
  try {
    const token = getAuthToken();
    if (!token) {
      return { success: false, message: "No token found" };
    }

    const response = await fetch(`${API_BASE_URL}/admin/verify`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error verifying token:", error);
    return { success: false, message: error.message };
  }
};

export const isAdminAuthenticated = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("adminToken");
  }
  return false;
};

// Admin Program Management
export const adminGetAllPrograms = async (includeInactive = false) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/admin/programs?includeInactive=${includeInactive}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch programs");
    }

    return data.data || [];
  } catch (error) {
    console.error("Error fetching programs:", error);
    throw error;
  }
};

export const adminGetProgramById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/programs/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch program");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching program:", error);
    throw error;
  }
};

export const adminCreateProgram = async (programData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/programs`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(programData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create program");
    }

    return data.data;
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};

export const adminUpdateProgram = async (id, programData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/programs/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(programData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update program");
    }

    return data.data;
  } catch (error) {
    console.error("Error updating program:", error);
    throw error;
  }
};

export const adminDeleteProgram = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/programs/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete program");
    }

    return data;
  } catch (error) {
    console.error("Error deleting program:", error);
    throw error;
  }
};

export const adminToggleProgramStatus = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/programs/${id}/toggle`, {
      method: "PATCH",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to toggle program status");
    }

    return data.data;
  } catch (error) {
    console.error("Error toggling program status:", error);
    throw error;
  }
};

// Meeting Booking API
export const bookMeeting = async (meetingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/meetings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetingData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to book meeting");
    }

    return data;
  } catch (error) {
    console.error("Error booking meeting:", error);
    throw error;
  }
};

// Admin Meeting Management API
export const adminGetAllMeetings = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    if (filters.status) queryParams.append("status", filters.status);
    if (filters.startDate) queryParams.append("startDate", filters.startDate);
    if (filters.endDate) queryParams.append("endDate", filters.endDate);
    
    const url = `${API_BASE_URL}/admin/meetings${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const response = await fetch(url, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch meetings");
    }

    return data.data || [];
  } catch (error) {
    console.error("Error fetching meetings:", error);
    throw error;
  }
};

export const adminGetMeetingById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/meetings/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch meeting");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching meeting:", error);
    throw error;
  }
};

export const adminUpdateMeetingStatus = async (id, status, adminNotes) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/meetings/${id}/status`, {
      method: "PATCH",
      headers: getAuthHeaders(),
      body: JSON.stringify({ status, adminNotes }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update meeting status");
    }

    return data.data;
  } catch (error) {
    console.error("Error updating meeting status:", error);
    throw error;
  }
};

export const adminDeleteMeeting = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/meetings/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete meeting");
    }

    return data;
  } catch (error) {
    console.error("Error deleting meeting:", error);
    throw error;
  }
};

