import * as courseService from "../services/course.service.js";

// Public routes
export const getPublicCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses(false);
    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error.message,
    });
  }
};

export const getPublicCourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const course = await courseService.getCourseBySlug(slug);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching course",
      error: error.message,
    });
  }
};

// Admin routes
export const getAllCourses = async (req, res) => {
  try {
    const includeInactive = req.query.includeInactive === "true";
    const courses = await courseService.getAllCourses(includeInactive);
    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: error.message,
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseService.getCourseById(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching course",
      error: error.message,
    });
  }
};

export const createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Course with this slug already exists",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error creating course",
      error: error.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseService.updateCourse(id, req.body);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Course with this slug already exists",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error updating course",
      error: error.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseService.deleteCourse(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting course",
      error: error.message,
    });
  }
};

export const toggleCourseStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseService.toggleCourseStatus(id);

    res.status(200).json({
      success: true,
      message: `Course ${course.isActive ? "activated" : "deactivated"} successfully`,
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const publishCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseService.publishCourse(id);

    res.status(200).json({
      success: true,
      message: `Course ${course.isPublished ? "published" : "unpublished"} successfully`,
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

