import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    
    // Course details
    category: { type: String }, // e.g., "microlearning", "workshop", "certification"
    duration: { type: String }, // e.g., "2 hours", "4 weeks"
    level: { type: String }, // e.g., "beginner", "intermediate", "advanced"
    price: { type: Number }, // Optional, can be free
    isFree: { type: Boolean, default: false },
    
    // Content
    content: {
      learningObjectives: [{ type: String }],
      modules: [
        {
          title: { type: String },
          description: { type: String },
          duration: { type: String },
        },
      ],
      instructor: { type: String },
      prerequisites: [{ type: String }],
    },
    
    // Media
    thumbnail: { type: String }, // Course thumbnail image
    videoPreview: { type: String }, // Optional video preview URL
    
    // Status
    isActive: { type: Boolean, default: true },
    isPublished: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    
    // Enrollment
    enrollmentCount: { type: Number, default: 0 },
    maxEnrollment: { type: Number }, // Optional limit
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);

