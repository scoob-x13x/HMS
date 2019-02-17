

let mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = function(oAppEnv){
    mongoose.connect('mongodb://localhost:27017/HMS')
    console.log("Connected")
}
