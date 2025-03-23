const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: String,
    isComplete: { type: Boolean, default: false }
});

const TaskModel = mongoose.model('tasks', TaskSchema);
module.exports = TaskModel;