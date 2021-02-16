const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true
    },
    name: String,
    surname: String,
    profilePhotoUrl: String
})
module.exports = mongoose.model('users', userSchema);