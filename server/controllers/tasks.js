const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports={

    showAll: function (req, res) {
        Task.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },

    showOne: function (req, res) {
        const { id } = req.params;
        Task.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    create: function(req, res){
        var newTask = new Task(req.body);
        newTask.save()
            .then(data => res.json(data))
            .catch(err=> res.json(err));
    },

    updateOne: function(req, res){
        const { id } = req.params;
        Task.findOneAndUpdate({_id: id}, req.body)
            .then(data => res.json(data))
            .catch(err=> res.json(err));
    },

    removeOne: function(req,res){
        const {id} = req.params;
        Task.findOneAndDelete({_id: id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

}