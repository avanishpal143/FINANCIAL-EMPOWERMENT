import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['User', 'Admin'], default: 'User' },
    bio: { type: String },
    avatar: { type: String },
}, { timestamps: true });

export const User = model('User', UserSchema);
