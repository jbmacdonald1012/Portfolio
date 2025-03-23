const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const TaskModel = require('./Models/Task');

const app = express();

const port = 5001;

app.use(cors())
    .use(express.json());


mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.get('/get', (req, res) => {
    TaskModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { isComplete } = req.body;
    
    TaskModel.findByIdAndUpdate(
        { _id: id },
        { isComplete: isComplete },
        { new: true }
    )
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

app.post('/create', (req, res) => {
    const task = req.body.task;
    TaskModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TaskModel.findByIdAndDelete({ _id: id }, {isComplete: true})
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

})