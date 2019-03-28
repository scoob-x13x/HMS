let mongoose = require('mongoose');
let Schema = mongoose.Schema; 

let todosSchema = new Schema({
    title: { type: String },
    insertdate: { type: Date, default: Date.now },
    terminationdate: { type: Date},
    completed: { type: Boolean }
});
module.exports = mongoose.model('todo', todosSchema);