const express = require('express');
const { createSong, getSong, updateSong, deleteSong, getSongs, addArtistToSong } = require('../controllers/songController');

const router = express.Router();

router
    .get('/songs', getSongs)
    .get('/songs/:id', getSong)
    .post('/songs', createSong, addS)
    .put('/song/:id', updateSong)
    .put('/songs/:id', addArtistToSong)
    .delete('/song/:id', deleteSong)

exports.songRoutes = router;