const { Schema, Types, model } = require('mongoose');

const artistSchema = new Schema({
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

const Artist = model('artist', artistSchema);
exports.Artist = Artist;
