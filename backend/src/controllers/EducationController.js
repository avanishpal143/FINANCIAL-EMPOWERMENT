import { Education } from '../models/Education.js';

export const EducationController = {
    async getCourses(req, res) {
        try {
            const courses = await Education.find({ user: req.user.id });
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async addCourse(req, res) {
        try {
            const { courseName, institution, duration, completionDate } = req.body;
            const newCourse = await Education.create({ user: req.user.id, courseName, institution, duration, completionDate });
            res.status(201).json(newCourse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateCourse(req, res) {
        try {
            const course = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!course) return res.status(404).json({ message: 'Course not found' });
            res.json(course);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteCourse(req, res) {
        try {
            const course = await Education.findByIdAndDelete(req.params.id);
            if (!course) return res.status(404).json({ message: 'Course not found' });
            res.json({ message: 'Course deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
