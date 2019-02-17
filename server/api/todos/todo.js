
module.exports = function (oApp) {

    let ToDo = require("../../database/models/todo.js")

    oApp.get("/api/todo", function(req, res) {
        ToDo.find(function(err, todos){
            if (err) {
                return res.status(500).send("Error occurred: database error")
            }
            res.json(todos.map(function(todo){
                return {
                    _id : todo._id,
                    title: todo.title,
                    completed: todo.completed
                }
            }))
        })
    })

    oApp.post("/api/todo", function(req, res) {
        new ToDo({
            title: req.body.title,
            completed: req.body.completed
        })
    })

}