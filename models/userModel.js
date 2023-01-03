const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = model('User', userSchema);
exports.User = User;