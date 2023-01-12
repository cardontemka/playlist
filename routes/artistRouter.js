const express = require("express");
const { getArtists, getArtist, createArtist, updateArtist, deleteArtist } = require("../controllers/artistController");

const router = express.Router();

router
  .get("/artists", getArtists)
  .get("/artists/:id", getArtist)
  .post("/artists", createArtist)
  .put("/artists/:id", updateArtist)
  .delete("/artist/:id", deleteArtist);

exports.artistRoutes = router;
