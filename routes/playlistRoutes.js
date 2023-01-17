const express = require('express');
const { createPlaylist, updatePlaylist, deletePlaylist, getPlaylists, getPlaylist, addSongToPlaylist, removeSongFromPlaylist } = require('../controllers/playlistController');

const router = express.Router();

router
    .get('/playlists', getPlaylists)
    .get('/playlists/:id', getPlaylist)
    .post('/playlists', createPlaylist)
    .put('/playlist/:id', updatePlaylist)
    .put('/playlist/delete/:id', removeSongFromPlaylist)
    .put('/playlists/:id', addSongToPlaylist)
    .delete('/playlist/:id', deletePlaylist)

exports.playlistRoutes = router;