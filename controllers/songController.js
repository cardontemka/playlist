const { Song } = require("../models/songModel");

exports.createSong = async (req, res) => {
    const body = req.body;

    const result = await new Song(body).save()
    res.send(result)
}

exports.getSong = async (req, res) => {
    const playlistId = req.query.playlistId;

    if (playlistId) {
        const result = await Song.find({ playlistId });
        return res.send(result);
    }

    const result = await Song.find({});
    res.send(result);
}

exports.updateSong = async (req, res) => {
    const songId = req.params.id;
    const body = req.body;
    const thisData = await Song.findById( songId )
    const result = await Song.findByIdAndUpdate(songId, {
        artist: body.artist || thisData.artist,
        name: body.name || thisData.name,
        playlistId: body.playlistId || thisData.playlistId
    });
    result.save();
    res.send(result);
}

exports.deleteSong = async (req, res) => {
    const songId = req.params.id;
    const result = await Song.findByIdAndDelete( songId );
    res.send(result);
}
