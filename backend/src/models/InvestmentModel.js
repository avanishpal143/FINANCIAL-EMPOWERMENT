import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const InvestmentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    investmentType: { type: String, enum: ['Stocks', 'Bonds', 'Mutual Funds', 'Real Estate'], required: true },
    amount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date },
    returns: { type: Number, default: 0 }, // Total profit or loss
}, { timestamps: true });

export const Investment = model('Investment', InvestmentSchema);
