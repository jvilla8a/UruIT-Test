const express  = require('express');
const router   = express.Router();
const { Game } = require('../src/controllers');

router.get('/', (req, res, next) => { res.render('index', { title: 'Express' }); });

router.get('/games', Game.getGames);
router.post('/game', Game.createGame);

module.exports = router;  