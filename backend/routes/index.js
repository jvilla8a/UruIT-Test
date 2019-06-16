const express  = require('express');
const router   = express.Router();
const { Game } = require('../src/controllers');
const { User } = require('../src/controllers');

router.get('/', (req, res, next) => { res.render('index', { title: 'Express' }); });

router.get('/users', User.getUsers);

module.exports = router;