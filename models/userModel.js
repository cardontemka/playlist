const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
});

const User = model('User', userSchema);
exports.User = User;