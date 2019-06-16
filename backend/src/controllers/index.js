const { Game }  = require('../models')
const { User }  = require('../models')

const Controller = { User: {}, Game: {} };

Controller.User.getUsers = (req, res) => {
  User.getUsers().then(data => {
    console.log("Users: ", data);
    res.send(`Data Users: ${data}`);
    // res.json(data);
  }).catch(err => {
    console.log("Error: ", err);
    res.send(err);
  })
}

Controller.Game.getGames = (req, res) => {
  Game.getGames().then(data => {
    console.log("Games: ", data);
    res.send(`Data Games: ${data}`);
    // res.json(data);
  }).catch(err => {
    console.log("Error: ", err);
    res.send(err);
  })
}

module.exports = Controller;