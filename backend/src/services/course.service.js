import Course from "../models/Course.js";

export const getAllCourses = async (includeInactive = false) => {
  const query = includeInactive ? {} : { isActive: true, isPublished: true };
  return await Course.find(query).sort({ order: 1, createdAt: -1 });
};

export const getCourseBySlug = async (slug) => {
  return await Course.findOne({ slug, isActive: true, isPublished: true });
};

export const getCourseById = async (id) => {
  return await Course.findById(id);
};

export const createCourse = async (courseData) => {
  // Generate slug from title if not provided
  if (!courseData.slug && courseData.title) {
    courseData.slug = courseData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  const course = new Course(courseData);
  return await course.save();
};

export const updateCourse = async (id, courseData) => {
  // Generate slug from title if title is being updated
  if (courseData.title && !courseData.slug) {
    courseData.slug = courseData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return await Course.findByIdAndUpdate(id, courseData, {
    new: true,
    runValidators: true,
  });
};

export const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};

export const toggleCourseStatus = async (id) => {
  const course = await Course.findById(id);
  if (!course) {
    throw new Error("Course not found");
  }
  course.isActive = !course.isActive;
  return await course.save();
};

export const publishCourse = async (id) => {
  const course = await Course.findById(id);
  if (!course) {
    throw new Error("Course not found");
  }
  course.isPublished = !course.isPublished;
  return await course.save();
};

