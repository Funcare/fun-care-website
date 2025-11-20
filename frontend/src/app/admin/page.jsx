"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  adminGetAllPrograms,
  adminDeleteProgram,
  adminToggleProgramStatus,
  adminLogout,
} from "../../utils/api";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showInactive, setShowInactive] = useState(false);

  useEffect(() => {
    loadPrograms();
  }, [showInactive]);

  const loadPrograms = async () => {
    try {
      setLoading(true);
      const data = await adminGetAllPrograms(showInactive);
      setPrograms(data);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load programs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await adminDeleteProgram(id);
      loadPrograms();
    } catch (err) {
      alert(err.message || "Failed to delete program");
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await adminToggleProgramStatus(id);
      loadPrograms();
    } catch (err) {
      alert(err.message || "Failed to toggle program status");
    }
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
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Manage Programs</p>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href="/admin/programs/new"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition shadow-md"
              >
                + New Program
              </Link>
              <Link
                href="/admin/meetings"
                className="px-4 py-2 bg-gradient-to-r from-coral to-peach text-white rounded-lg hover:opacity-90 transition shadow-md"
              >
                View Meetings
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
        <div className="mb-6 flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showInactive}
              onChange={(e) => setShowInactive(e.target.checked)}
              className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700">Show inactive programs</span>
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Programs List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading programs...</p>
          </div>
        ) : programs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">No programs found.</p>
            <Link
              href="/admin/programs/new"
              className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition"
            >
              Create Your First Program
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program._id}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  program.isActive
                    ? "border-green-500"
                    : "border-gray-300 opacity-75"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      program.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {program.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {program.shortDescription || program.description}
                </p>

                <div className="text-xs text-gray-500 mb-4">
                  <p>Slug: {program.slug}</p>
                  <p>Order: {program.order}</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <Link
                    href={`/admin/programs/${program._id}/edit`}
                    className="flex-1 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition text-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleToggleStatus(program._id)}
                    className={`px-3 py-2 text-sm rounded transition ${
                      program.isActive
                        ? "bg-yellow-500 text-white hover:bg-yellow-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {program.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleDelete(program._id, program.title)}
                    className="px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

