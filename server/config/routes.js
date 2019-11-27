const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const task = require('../controllers/tasks.js');

module.exports = function(app){

    app.get('/tasks', function(req, res){
        task.showAll(req, res);
    });

    app.get('/tasks/:id', function(req, res){
        task.showOne(req, res);
    });

    app.post('/tasks', function(req, res){
        task.create(req, res);
    });

    app.put('/tasks/:id', function(req, res){
        task.updateOne(req, res);
    });

    app.delete('/tasks/:id', function(req, res){
        task.removeOne(req, res);
    });
}