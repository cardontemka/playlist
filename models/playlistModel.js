const { Schema, Types, model } = require('mongoose');

const playlistSchema = new Schema({
    title: String,
    // songs:
    description: String,
    creatorId: Types.ObjectId,
    createdAt: { type: Date, default: Date.now() },
    updateAt: Date,
    isPrivate: Boolean,
});

const Playlist = model('Playlist', playlistSchema);
exports.Playlist = Playlist