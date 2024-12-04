import { Budgeting } from '../models/Budgeting.js';

export const BudgetingController = {
    async getBudgets(req, res) {
        try {
            const budgets = await Budgeting.find({ user: req.user.id });
            res.json(budgets);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createBudget(req, res) {
        try {
            const { category, allocatedAmount, startDate, endDate } = req.body;
            const newBudget = await Budgeting.create({ user: req.user.id, category, allocatedAmount, startDate, endDate });
            res.status(201).json(newBudget);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateBudget(req, res) {
        try {
            const budget = await Budgeting.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!budget) return res.status(404).json({ message: 'Budget not found' });
            res.json(budget);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteBudget(req, res) {
        try {
            const budget = await Budgeting.findByIdAndDelete(req.params.id);
            if (!budget) return res.status(404).json({ message: 'Budget not found' });
            res.json({ message: 'Budget deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
