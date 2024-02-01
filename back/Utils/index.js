//const express = require('express');
//const router = express.Router();
// ROUTER 

const getCharById = require('../Controllers/getCharById');
const { postFav, deleteFav } = require('../Controllers/handleFavorites');
const login = require('../Controllers/login');
const router = require('express').Router();


// maneja las rutas que empizan con host/rickandmorty
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;