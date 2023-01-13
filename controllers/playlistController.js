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
    try {
        // const playlist = await Playlist.findById(playlistId);
        // playlist.songs.map((item, _index) => {
        //     if (songId !== item.id) {
        //         playlist.update({
        //             $push: { songs: songId },
        //         })
        //     } else {
        //         res.status(505).send('Error')
        //     }
        // })
        const playlist = await Playlist.findByIdAndUpdate(playlistId, {
            $push: { songs: songId }
        })
        res.send(playlist);
    } catch (error) {
        res.status(505).send({ message: error.message })
    }
};

exports.getPlaylists = async (_req, res) => {
    try {
        const result = await Playlist.find({}).populate({
            path: 'songs',
            populate: {
                path: 'artist'
            }
        })
        res.send(result)
    } catch (error) {
        res.status(502).send('Error')
    }
}

exports.getPlaylist = async (req, res) => {
    try {
        const result = await Playlist.findById(req.params.id).populate({
            path: 'songs',
            populate: {
                path: 'artist'
            }
        })
        res.send(result)
    } catch (error) {
        res.status(503).send('error')
    }
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
            res.status(505).send({ message: error.message });
        }
    }
}

exports.deletePlaylist = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Playlist.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.status(502).send('error')
    }
}
