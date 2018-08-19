var todoModel = require('../models/todoModel');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {
        var startedTodos = [{
            username: 'test',
            todo: 'buy milk',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'test',
            todo: 'buy oreos',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'test',
            todo: 'learn node',
            isDone: false,
            hasAttachment: false
        }
        ];

        todoModel.create(startedTodos, function (err, result) {
            res.send(result);
        })
    })

}