const express = require('express');
const { createSong, getSong, updateSong, deleteSong } = require('../controllers/songController');

const router = express.Router();

router
    .get('/songs', getSong)
    .post('/songs', createSong)
    .put('/song/:id', updateSong)
    .delete('/song/:id', deleteSong)

exports.songRoutes = router;