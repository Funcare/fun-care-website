import Program from "../models/Program.js";

export const getAllPrograms = async (includeInactive = false) => {
  const query = includeInactive ? {} : { isActive: true };
  return await Program.find(query).sort({ order: 1, createdAt: -1 });
};

export const getProgramBySlug = async (slug) => {
  return await Program.findOne({ slug, isActive: true });
};

export const getProgramById = async (id) => {
  return await Program.findById(id);
};

export const createProgram = async (programData) => {
  // Generate slug from title if not provided
  if (!programData.slug && programData.title) {
    programData.slug = programData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  const program = new Program(programData);
  return await program.save();
};

export const updateProgram = async (id, programData) => {
  // Generate slug from title if title is being updated
  if (programData.title && !programData.slug) {
    programData.slug = programData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return await Program.findByIdAndUpdate(id, programData, {
    new: true,
    runValidators: true,
  });
};

export const deleteProgram = async (id) => {
  return await Program.findByIdAndDelete(id);
};

export const toggleProgramStatus = async (id) => {
  const program = await Program.findById(id);
  if (!program) {
    throw new Error("Program not found");
  }
  program.isActive = !program.isActive;
  return await program.save();
};

