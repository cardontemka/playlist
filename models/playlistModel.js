const { request } = require('express');
const { Schema, model } = require('mongoose');

const playlistSchema = new Schema({
    title: String,
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song'}],
    description: String,
    creatorId: String,
    createdAt: { type: Date, default: Date.now() },
    updateAt: Date,
    isPrivate: Boolean,
});

const Playlist = model('Playlist', playlistSchema);
exports.Playlist = Playlist