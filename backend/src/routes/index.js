import express from 'express';
import bankingRoutes from './bankingRoutes.js';
import budgetingRoutes from './budgetingRoutes.js';
import educationRoutes from './educationRoutes.js';
import investmentRoutes from './investmentRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/banking', bankingRoutes);
router.use('/budgeting', budgetingRoutes);
router.use('/education', educationRoutes);
router.use('/investment', investmentRoutes);
router.use('/user', userRoutes);

export default router;
