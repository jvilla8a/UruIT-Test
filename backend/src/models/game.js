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
  return await GAME.find({}, (err, games) => {
    assert.equal(err, null);

    console.log(`Get Games Model: ${games}`);
    return games;
  });
}

Model.getGame = param => {
  return await GAME.find(param, (err, game) => {
    assert.equal(err, null);

    console.log(`Get Game Model: ${game}`);
    return game;
  });
}

Model.getGameById = id => {
  return await GAME.findById(id, (err, game) => {
    assert.equal(err, null);

    console.log(`Get Game Model: ${game}`);
    return game;
  });
}

Model.setGame = (player1, player2) => {
  let instance = new GAME();
  instance.player1 = player1;
  instance.player2 = player2;

  instance.save(err => {
    assert.equal(err, null);
  });

  return instance;
}

Model.updateGame = id => {

}

module.exports = Model