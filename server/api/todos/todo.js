module.exports = function (oApp) {

    let ToDo = require("../../database/models/todo.js");

    oApp.get("/api/todo", function(req, res) {
        ToDo.find(function(err, todos){
            if (err) {
                return res.status(500).send("Error occurred: database error");
            }
            res.json(todos.map(function(todo){
                return {
                    _id : todo._id,
                    title: todo.title,
                    insertdate: todo.insertdate,
                    terminationdate: todo.terminationdate,
                    completed: todo.completed
                }
            }));
        });
    });

    oApp.post("/api/todo", function(req, res) {
        new ToDo({
            title: req.body.title,
            terminationdate: req.body.terminationdate,
            completed: req.body.completed
        }).save(function(err, trainer){
            if (err) {
                return res.status(500).send("Error occurred: database error")
            }
            return res.send();
        })
    });

    oApp.delete('/api/todo/:id', function (req, res) {
        ToDo.remove({ 
            _id: req.params.id
        },function (err) {
            if (err) {
                return res.status(500).send('Error occurred: database error');
            }
            return res.send();
        });
    });

}