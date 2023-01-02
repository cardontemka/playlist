const express = require('express');
const { createPlaylist, updatePlaylist, deletePlaylist, addToPlaylist, getPlaylists, getPlaylist } = require('../controllers/playlistController');

const router = express.Router();

router
    .get('/playlists', getPlaylists)
    .get('/playlists/:id', getPlaylist)
    .post('/playlists', createPlaylist)
    .put('/playlist/:id', updatePlaylist)
    .put('/playlists/:id', addToPlaylist)
    .delete('/playlist/:id', deletePlaylist)

exports.playlistRoutes = router;