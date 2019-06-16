const assert       = require('assert')
const mongoose     = require('mongoose')
const { Schema }   = mongoose
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
  return new Promise((resolve, reject) => {
    GAME.find({}, (err, games) => {
      assert.equal(err, null);
  
      console.log(`Get Games Model: ${games}`);
      resolve(games);
    });
  });
}

Model.getGame = param => {
  return new Promise((resolve, reject) => {
    GAME.find(param, (err, game) => {
      assert.equal(err, null);
  
      console.log(`Get Game Model: ${game}`);
      resolve(game);
    });
  });
}

Model.getGameById = id => {
  return new Promise((resolve, reject) => {
    GAME.findById(id, (err, game) => {
      assert.equal(err, null);
  
      console.log(`Get Game Model: ${game}`);
      resolve(game);
    });
  });
}

Model.createGame = (player1, player2) => {
  return new Promise((resolve, reject) => {
    let game = new GAME();
    game.player1 = player1;
    game.player2 = player2;

    game.save(err => {
      assert.equal(err, null);
    });

    console.log(`Create Game Model: ${game}`);
    resolve(game);
  });
}

Model.updateGame = (id, params) => {
  return new Promise((resolve, reject) => {
    GAME.updateOne(id, { $set: params }, (err, result) => {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
  
      console.log(`Update Game Model: ${result}`);
      resolve(result);
    });
  });
}

module.exports = Model