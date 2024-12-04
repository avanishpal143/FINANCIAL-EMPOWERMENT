import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BankingSchema = new Schema({
    accountHolder: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 },
    accountType: { type: String, enum: ['Savings', 'Current'], required: true },
    transactions: [
        {
            date: { type: Date, default: Date.now },
            type: { type: String, enum: ['Credit', 'Debit'], required: true },
            amount: { type: Number, required: true },
            description: { type: String },
        },
    ],
}, { timestamps: true });

export const Banking = model('Banking', BankingSchema);
