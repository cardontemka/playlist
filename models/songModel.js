const { Schema, Types, model } = require('mongoose');

const songSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // creator: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    // },
    artist: [{
        type: Schema.Types.ObjectId,
        ref: "Artist",
    }],
    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    // url: String,
});

const Song = model('Song', songSchema);
exports.Song = Song;