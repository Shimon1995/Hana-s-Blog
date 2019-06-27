const mongoose = require('mongoose');

module.exports = mongoose.model('Portfolio', mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
        unique: true
    }
}));