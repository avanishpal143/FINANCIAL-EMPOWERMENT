import { Investment } from '../models/Investment.js';

export const InvestmentController = {
    async getInvestments(req, res) {
        try {
            const investments = await Investment.find({ user: req.user.id });
            res.json(investments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async addInvestment(req, res) {
        try {
            const { investmentType, amount, startDate, maturityDate, returns } = req.body;
            const newInvestment = await Investment.create({ user: req.user.id, investmentType, amount, startDate, maturityDate, returns });
            res.status(201).json(newInvestment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateInvestment(req, res) {
        try {
            const investment = await Investment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!investment) return res.status(404).json({ message: 'Investment not found' });
            res.json(investment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteInvestment(req, res) {
        try {
            const investment = await Investment.findByIdAndDelete(req.params.id);
            if (!investment) return res.status(404).json({ message: 'Investment not found' });
            res.json({ message: 'Investment deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
