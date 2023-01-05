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
    // const thisData = await Song.findById( songId )
    const result = await Song.findByIdAndUpdate(songId, body);
    result.save();
    res.send(result);
}

exports.deleteSong = async (req, res) => {
    const songId = req.params.id;
    const result = await Song.findByIdAndDelete(songId);
    res.send(result);
}

exports.addArtistToSong = async (req, res) => {
    const songId = req.params.id;
    const artistId = req.body.id;

    try {
        await Song.findByIdAndUpdate(songId, {
            $push: { artist: artistId },
        })
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ message: error.message });
        }
    }
}
