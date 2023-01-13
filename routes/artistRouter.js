const express = require("express");
const { getArtists, getArtist, createArtist, updateArtist, deleteArtist, addSongToArtist } = require("../controllers/artistController");

const router = express.Router();

router
  .get("/artists", getArtists)
  .get("/artists/:id", getArtist)
  .post("/artists", createArtist)
  .put("/artist/:id", updateArtist)
  .put("/artists/:id", addSongToArtist)
  .delete("/artist/:id", deleteArtist);

exports.artistRoutes = router;
