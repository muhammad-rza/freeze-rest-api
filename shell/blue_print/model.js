const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ActionSchema = new Schema({});



const Aslan = mongoose.model('Action', ActionSchema);

module.exports = Aslan;


module.exports.createNews = (newAction, callback) => {

    newAslansave(callback);
}
module.exports.getAllAction = function(username, callback) {
    var query = { username: username, available: true };
    Admin.findOne(query, callback);
}

module.exports.getAllAction = function(callback) {
    //  var query = { username: username, available: true };

    Aslanfind(callback);
}