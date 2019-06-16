const assert     = require('assert')
const mongoose   = require('mongoose')
const { Schema } = mongoose

const Model = {}

Model.userSchema = new Schema({
  nickname: { type:String, required:true },
  email:    { type:String, required:true },
});

const USER = mongoose.model('user', Model.userSchema);

Model.getUsers = () => {
  return new Promise((resolve, reject) => {
    USER.find({}, (err, users) => {
      assert.equal(err, null);
  
      console.log(`Get Users Model: ${users}`);
      resolve(users);
    });
  });
}

Model.getUser = param => {
  return new Promise((resolve, reject) => {
    USER.find(param, (err, user) => {
      assert.equal(err, null);
  
      console.log(`Get User Model: ${user}`);
      resolve(user);
    });
  });
}

Model.getUserById = id => {
  return new Promise((resolve, reject) => {
    USER.findById(id, (err, user) => {
      assert.equal(err, null);
  
      console.log(`Get User Model: ${user}`);
      resolve(user);
    });
  });
}

Model.createUser = (name, email) => {
  return new Promise((resolve, reject) => {
    let instance = new USER();
    instance.name = name;
    instance.email = email;

    instance.save(err => {
      assert.equal(err, null);
    });

    console.log(`Create User Model: ${instance}`);
    resolve(instance);
  });
}

Model.updateUser = (id, params) => {
  return new Promise((resolve, reject) => {
    USER.updateOne(id, { $set: params }, (err, result) => {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
  
      console.log(`Update User Model: ${result}`);
      resolve(result);
    });
  });
}

module.exports = Model