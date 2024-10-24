const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/monogpractice");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    image: String
})

module.exports = mongoose.model('user', userSchema);

