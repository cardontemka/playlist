const { Schema, model } = require('mongoose');

const playlistSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    isPrivate: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: false,
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    createdAt: {
        type: Date,
        requered: true,
        default: Date.now()
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
});

const Playlist = model('Playlist', playlistSchema);
exports.Playlist = Playlist