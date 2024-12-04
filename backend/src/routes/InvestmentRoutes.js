import express from 'express';
import { InvestmentController } from '../controllers/InvestmentController.js';

const router = express.Router();

router.get('/', InvestmentController.getInvestments);
router.post('/', InvestmentController.addInvestment);
router.put('/:id', InvestmentController.updateInvestment);
router.delete('/:id', InvestmentController.deleteInvestment);

export default router;
