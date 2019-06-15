const mongoose = require('mongoose')

const url = "mongodb+srv://jvilla8a:villamizar_8a@cluster-xdggx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true})
        .then(db => console.log('DB Connected Successfuly'))
        .catch(err => console.error(err));

module.exports = mongoose;