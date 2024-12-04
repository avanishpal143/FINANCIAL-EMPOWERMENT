import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const EducationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseName: { type: String, required: true },
    institution: { type: String, required: true },
    duration: { type: String }, // e.g., "6 months"
    completionDate: { type: Date },
    status: { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' },
}, { timestamps: true });

export const Education = model('Education', EducationSchema);
