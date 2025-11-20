"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  adminGetAllMeetings,
  adminDeleteMeeting,
  adminUpdateMeetingStatus,
  adminLogout,
} from "../../../utils/api";
import Link from "next/link";
import { Calendar, Mail, Phone, Building, Clock, CheckCircle, XCircle } from "lucide-react";

export default function AdminMeetingsPage() {
  const router = useRouter();
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: "",
  });
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState({
    status: "",
    adminNotes: "",
  });

  useEffect(() => {
    loadMeetings();
  }, [filters]);

  const loadMeetings = async () => {
    try {
      setLoading(true);
      const data = await adminGetAllMeetings(filters);
      setMeetings(data);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load meetings");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete the meeting request from "${name}"?`)) {
      return;
    }

    try {
      await adminDeleteMeeting(id);
      loadMeetings();
    } catch (err) {
      alert(err.message || "Failed to delete meeting");
    }
  };

  const handleStatusUpdate = async () => {
    if (!selectedMeeting) return;

    try {
      await adminUpdateMeetingStatus(
        selectedMeeting._id,
        statusUpdate.status,
        statusUpdate.adminNotes
      );
      setShowStatusModal(false);
      setSelectedMeeting(null);
      setStatusUpdate({ status: "", adminNotes: "" });
      loadMeetings();
    } catch (err) {
      alert(err.message || "Failed to update meeting status");
    }
  };

  const openStatusModal = (meeting) => {
    setSelectedMeeting(meeting);
    setStatusUpdate({
      status: meeting.status,
      adminNotes: meeting.adminNotes || "",
    });
    setShowStatusModal(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
      completed: "bg-blue-100 text-blue-800",
    };

    const icons = {
      pending: <Clock size={14} />,
      confirmed: <CheckCircle size={14} />,
      cancelled: <XCircle size={14} />,
      completed: <CheckCircle size={14} />,
    };

    return (
      <span
        className={`px-2 py-1 text-xs rounded flex items-center gap-1 ${styles[status] || styles.pending}`}
      >
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleLogout = () => {
    adminLogout();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Meeting Bookings</h1>
              <p className="text-sm text-gray-600">Manage all meeting requests</p>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href="/admin"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                ← Back to Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({ status: "", startDate: "", endDate: "" })}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Meetings List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading meetings...</p>
          </div>
        ) : meetings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600">No meetings found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {meetings.map((meeting) => (
              <div
                key={meeting._id}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-coral"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {meeting.name}
                      </h3>
                      {getStatusBadge(meeting.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <a
                          href={`mailto:${meeting.email}`}
                          className="hover:text-coral transition"
                        >
                          {meeting.email}
                        </a>
                      </div>
                      {meeting.phone && (
                        <div className="flex items-center gap-2">
                          <Phone size={16} />
                          <a
                            href={`tel:${meeting.phone}`}
                            className="hover:text-coral transition"
                          >
                            {meeting.phone}
                          </a>
                        </div>
                      )}
                      {meeting.company && (
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span>{meeting.company}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{formatDate(meeting.preferredDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{formatTime(meeting.preferredTime)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {meeting.message && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Message:</strong> {meeting.message}
                    </p>
                  </div>
                )}

                {meeting.adminNotes && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Admin Notes:</strong> {meeting.adminNotes}
                    </p>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openStatusModal(meeting)}
                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                  >
                    Update Status
                  </button>
                  <button
                    onClick={() => handleDelete(meeting._id, meeting.name)}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Status Update Modal */}
      {showStatusModal && selectedMeeting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Update Meeting Status
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={statusUpdate.status}
                  onChange={(e) =>
                    setStatusUpdate({ ...statusUpdate, status: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Notes
                </label>
                <textarea
                  value={statusUpdate.adminNotes}
                  onChange={(e) =>
                    setStatusUpdate({ ...statusUpdate, adminNotes: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Add any notes about this meeting..."
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setShowStatusModal(false);
                  setSelectedMeeting(null);
                  setStatusUpdate({ status: "", adminNotes: "" });
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusUpdate}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

