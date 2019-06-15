const assert       = require('assert')
const { Schema }   = require('mongoose')
const { ObjectId } = Schema

const Model = {}

Model.gameSchema = new Schema({
  player1: { type:ObjectId, required:true },
  player2: { type:ObjectId, required:true },
  round1:  { type:Object },
  round2:  { type:Object },
  round3:  { type:Object },
  winner:  { type:ObjectId },
  date:    { type:Date, default: Date.now }
});

const GAME = mongoose.model('game', Model.gameSchema);

Model.getGames = () => {
  GAME.find({}, (err, games) => {
    assert.equal(err, null);

    console.log(`Get Games Model: ${games}`);
    return games;
  });
}

Model.getGame = (param) => {
  GAME.find(param, (err, game) => {
    assert.equal(err, null);

    console.log(`Get Game Model: ${game}`);
    return game;
  });
}

module.exports = Model