const { Schema, Types, model } = require('mongoose');

const songSchema = new Schema({
    name: String,
    artist: { type: Schema.Types.ObjectId, ref: "Artist"},
    playlistId: Types.ObjectId,
    duration: Number,
    createdAt: { type: Date, default: Date.now() },
    url: String,
});

const Song = model('Song', songSchema);
exports.Song = Song;