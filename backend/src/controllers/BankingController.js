import { Banking } from '../models/Banking.js';

export const BankingController = {
    async getAccountDetails(req, res) {
        try {
            const account = await Banking.findById(req.params.id).populate('accountHolder');
            if (!account) return res.status(404).json({ message: 'Account not found' });
            res.json(account);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createAccount(req, res) {
        try {
            const { accountHolder, accountNumber, accountType, balance } = req.body;
            const newAccount = await Banking.create({ accountHolder, accountNumber, accountType, balance });
            res.status(201).json(newAccount);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateAccount(req, res) {
        try {
            const account = await Banking.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!account) return res.status(404).json({ message: 'Account not found' });
            res.json(account);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteAccount(req, res) {
        try {
            const account = await Banking.findByIdAndDelete(req.params.id);
            if (!account) return res.status(404).json({ message: 'Account not found' });
            res.json({ message: 'Account deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
