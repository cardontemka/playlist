const { Playlist } = require("../models/playlistModel");

exports.createPlaylist = async (req, res) => {
    const body = req.body;
    try {
        const result = await new Playlist(body).save();
        res.send(result)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ message: error.message });
        }
    }
}

exports.addSongToPlaylist = async (req, res) => {
    const playlistId = req.params.id;
    const songId = req.body.id;
    const playlist = await Playlist.findById(playlistId);
    playlist.songs.push(songId);
    await playlist.save();
    res.send(playlist);
};

exports.getPlaylists = async (_req, res) => {
    const result = await Playlist.find({}).populate({
        path: 'songs',
        populate: {
            path: 'artist'
        }
    })
    res.send(result)
}

exports.getPlaylist = async (req, res) => {
    const result = await Playlist.findById(req.params.id).populate({
        path: 'songs',
        populate: {
            path: 'artist'
        }
    })
    res.send(result)
}

exports.updatePlaylist = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const result = await Playlist.findByIdAndUpdate(id, body)
        result.save();
        res.send(result);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ message: error.message });
        }
    }
}

exports.deletePlaylist = async (req, res) => {
    const id = req.params.id;
    const result = await Playlist.findByIdAndDelete(id);
    res.send(result);
}
