const { Schema, Types, model } = require('mongoose');

const artistSchema = new Schema({
    name: String,
});

const Artist = model('Artist', artistSchema);
exports.Artist = Artist;