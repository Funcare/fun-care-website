"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  adminGetProgramById,
  adminUpdateProgram,
} from "../../../../../utils/api";

export default function EditProgramPage() {
  const router = useRouter();
  const params = useParams();
  const programId = params.id;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    shortDescription: "",
    color: "bg-orange-200",
    icon: "",
    link: "",
    isActive: true,
    order: 0,
    content: {
      paragraphs: [""],
      bulletPoints: [""],
      idealFor: {
        title: "",
        description: "",
      },
      ctaText: "",
      sideImage: "",
      sideDescription: "",
    },
    gradientColors: ["#F3C6A4", "#FFF4E3", "#F3C6A4"],
  });

  useEffect(() => {
    loadProgram();
  }, [programId]);

  const loadProgram = async () => {
    try {
      setLoading(true);
      const program = await adminGetProgramById(programId);
      setFormData({
        title: program.title || "",
        slug: program.slug || "",
        description: program.description || "",
        shortDescription: program.shortDescription || "",
        color: program.color || "bg-orange-200",
        icon: program.icon || "",
        link: program.link || "",
        isActive: program.isActive !== undefined ? program.isActive : true,
        order: program.order || 0,
        content: {
          paragraphs: program.content?.paragraphs || [""],
          bulletPoints: program.content?.bulletPoints || [""],
          idealFor: {
            title: program.content?.idealFor?.title || "",
            description: program.content?.idealFor?.description || "",
          },
          ctaText: program.content?.ctaText || "",
          sideImage: program.content?.sideImage || "",
          sideDescription: program.content?.sideDescription || "",
        },
        gradientColors: program.gradientColors || ["#F3C6A4", "#FFF4E3", "#F3C6A4"],
      });
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load program");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: value,
      },
    }));
  };

  const handleIdealForChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        idealFor: {
          ...prev.content.idealFor,
          [field]: value,
        },
      },
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: prev.content[field].map((item, i) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: [...prev.content[field], ""],
      },
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: prev.content[field].filter((_, i) => i !== index),
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      await adminUpdateProgram(programId, formData);
      router.push("/admin");
    } catch (err) {
      setError(err.message || "Failed to update program");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading program...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Edit Program</h1>
            <button
              onClick={() => router.push("/admin")}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color Class *
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    placeholder="bg-orange-200"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon Path *
                  </label>
                  <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    required
                    placeholder="/icons/program-icon.png"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Link *
                  </label>
                  <input
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                    placeholder="/programs/program-slug"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description (for cards)
                </label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                />
                <label className="ml-2 text-sm text-gray-700">Active</label>
              </div>
            </div>

            {/* Content Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Content
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paragraphs
                  </label>
                  {formData.content.paragraphs.map((para, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <textarea
                        value={para}
                        onChange={(e) =>
                          handleArrayChange("paragraphs", index, e.target.value)
                        }
                        rows={2}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem("paragraphs", index)}
                        className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem("paragraphs")}
                    className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    + Add Paragraph
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bullet Points
                  </label>
                  {formData.content.bulletPoints.map((point, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) =>
                          handleArrayChange("bulletPoints", index, e.target.value)
                        }
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem("bulletPoints", index)}
                        className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem("bulletPoints")}
                    className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    + Add Bullet Point
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ideal For Title
                  </label>
                  <input
                    type="text"
                    value={formData.content.idealFor.title}
                    onChange={(e) =>
                      handleIdealForChange("title", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ideal For Description
                  </label>
                  <textarea
                    value={formData.content.idealFor.description}
                    onChange={(e) =>
                      handleIdealForChange("description", e.target.value)
                    }
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CTA Text
                  </label>
                  <input
                    type="text"
                    value={formData.content.ctaText}
                    onChange={(e) => handleContentChange("ctaText", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Side Image Path
                  </label>
                  <input
                    type="text"
                    value={formData.content.sideImage}
                    onChange={(e) => handleContentChange("sideImage", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Side Description
                  </label>
                  <textarea
                    value={formData.content.sideDescription}
                    onChange={(e) =>
                      handleContentChange("sideDescription", e.target.value)
                    }
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => router.push("/admin")}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

