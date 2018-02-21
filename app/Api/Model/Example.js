const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ExampleSchema = new Schema({});



const Example = mongoose.model('examples', ExampleSchema);

module.exports = Example;


module.exports.createNews = (newExample, callback) => {

    Example.save(callback);
}
