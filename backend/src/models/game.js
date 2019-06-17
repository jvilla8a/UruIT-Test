const assert       = require('assert')
const mongoose     = require('mongoose')
const { Schema }   = mongoose

const Model = {}

Model.gameSchema = new Schema({
  player1: { type:String, required:true },
  player2: { type:String, required:true },
  round1:  { type:Object, required:true },
  round2:  { type:Object, required:true },
  round3:  { type:Object },
  winner:  { type:String, required:true },
  date:    { type:Date, default: Date.now }
});

const GAME = mongoose.model('game', Model.gameSchema);

Model.getGames = () => {
  return new Promise((resolve, reject) => {
    GAME.find({}, (err, games) => {
      assert.equal(err, null);
  
      resolve(games);
    });
  });
}

Model.createGame = (data) => {
  return new Promise((resolve, reject) => {
    let game = new GAME();
    
    game.player1 = data.player1;
    game.player2 = data.player2;
    game.round1  = data.round1;
    game.round2  = data.round2;
    game.round3  = data.round3 && data.round3;
    game.winner  = data.winner;

    game.save(err => {
      assert.equal(err, null);
    });

    resolve(game);
  });
}

module.exports = Model