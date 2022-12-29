const { Schema, Types, model } = require('mongoose');

const songSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: Types.ObjectId,
        required: true,
    },
    createdAt: { type: Date, default: Date.now() },
});

const Song = model('Song', songSchema);
exports.Song = Song;