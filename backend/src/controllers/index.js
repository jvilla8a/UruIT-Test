const { Game }  = require('../models')
const { User }  = require('../models')

const Controller = { User: {}, Game: {} };

Controller.User.getUsers = (req, res) => {
  User.getUsers().then(data => {
    console.log("Users: ", data);
    res.send(`data: ${data}`);
  }).catch(err => {
    console.log("Error: ", err);
    res.send(err);
  })
}


module.exports = Controller;