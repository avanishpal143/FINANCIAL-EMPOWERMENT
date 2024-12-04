import express from 'express';
import { BankingController } from '../controllers/BankingController.js';

const router = express.Router();

router.get('/:id', BankingController.getAccountDetails);
router.post('/', BankingController.createAccount);
router.put('/:id', BankingController.updateAccount);
router.delete('/:id', BankingController.deleteAccount);

export default router;
