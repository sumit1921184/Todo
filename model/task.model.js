const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "completed"], 
        required: true,
        default: "active"
    }
},{
    versionKey: false
})


const TaskModel = mongoose.model('tasks', taskSchema);


module.exports = {
    TaskModel
}