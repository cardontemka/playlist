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
    playlists: [
        {
            type: Schema.Types.ObjectId,
            required: false,
            ref: 'Playlist'
        }
    ]
});

const User = model('User', userSchema);
exports.User = User;