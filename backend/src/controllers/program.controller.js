import * as programService from "../services/program.service.js";

// Public routes
export const getPublicPrograms = async (req, res) => {
  try {
    const programs = await programService.getAllPrograms(false);
    res.status(200).json({
      success: true,
      data: programs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching programs",
      error: error.message,
    });
  }
};

export const getPublicProgramBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const program = await programService.getProgramBySlug(slug);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      data: program,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching program",
      error: error.message,
    });
  }
};

// Admin routes
export const getAllPrograms = async (req, res) => {
  try {
    const includeInactive = req.query.includeInactive === "true";
    const programs = await programService.getAllPrograms(includeInactive);
    res.status(200).json({
      success: true,
      data: programs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching programs",
      error: error.message,
    });
  }
};

export const getProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await programService.getProgramById(id);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      data: program,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching program",
      error: error.message,
    });
  }
};

export const createProgram = async (req, res) => {
  try {
    const program = await programService.createProgram(req.body);
    res.status(201).json({
      success: true,
      message: "Program created successfully",
      data: program,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Program with this slug already exists",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error creating program",
      error: error.message,
    });
  }
};

export const updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await programService.updateProgram(id, req.body);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Program updated successfully",
      data: program,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Program with this slug already exists",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error updating program",
      error: error.message,
    });
  }
};

export const deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await programService.deleteProgram(id);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Program deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting program",
      error: error.message,
    });
  }
};

export const toggleProgramStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await programService.toggleProgramStatus(id);

    res.status(200).json({
      success: true,
      message: `Program ${program.isActive ? "activated" : "deactivated"} successfully`,
      data: program,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

