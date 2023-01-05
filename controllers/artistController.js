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
  const result = await Artist.find({});
  res.send(result);
};

exports.getArtist = async (req, res) => {
  const result = await Artist.findById(req.params.id);
  res.send(result);
};
