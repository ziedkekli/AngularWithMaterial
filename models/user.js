var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    ordertotal: {
        type: String,
        default: ''
    },
});


module.exports = mongoose.model('User', User);