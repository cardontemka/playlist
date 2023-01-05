const express = require('express');
const { createPlaylist, updatePlaylist, deletePlaylist, addToPlaylist, getPlaylists, getPlaylist, addSongToPlaylist } = require('../controllers/playlistController');

const router = express.Router();

router
    .get('/playlists', getPlaylists)
    .get('/playlists/:id', getPlaylist)
    .post('/playlists', createPlaylist)
    .put('/playlist/:id', updatePlaylist)
    .put('/playlists/:id', addSongToPlaylist)
    .delete('/playlist/:id', deletePlaylist)

exports.playlistRoutes = router;