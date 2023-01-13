const { Artist } = require("../models/artistModel");

exports.createArtist = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Artist(body).save();
    res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    }
  }
};

exports.getArtists = async (_req, res) => {
  try {
    const result = await Artist.find({}).populate({
      path: 'songs',
      populate: {
          path: 'artist'
      }
  });
    res.send(result);
  } catch (error) {
    res.status(502).send('error')
  }
};

exports.getArtist = async (req, res) => {
  try {
    const result = await Artist.findById(req.params.id).populate({
      path: 'songs',
      populate: {
          path: 'artist'
      }
  });
    res.send(result);
  } catch (error) {
    res.status(503).send('error')
  }
};

exports.deleteArtist = async (req, res) => {
  const artistId = req.params.id;
  try {
    const result = await Artist.findByIdAndDelete(artistId);
    res.send(result);
  } catch (error) {
    res.status(504).send('error')
  }
}

exports.updateArtist = async (req, res) => {
  const artistId = req.params.id;
  const body = req.body;
  try {
    const result = await Artist.findByIdAndUpdate(artistId, body);
    result.save();
    res.send(result);
  } catch (error) {
    res.status(505).send('error')
  }
}

exports.addSongToArtist = async (req, res) => {
  const artistId = req.params.id;
  const songId = req.body.id;

  try {
      const artist = await Artist.findByIdAndUpdate(artistId, {
          $push: { songs: songId },
      })
      res.send(artist)
  } catch (error) {
      if (error instanceof Error) {
          res.status(400).send({ message: error.message });
      }
  }
}
