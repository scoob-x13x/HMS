let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/public/webapp'));

require("./server/database/db-connect.js")(app);

require("./server/api/todos/todo.js")(app);

require('./client/routes/routes.js')(app);

app.listen(4000, function(){
    console.log("Server listen at Port 4000 - http://localhost:4000");
})