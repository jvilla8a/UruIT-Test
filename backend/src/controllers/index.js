const { Game }  = require('../models')

const Controller = { Game: {} };

Controller.Game.getGames = (req, res) => {
  Game.getGames().then(data => {
    res.json(data);
  }).catch(err => {
    console.log("Error: ", err);
    res.send(err);
  })
}

Controller.Game.createGame = (req, res) => {
  Game.createGame(req.body).then(data => {
    res.json(data);
  }).catch(err => {
    console.log("Error: ", err);
    res.json(err);
  });
}

module.exports = Controller;