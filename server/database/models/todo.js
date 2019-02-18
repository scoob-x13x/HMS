let mongoose = require('mongoose');
let Schema = mongoose.Schema; 

let todosSchema = new Schema({
    title: { type: String },
    completed: { type: Boolean }
});
module.exports = mongoose.model('todo', todosSchema);