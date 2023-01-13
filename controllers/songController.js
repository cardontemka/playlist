const { Song } = require("../models/songModel");
const { Artist } = require("../models/artistModel");

exports.createSong = async (req, res) => {
    const body = req.body;

    try {
        const result = await new Song(body).save()
        res.send(result)
    } catch (error) {
      res.status(505).send('error')
    }
}

exports.getSongs = async (req, res) => {
    const playlistId = req.query.playlistId;

    try {
        if (playlistId) {
            const result = await Song.find({ playlistId }).populate('artist');
            return res.send(result);
        }
        
        const result = await Song.find({}).populate('artist');
        res.send(result);
    } catch (error) {
      res.status(502).send('error')
    }
}

exports.getSong = async (req, res) => {
    try {
        const result = await Song.findById(req.params.id).populate('artist');
        res.send(result);
    } catch (error) {
      res.status(503).send('error')
    }
};

exports.updateSong = async (req, res) => {
    const songId = req.params.id;
    const body = req.body;
    try {
        const result = await Song.findByIdAndUpdate(songId, body);
        result.save();
        res.send(result);
    } catch (error) {
      res.status(502).send('error')
    }
}

exports.deleteSong = async (req, res) => {
    const songId = req.params.id;
    try {
        const result = await Song.findByIdAndDelete(songId);
        res.send(result);
    } catch (error) {
      res.status(502).send('error')
    }
}

exports.addArtistToSong = async (req, res) => {
    const songId = req.params.id;
    const artistId = req.body.id;

    try {
        const song = await Song.findByIdAndUpdate(songId, {
            $push: { artist: artistId },
        })
        res.send(song)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ message: error.message });
        }
    }
}
