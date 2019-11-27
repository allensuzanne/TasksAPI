const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------create schema--------------------------------------------------
const taskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}},
    { timestamps: true }
);

//----------create model--------------------------------------------------
const Task = mongoose.model('Task', taskSchema);