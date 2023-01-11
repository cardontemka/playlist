const express = require('express');
const { createSong, getSong, updateSong, deleteSong, getSongs } = require('../controllers/songController');

const router = express.Router();

router
    .get('/songs', getSongs)
    .get('/songs/:id', getSong)
    .post('/songs', createSong)
    .put('/song/:id', updateSong)
    .delete('/song/:id', deleteSong)

exports.songRoutes = router;