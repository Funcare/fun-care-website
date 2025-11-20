import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // URL-friendly identifier
    description: { type: String, required: true },
    shortDescription: { type: String }, // For card display
    color: { type: String, required: true }, // Tailwind color class (e.g., "bg-coral")
    icon: { type: String, required: true }, // Path to icon (e.g., "/icons/CultureShiftCafes.png")
    link: { type: String, required: true }, // Frontend route (e.g., "/programs/culture-shift-cafes")
    
    // Detailed page content
    content: {
      paragraphs: [{ type: String }], // Array of paragraph texts
      bulletPoints: [{ type: String }], // Array of bullet points
      idealFor: {
        title: { type: String },
        description: { type: String },
      },
      ctaText: { type: String }, // Call-to-action button text
      sideImage: { type: String }, // Optional side image path
      sideDescription: { type: String }, // Description for side panel
    },
    
    // Metadata
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 }, // For sorting/ordering programs
    gradientColors: [{ type: String }], // For page background gradient
  },
  { timestamps: true }
);

export default mongoose.model("Program", ProgramSchema);

