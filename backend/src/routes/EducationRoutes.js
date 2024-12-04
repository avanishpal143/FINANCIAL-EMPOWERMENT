import express from 'express';
import { EducationController } from '../controllers/EducationController.js';

const router = express.Router();

router.get('/', EducationController.getCourses);
router.post('/', EducationController.addCourse);
router.put('/:id', EducationController.updateCourse);
router.delete('/:id', EducationController.deleteCourse);

export default router;
