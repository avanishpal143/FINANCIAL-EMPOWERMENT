import express from 'express';
import { BudgetingController } from '../controllers/BudgetingController.js';

const router = express.Router();

router.get('/', BudgetingController.getBudgets);
router.post('/', BudgetingController.createBudget);
router.put('/:id', BudgetingController.updateBudget);
router.delete('/:id', BudgetingController.deleteBudget);

export default router;
