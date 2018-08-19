var todoModel = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // GET ToDo by username
    app.get('/api/todos/:username', function (req, res) {
        todoModel.find({ username: req.params.username }, function (err, result) {
            if (err) {
                throw err;
                return;
            }
            res.send(result);
        });
    });

    // GET TodO by Id
    app.get('/api/todo/:id', function (req, res) {
        todoModel.findById({ _id: req.params.id }, function (err, result) {
            if (err)
                throw err;
            res.send(result);
        });
    });

    //Insert/Update ToDo
    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            todoModel.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            },
                function (err, result) {
                    if (err) throw err;
                    res.send('updated');
                }
            );
        }
        else {
            var newToDo = todoModel({
                username: 'test',
                todo: req.body.todo,
                hasAttachment: req.body.hasAttachment,
                isDone: req.body.isDone
            });
            newToDo.save(function (err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });

    //Delete Todo
    app.delete('/api/todo', function (req, res) {
        todoModel.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('success');
        });
    })
}