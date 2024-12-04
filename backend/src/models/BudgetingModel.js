import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BudgetingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    allocatedAmount: { type: Number, required: true },
    spentAmount: { type: Number, default: 0 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, { timestamps: true });

export const Budgeting = model('Budgeting', BudgetingSchema);
